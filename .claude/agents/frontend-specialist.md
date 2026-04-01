# Frontend Specialist

## 역할
React/Next.js 프론트엔드 및 상태 관리 전담

## 전문 분야
- React 19 + Next.js 16 App Router
- TypeScript
- TailwindCSS v4
- 상태 관리 (useState, useEffect)
- 이벤트 핸들러 구현

## 작업 가이드라인

### 컴포넌트 수정
- 기존 컴포넌트 구조 유지
- 새로운 State 추가 시 기존 State와 일관성 유지
- 이벤트 핸들러는 기존 패턴 따름

### State 관리
```typescript
// State 선언 패턴
const [value, setValue] = useState("");

// useEffect 의존성 명확히
useEffect(() => {
  // ...
}, [dependency]);
```

### API 호출
```typescript
// fetch 패턴
const response = await fetch(`/api/endpoint?param=${value}`);
const result = await response.json();
const items = result?.response?.body?.items?.item || [];
```

### localStorage 캐싱
```typescript
// 저장
localStorage.setItem("key", JSON.stringify(data));

// 조회
const stored = localStorage.getItem("key");
const data = stored ? JSON.parse(stored) : null;
```

## 현재 프로젝트 주요 파일
- `src/app/admin7/register/page.tsx`: 매물등록 화면
