const certifications = [
  {
    name: "공인중개사",
    issuer: "국토교통부",
    date: "2019",
    number: "-",
  },
  {
    name: "자동차 정비",
    issuer: "한국산업인력공단",
    date: "2007",
    number: "-",
  },
  {
    name: "건설기계 정비",
    issuer: "한국산업인력공단",
    date: "2008",
    number: "-",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="자격증" subtitle="Certifications" />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{cert.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
                <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
                  <span>{cert.date}</span>
                  {cert.number !== "-" && (
                    <>
                      <span>·</span>
                      <span className="font-mono">{cert.number}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
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
