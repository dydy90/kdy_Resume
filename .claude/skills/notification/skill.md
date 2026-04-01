# 작업 완료 알림 스킬

사용자가 작업 완료 시 알림 소리를 받고 싶을 때 사용합니다.

## 사용 시점

사용자가 다음과 같이 말할 때 이 스킬을 사용하세요:
- "알림"
- "완료 알림"
- "끝났어"
- "작업 완료"
- "다 했어"
- "done"

## 실행 방법

PowerShell을 사용하여 Windows 알림 소리를 재생합니다:

```bash
powershell -c "(New-Object Media.SoundPlayer 'C:\Windows\Media\Windows Notify System Generic.wav').PlaySync()"
```

## 동작

1. Windows 시스템 알림 소리를 재생합니다.
2. 사용자에게 작업 완료를 알립니다.
