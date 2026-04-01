import Image from "next/image";

export default function Profile() {
  return (
    <section id="profile" className="max-w-5xl mx-auto px-6 pt-20 pb-16">
      {/* 헤더 문구 */}
      <div className="text-center mb-16">
        <p className="text-sm md:text-base font-medium mb-4 leading-relaxed">
          기획자지만 <span className="text-red-500 font-bold">문서만 쓰는 기획자가 아닙니다.</span><br />
          <span className="text-indigo-600 font-bold">빠른 시제품 수준의 프로토타이핑</span>으로 실현 가능한 기획을 선 검증하여<br />
          <span className="text-orange-500 font-bold">귀사의 리소스를 아껴줄 인재임을 확신합니다.</span>
        </p>
        <p className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug tracking-tight">
          개발 효율성을 극대화하는 실전형 기획자, <span className="text-indigo-600">김도윤</span>입니다.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md">
              8년의 현장 데이터
            </div>
            <span className="text-2xl font-bold text-gray-400">×</span>
            <div className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md">
              AI 주도 개발 역량
            </div>
          </div>
          <span className="text-2xl font-bold text-gray-400">=</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md">
              구현 시행착오 Zero
            </div>
            <span className="text-xl font-bold text-gray-400">→</span>
            <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md">
              연간 수억 원의 개발 리소스 방어
            </div>
          </div>
        </div>
        <p className="mt-4 text-base md:text-lg text-gray-500 font-medium italic">
          "빠른 시장 출시로 급변하는 업계를 선도합니다."
        </p>
        <div className="mt-8 w-16 h-1 bg-indigo-500 rounded-full mx-auto" />

        {/* 3가지 핵심 가치 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* 빠른 프로토타이핑 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-base font-bold text-gray-900">빠른 프로토타이핑</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              <span className="font-semibold text-indigo-600">AI 주도 개발 능력(Python, React, Next.js, Supabase/PostgreSQL)</span>을 활용해 아이디어를 즉시 시제품 수준으로 구현합니다.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              단순 가설에 그치지 않고 기술적 실현 가능성을 직접 검증하여 개발 착수 단계의 불확실성을 제거합니다.
            </p>
          </div>

          {/* 불필요한 리소스 차단 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-base font-bold text-gray-900">불필요한 리소스 차단</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              상업용 부동산 도메인에 대한 깊은 이해를 바탕으로, 현장에 불필요한 기능을 선제적으로 걸러냅니다.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              기획 단계에서 기술적 제약 사항을 고려하여, 개발팀이 핵심 로직과 구조 설계에만 집중할 수 있는 환경을 만듭니다.
            </p>
          </div>

          {/* 비용 및 기회비용 절감 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-base font-bold text-gray-900">비용 및 기회비용 절감</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              모호한 요구사항으로 인한 재작업을 방지하고, 정교한 설계로 연간 수억 원 규모의 개발 인건비 낭비를 막습니다.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              시행착오 없는 기획으로 제품의 시장 출시 속도를 극대화합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* 좌측: 텍스트 정보 */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">김도윤</h1>
            <p className="mt-2 text-lg text-indigo-600 font-medium">8년차 상업용 부동산 전문가<br />빠른 프로토타이핑으로 검증을 먼저하는 기획자</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoItem label="생년월일" value="1990년 08월 29일" />
            <InfoItem label="연락처" value="010-6438-1807" />
            <InfoItem label="이메일" value="kdy@realtylabs.co.kr" />
            <InfoItem label="주소" value="인천광역시 계양구 장제로878, 105동 603호" />
            <InfoItem label="학력" value="인천대학교 기계공학과 중퇴" />
            <InfoItem label="병역" value="병장 만기 전역 (2011.07 – 2013.04)" />
            <div className="flex flex-col gap-0.5">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">MBTI</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-800">ENTP</span>
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium">
                아이디어 뱅크형 · 실행력이 앞서는 행동파
              </span>
            </div>
          </div>
            <InfoItem label="혈액형" value="O형" />
          </div>

        </div>

        {/* 우측: 사진 */}
        <div className="flex-shrink-0">
          <div className="w-44 h-56 rounded-2xl overflow-hidden bg-gray-100 shadow-md relative">
            <Image
              src="/김도윤.png"
              alt="김도윤 프로필 사진"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</span>
      <span className="text-sm text-gray-800">{value}</span>
    </div>
  );
}
