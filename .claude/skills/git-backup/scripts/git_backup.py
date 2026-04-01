#!/usr/bin/env python3
"""
Git 백업 스크립트
git 워크플로우 자동화: 상태 확인, 추가, 커밋, 푸시
"""
import subprocess
import sys
import json
from datetime import datetime


def run_command(cmd, capture_output=True):
    """쉘 명령어를 실행하고 결과를 반환합니다."""
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=capture_output,
            text=True,
            encoding='utf-8'
        )
        return result.returncode, result.stdout.strip(), result.stderr.strip()
    except Exception as e:
        return 1, "", str(e)


def check_git_status():
    """git 상태를 확인하고 파싱된 정보를 반환합니다."""
    code, output, error = run_command("git status --porcelain")
    if code != 0:
        return None, f"git 상태 확인 실패: {error}"
    return output.split('\n') if output else [], None


def stage_changes():
    """git add를 사용하여 모든 변경사항을 스테이징합니다."""
    code, output, error = run_command("git add .")
    if code != 0:
        return False, f"변경사항 스테이징 실패: {error}"
    return True, None


def get_staged_diff():
    """스테이징된 변경사항의 diff를 가져옵니다."""
    code, output, error = run_command("git diff --staged --stat")
    if code != 0:
        return None, f"diff 가져오기 실패: {error}"
    return output, None


def create_commit(message):
    """주어진 메시지로 커밋을 생성합니다."""
    code, output, error = run_command(f'git commit -m "{message}"')
    if code != 0:
        return False, f"커밋 생성 실패: {error}"
    return True, output


def push_changes():
    """원격 저장소로 변경사항을 푸시합니다."""
    code, output, error = run_command("git push")
    if code != 0:
        return False, f"푸시 실패: {error}"
    return True, output


def generate_commit_message(diff_output):
    """변경사항을 기반으로 한글 커밋 메시지를 생성합니다."""
    if not diff_output:
        return "수정: 파일 업데이트"

    # 파일 타입을 기반으로 한 간단한 커밋 메시지 생성
    lines = diff_output.split('\n')
    changed_files = []
    for line in lines:
        if '|' in line:
            filename = line.split('|')[0].strip()
            changed_files.append(filename)

    if not changed_files:
        return "수정: 프로젝트 파일 업데이트"

    # 변경사항 분류 (한글 메시지)
    has_jsx = any(f.endswith('.jsx') or f.endswith('.js') for f in changed_files)
    has_css = any(f.endswith('.css') for f in changed_files)
    has_md = any(f.endswith('.md') for f in changed_files)
    has_sql = any(f.endswith('.sql') for f in changed_files)
    has_ts = any(f.endswith('.ts') or f.endswith('.tsx') for f in changed_files)

    if has_jsx or has_ts:
        return "기능: 프론트엔드 컴포넌트 수정"
    elif has_css:
        return "스타일: 스타일링 수정"
    elif has_sql:
        return "데이터베이스: 스키마 수정"
    elif has_md:
        return "문서: 문서 업데이트"
    else:
        return "수정: 프로젝트 파일 업데이트"


def main():
    """메인 워크플로우 실행."""
    commit_message = sys.argv[1] if len(sys.argv) > 1 else None

    # 1단계: git 상태 확인
    print("1단계: git 상태 확인 중...")
    status_lines, error = check_git_status()
    if error:
        print(json.dumps({"success": False, "error": error}, ensure_ascii=False))
        return 1

    if not status_lines or all(not line for line in status_lines):
        print(json.dumps({
            "success": True,
            "message": "커밋할 변경사항이 없습니다. 작업 디렉토리가 깨끗합니다."
        }, ensure_ascii=False))
        return 0

    print(f"{len([s for s in status_lines if s])}개의 변경된 파일을 찾았습니다.")

    # 2단계: 변경사항 스테이징
    print("2단계: 변경사항 스테이징 중...")
    success, error = stage_changes()
    if not success:
        print(json.dumps({"success": False, "error": error}, ensure_ascii=False))
        return 1
    print("변경사항이 성공적으로 스테이징되었습니다.")

    # 3단계: 변경사항 확인 및 커밋 생성
    print("3단계: 변경사항 확인 및 커밋 생성 중...")
    diff_output, error = get_staged_diff()
    if error:
        print(json.dumps({"success": False, "error": error}, ensure_ascii=False))
        return 1

    print(f"변경사항 요약:\n{diff_output}")

    # 제공된 메시지 사용 또는 자동 생성
    final_message = commit_message or generate_commit_message(diff_output)
    print(f"커밋 메시지: {final_message}")

    success, error = create_commit(final_message)
    if not success:
        print(json.dumps({"success": False, "error": error}, ensure_ascii=False))
        return 1
    print("커밋이 성공적으로 생성되었습니다.")

    # 4단계: 원격으로 푸시
    print("4단계: 원격 저장소로 푸시 중...")
    success, push_output = push_changes()
    if not success:
        print(json.dumps({"success": False, "error": push_output}, ensure_ascii=False))
        return 1
    print("푸시가 완료되었습니다.")

    # 5단계: 결과 보고
    print("\n" + "="*50)
    print(f"실제 커밋 메시지: {final_message}")
    print("="*50 + "\n")

    result = {
        "success": True,
        "changes_summary": diff_output,
        "commit_message": final_message,
        "push_status": "success",
        "timestamp": datetime.now().isoformat()
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    main()
