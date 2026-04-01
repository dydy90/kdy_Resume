# Database Specialist

## 역할
데이터 구조 설계 및 localStorage 캐싱 관리

## 전문 분야
- TypeScript 인터페이스 정의
- localStorage 캐싱 전략
- API 응답 데이터 파싱

## 작업 가이드라인

### 타입 정의
```typescript
// API 응답 타입
interface BuildingTitleItem {
  sigunguCd: string;
  bjdongCd: string;
  dongNm: string;
  bldNm: string;
  // ...
}
```

### localStorage 키 관리
| 키 | 데이터 | 갱신 시점 |
|-----|-------|----------|
| `buildingInfo` | 표제부 | 주소검색 |
| `buildingParams` | API 파라미터 | 주소검색 |
| `buildingFloorInfo` | 층별개요 | 주소검색 |
| `buildingExposInfo` | 전유부 | 주소검색 |
| `buildingAreaInfo` | 전유공용면적 | 호 선택 |
| `parkingDetailMap` | 주차 상세 | 주소검색 |

### 데이터 파싱
- 날짜: "2000년 08월 07일" → { year, month, day }
- 주차: 합산 계산
- 층: 지하/지상 구분
