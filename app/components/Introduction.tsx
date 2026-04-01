const newBusinessData = [
  { year: "2020년", count: "1,518,139", change: "-", rate: "-" },
  { year: "2021년", count: "1,456,216", change: "-61,923", rate: "-4.08%" },
  { year: "2022년", count: "1,350,482", change: "-105,734", rate: "-7.26%" },
  { year: "2023년", count: "1,274,702", change: "-75,780", rate: "-5.61%" },
  { year: "2024년", count: "1,216,809", change: "-57,893", rate: "-4.54%" },
];

export default function Introduction() {
  return (
    <section id="introduction" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="자기소개서" subtitle="Introduction" />

        <p className="mt-8 max-w-3xl text-lg font-semibold text-gray-900 leading-8">
          <span className="text-amber-500">상업용 부동산 전문 공인중개사</span>로서,<br />
          로우 테크(Low-Tech) 업계의 한계를<br />
          <span className="text-indigo-500">기술에 대한 갈망</span>으로 돌파해 왔습니다.<br />
          <span className="text-emerald-500">진취적 사고방식</span>으로 성장하며,<br />
          현재는 현장에 필요한 기능을 직접 구현하는 <span className="text-rose-500">압도적인 실행력</span>을 갖췄습니다.
        </p>

        <div className="mt-16 max-w-3xl space-y-16">

          {/* 상업용 부동산 전문 공인중개사 */}
          <div>
            <h3 className="text-base font-bold text-amber-500 mb-4">상업용 부동산 전문 공인중개사</h3>
            <div className="space-y-3 text-[15px] text-gray-700 leading-8">
              <p>
                처음에는 주택(원투룸) 위주의 중개업으로 시작하여, 정부 정책에 따라 매출이 직격타를 받는 구조에 염증을 느껴
                상업용 전문가로 포지션을 전환하였습니다.
              </p>
              <p>
                창업 시장 역시 경기에 따라 거래량이 영향을 받지만, 제조업 중심 국가에서 퇴직 후 선택지가 제한된 국내 특성상
                연간 신규 창업자 수는 소폭 하락세를 보이기는 하지만 주택시장과 다르게 임차 고객을 모집하는데 있어 유의미한 등락폭이 발생하지 않는 것이 전향의 근거가 되었습니다.
              </p>

              {/* 데이터 테이블 */}
              <div className="mt-4 overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm text-center">
                  <thead>
                    <tr className="bg-amber-50 text-amber-700 font-semibold">
                      <th className="py-3 px-4">연도</th>
                      <th className="py-3 px-4">신규 사업자 수</th>
                      <th className="py-3 px-4">증감 수</th>
                      <th className="py-3 px-4">증감률</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newBusinessData.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-2.5 px-4 font-medium text-gray-800">{row.year}</td>
                        <td className="py-2.5 px-4 text-gray-700">{row.count}</td>
                        <td className="py-2.5 px-4 text-gray-500">{row.change}</td>
                        <td className={`py-2.5 px-4 font-medium ${row.rate === "-" ? "text-gray-400" : "text-red-500"}`}>{row.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                계약을 해야만 중개 수익이 발생하는 결과론적 수익 구조 속에서, 어찌보면 전 재산을 투자해 창업에 나서는
                창업자들의 성공 확률을 높이고자 상권분석과 입지분석 역량을 꾸준히 키워왔습니다.
              </p>
              <p>
                그 결과 예비창업자 대상 상권분석 강의를 수차례 진행하였고, 소상공인 대상 블로그 마케팅 강의도 진행하였습니다.
                중개법인에서는 총괄교육팀장으로 재직하며 8개월 만에 월 매출 1억 원을 달성하였습니다.
              </p>
            </div>
          </div>

          {/* 기술에 대한 갈망 */}
          <div>
            <h3 className="text-base font-bold text-indigo-500 mb-4">기술에 대한 갈망</h3>
            <div className="space-y-3 text-[15px] text-gray-700 leading-8">
              <p>
                상업용 부동산 업계에 종사하며, 21세기에도 단순 엑셀로만 매물을 정리하는 업계의 기술 수준에 한계를 느꼈습니다.
                이를 해결하고자 Google Sheets Apps Script를 직접 익혀 직원별 매물 목록의 자동 병합 및 최신 정보 갱신 시스템을 구현하였습니다.
              </p>
              <p>
                이 경험이 계기가 되어 중개업의 기술적 성장 가능성을 고민하게 되었고, 우연한 기회에 <em>아프니까 사장이다</em>에 입사하여
                중개사 ERP 시스템 기획을 도맡게 되었습니다.
              </p>
              <p>
                해당 프로젝트는 <span className="font-bold text-gray-900">[대실패]</span>하였습니다.
                스타트업에 필요한 빠른 의사결정과 시장 검증을 등한시한 채 개발을 밀어붙였고,
                출시 시점에서도 소액의 광고비 집행만으로 고객 유입에 실패하였습니다.
              </p>

              <div className="my-4 flex gap-4">
                <div className="flex-1 bg-red-50 border border-red-100 rounded-xl p-4 text-center">
                  <p className="text-xs text-red-400 font-medium mb-1">외주 개발 비용</p>
                  <p className="text-2xl font-bold text-red-500">2.3억원</p>
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-400 font-medium mb-1">광고비 집행</p>
                  <p className="text-2xl font-bold text-gray-600">5만원</p>
                </div>
              </div>

              <p>
                이 실패 경험은 사용자 니즈의 검증, 대체 상품 존재 여부 파악 등 서비스 기획 전반에 걸쳐 큰 인사이트를 얻는 계기가 되었습니다.
              </p>
            </div>
          </div>

          {/* 진취적 사고방식 */}
          <div>
            <h3 className="text-base font-bold text-emerald-500 mb-4">진취적 사고방식</h3>
            <div className="space-y-3 text-[15px] text-gray-700 leading-8">
              <p>
                세상에 안 되는 건 없다고 믿습니다. 안 되면 방법을 찾아 되게 만드는 것이 개인의 역량이자 능력이라고 생각합니다.
              </p>
              <p>
                개발에 대한 공부도 당시 외주 개발자의 &ldquo;건축물대장 DB 구축 불가&rdquo; 통보에서 시작되었습니다.
                가능성 검토를 위해 직접 공부하여 MariaDB로 데이터를 직접 구축 및 검색 알고리즘 설계 후 직접 테스트한 끝에 결국 구축에 성공하였습니다.
              </p>
              <p>
                안 되는 이유는 무지와 알고자 하는 노력의 부재에서 나온다고 믿습니다.
              </p>
            </div>
          </div>

          {/* 압도적인 실행력 */}
          <div>
            <h3 className="text-base font-bold text-rose-500 mb-4">압도적인 실행력</h3>
            <div className="space-y-3 text-[15px] text-gray-700 leading-8">
              <p>
                ENTP로서 새로운 아이디어가 끊이질 않습니다. 가능성이 보이거나 정말 필요하다고 느껴지면 즉시 착수하여 셀프 검증에 들어갑니다.
              </p>
              <p>
                그렇게 탄생한 솔루션이 <span className="font-semibold text-rose-500">WAG 서비스</span>입니다.
                향후 확장성을 고려해 SaaS 형태로 개발하였으나, 현재는 상담용 개인 툴로 활용 중이며
                BYC 직영점 입점 담당자에게 무상으로 제공하였습니다.
              </p>
              <p>
                검증이 필요하지만, 지금 이 자기소개서를 쓰는 순간에도 네모를 위한 수많은 아이디어들이 머릿속에서 생성되고 있습니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">{subtitle}</p>
      <h2 className="mt-1 text-2xl font-bold text-gray-900">{title}</h2>
      <div className="mt-3 w-10 h-0.5 bg-indigo-500" />
    </div>
  );
}
