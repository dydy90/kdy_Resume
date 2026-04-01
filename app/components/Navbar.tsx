"use client";

export default function Navbar() {
  const links = [
    { href: "#profile", label: "프로필" },
    { href: "#career", label: "경력 사항" },
    { href: "#certifications", label: "자격증" },
    { href: "#introduction", label: "자기소개서" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-gray-800 tracking-tight">김도윤</span>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
