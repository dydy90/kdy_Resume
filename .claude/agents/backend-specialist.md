# Backend Specialist

## 역할
Next.js API Routes 및 외부 API 연동 전담

## 전문 분야
- Next.js App Router API Routes
- 외부 API 프록시 (공공데이터포털)
- TypeScript 타입 정의
- 에러 처리 및 응답 포맷

## 작업 가이드라인

### API Route 구현
```typescript
// src/app/api/{endpoint}/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  // 파라미터 추출
  // 외부 API 호출
  // 응답 반환
  return NextResponse.json(data);
}
```

### 환경 변수
- `OPENAPI_KEY`: 공공데이터포털 API Key

### 에러 처리
- `resultCode !== "00"`: API 에러
- `try-catch`: 네트워크 에러
- `graceful fallback`: 빈 응답 반환

## 현재 프로젝트 API 목록
| 엔드포인트 | 용도 |
|-----------|------|
| `/api/building-info` | 표제부 |
| `/api/building-floor` | 층별개요 |
| `/api/building-expos` | 전유부 |
| `/api/building-area` | 전유공용면적 |
| `/api/building-total-outline` | 총괄표제부 (신규) |
