"use client";

import { useState } from "react";
import Image from "next/image";

const wagTechStack = [
  { category: "Frontend", items: "React, Vite, Tailwind CSS", note: "19.2 / 7.2 / 3.4" },
  { category: "Maps", items: "Leaflet, React-Leaflet, V World API", note: "5.0 / 국토교통부" },
  { category: "Visuals", items: "Three.js, React Three Fiber, Drei, Recharts", note: "3D 시각화 및 차트 3.6" },
  { category: "BaaS/DB", items: "Supabase, PostgreSQL", note: "Backend as a Service" },
  { category: "Auth/Server", items: "Supabase Auth, Edge Functions (Deno)", note: "Email/Password" },
];

const experiences = [
  {
    no: "01",
    group: "B2B 입지선정 솔루션 WAG 기획 및 개발, 전문 상가 중개 서비스 제공 (2025.08 ~ 현재)",
    companies: [
      {
        company: "고객은 어디에? (WAG)",
        subTitle: "기업용 입지선정 SaaS & 김도윤 창업연구소 부동산중개",
        position: "총괄 개발 및 기획 / 중개사사무소 운영",
        period: "2025.08 ~ 현재",
        videoUrl: "AAoIjMQ4vWk",
        items: [
          {
            title: "GIS 기반 B2B 솔루션 WAG 개발",
            desc: "인구 밀집 핫스팟 및 경쟁점 분석 기능을 포함한 B2B 입지 선정 소프트웨어 독립 개발.",
            extra: "wag.io.kr / ID: test2@test.com / PW: test1234!",
          },
          {
            title: "전략적 피보팅",
            desc: "공급자 주장 중심의 시장 한계를 분석하여, 기업 수요자의 의사결정을 돕는 데이터 기반 입지선정 솔루션으로 비즈니스 모델 설계.",
          },
          {
            title: "데이터 기반 \"전문\" 중개 서비스",
            desc: "기업 및 개인 고객 대상 상업용 부동산 중개 시, 단순한 설득이 아닌 WAG 솔루션의 데이터를 활용한 객관적 의사결정 분석 제공.",
          },
        ],
        techStack: wagTechStack,
      },
    ],
  },
  {
    no: "02",
    group: "서비스 기획 및 프로젝트 매니징 (2023.10 ~ 2025.08)",
    companies: [
      {
        company: "주식회사 에이피링스",
        subTitle: "아프니까 사장이다",
        position: "상업용 부동산 프로젝트 총괄 기획 팀장",
        period: "2023.10 ~ 2025.08",
        figmaUrl: "https://www.figma.com/design/vJbvZ6cXUDFhB0oZ1xMTcC/%EB%AA%A8%EB%91%90%EC%9D%98%EB%A7%A4%EB%AC%BC-%EC%B5%9C%EC%B4%88%EA%B8%B0%ED%9A%8D?t=2rROA1MVycuNzF8u-1",
        items: [
          {
            title: "상업용 부동산 ERP '모두의매물' 기획",
            desc: "전국 단위 건축물 원시 데이터(Raw Data) 수집 및 DB 구조화.",
          },
          {
            title: "데이터 로직 설계",
            desc: "주소 검색 시 건축물대장 데이터와 실시간 연동되어 표시광고법을 준수할 수 있는 매물 등록 프로세스 설계.",
          },
          {
            title: "비즈니스 회고",
            desc: "개발비 약 2.3억 원 투입 대비 마케팅 예산 5만 원 집행이라는 불균형한 자원 배분으로 인한 사용자 확보 한계 분석.",
          },
          {
            title: "전략적 교훈",
            desc: "기술적 완성도보다 시장 플레이어의 심리(정보 폐쇄성) 파악과 린(Lean)한 의사결정이 핵심임을 체득.",
          },
        ],
      },
    ],
  },
  {
    no: "03",
    group: "부동산 실무 및 조직 관리 (2018.10 ~ 2023.10)",
    companies: [
      {
        company: "부동산 중개법인 인성",
        subTitle: "",
        position: "총괄 교육 팀장 및 실무 전문가",
        period: "",
        items: [
          {
            title: "핵심 업무",
            desc: "신입 온보딩 시스템 구축 및 특수 물건 리스크 해결을 통한 계약 성사, 실무 교육 매뉴얼 고도화 주도.",
          },
        ],
      },
      {
        company: "완벽한 공인중개사 사무소",
        subTitle: "",
        position: "대표 공인중개사 및 운영",
        period: "",
        items: [
          {
            title: "핵심 업무",
            desc: "인력 채용 및 온보딩 교육, 상업용 부동산 중개 실무 전담 운영.",
          },
        ],
      },
      {
        company: "주식회사 특창사",
        subTitle: "",
        position: "상권분석 컨설팅 팀장",
        period: "",
        items: [
          {
            title: "핵심 업무",
            desc: "예비 창업자 대상 입지 분석 컨설팅 및 현직 중개사 대상 데이터 마케팅 실무 교육 진행.",
          },
        ],
      },
    ],
  },
  {
    no: "04",
    group: "이전 전문 분야",
    companies: [
      {
        company: "메르세데스 벤츠 (유로트럭 서비스센터)",
        subTitle: "",
        position: "정비사 (Technician)",
        period: "2017.05 ~ 2018.07",
        items: [
          {
            title: "핵심 업무",
            desc: "대형 상용 차량의 기계적·전자적 시스템 진단 및 정비 업무 수행.",
          },
        ],
      },
    ],
  },
];

type TechStackRow = { category: string; items: string; note: string };
type ExperienceItem = { title: string; desc: string; extra?: string };
type Company = {
  company: string;
  subTitle: string;
  position: string;
  period: string;
  videoUrl?: string;
  items: ExperienceItem[];
  techStack?: TechStackRow[];
};
type ExperienceGroup = { no: string; group: string; companies: Company[] };

export default function Career() {
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);

  return (
    <>
      {/* 모달 */}
      {modalVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setModalVideoId(null)}
        >
          <div
            className="relative w-full max-w-3xl mx-4 aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1`}
              title="WAG 시연 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            <button
              onClick={() => setModalVideoId(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    <section id="career" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="경력 사항" subtitle="Experience" />


        <div className="mt-10 space-y-16">
          {(experiences as ExperienceGroup[]).map((group) => (
            <div key={group.no}>
              {/* 그룹 헤더 */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-semibold text-gray-400 tracking-widest">{group.no}</span>
                <h3 className="text-base font-bold text-gray-900">
                  {group.group.includes("(")
                    ? <>
                        {group.group.split("(")[0]}
                        <span className="text-gray-500 font-normal text-sm">({group.group.split("(")[1]}</span>
                      </>
                    : group.group}
                </h3>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {(group.no === "01" || group.no === "02" || group.no === "03") && (
                <div className="mb-8">
                  <div className="rounded-2xl overflow-hidden shadow-md relative">
                    <Image
                      src={group.no === "01" ? "/wag_inhuga.png" : group.no === "02" ? "/figma.png" : "/강의사진.jpg"}
                      alt={group.no === "01" ? "WAG 서비스 화면" : group.no === "02" ? "Figma 기획 화면" : "강의 현장"}
                      width={1200}
                      height={600}
                      className="w-full object-cover object-[center_50%] max-h-80"
                    />
                    {group.no === "01" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-gray-900/70 text-white text-sm font-bold px-6 py-2.5 rounded-full backdrop-blur-sm tracking-wide">
                          B2B 입지선정 솔루션 WAG.io.kr
                        </span>
                      </div>
                    )}
                    {group.no === "02" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-gray-900/70 text-white text-sm font-bold px-6 py-2.5 rounded-full backdrop-blur-sm tracking-wide">
                          공인중개사 ERP 시스템 모두의매물
                        </span>
                      </div>
                    )}
                    {group.no === "03" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-gray-900/70 text-white text-sm font-bold px-6 py-2.5 rounded-full backdrop-blur-sm tracking-wide">
                          공인중개사 대상 마케팅 실무교육 현장
                        </span>
                      </div>
                    )}
                  </div>
                  {group.no === "03" && (
                    <div className="mt-2 flex items-center justify-end gap-2">
                      <p className="text-xs text-gray-400">* AI로 생성한 사진이 아닙니다. 실제 강의 현장입니다.</p>
                      <a
                        href="https://blog.naver.com/sks901102/223109467838"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-indigo-600 border border-indigo-300 px-3 py-1 rounded-full hover:bg-indigo-50 transition-colors"
                      >
                        후기 확인
                      </a>
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-10">
                {group.companies.map((co, ci) => (
                  <div key={ci} className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                    {/* 좌측 */}
                    <div className="sm:w-64 flex-shrink-0">
                      <p className="text-base font-bold text-gray-900 leading-snug">{co.company}</p>
                      {co.subTitle && (
                        <p className="text-sm text-gray-400 mt-1">{co.subTitle}</p>
                      )}
                      <p className="text-sm text-indigo-600 font-semibold mt-2">{co.position}</p>
                      {co.period && (
                        <p className="text-sm text-gray-400 mt-1">{co.period}</p>
                      )}
                      {co.figmaUrl && (
                        <a
                          href={co.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-xs font-semibold text-purple-600 border border-purple-300 px-3 py-1 rounded-full hover:bg-purple-50 transition-colors"
                        >
                          최초 기획 figma
                        </a>
                      )}
                      {co.videoUrl && (
                        <button
                          onClick={() => setModalVideoId(co.videoUrl!)}
                          className="inline-flex items-center gap-4 mt-3 px-8 py-4 rounded-full bg-red-50 text-red-500 text-base font-medium hover:bg-red-100 transition-colors cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                          WAG 시연 영상
                        </button>
                      )}
                    </div>

                    {/* 우측 */}
                    <div className="flex-1 space-y-3">
                      {co.items.map((item, ii) => (
                        <div key={ii} className="flex gap-3">
                          <span className="mt-2 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              <span className="font-semibold text-gray-900">{item.title}</span>
                              {" — "}
                              {item.desc}
                            </p>
                            {item.extra && (
                              <p className="mt-1 text-xs text-gray-400 font-mono">{item.extra}</p>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* 기술 스택 테이블 */}
                      {co.techStack && (
                        <div className="mt-5">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tech Stack</p>
                          <table className="w-full text-xs border-collapse">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-1.5 pr-4 font-semibold text-gray-500 w-28">분류</th>
                                <th className="text-left py-1.5 pr-4 font-semibold text-gray-500">기술 항목</th>
                                <th className="text-left py-1.5 font-semibold text-gray-500 hidden sm:table-cell">비고</th>
                              </tr>
                            </thead>
                            <tbody>
                              {co.techStack.map((row, ri) => (
                                <tr key={ri} className="border-b border-gray-100">
                                  <td className="py-2 pr-4 font-medium text-gray-700">{row.category}</td>
                                  <td className="py-2 pr-4 text-gray-600 font-mono">{row.items}</td>
                                  <td className="py-2 text-gray-400 hidden sm:table-cell">{row.note}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
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
