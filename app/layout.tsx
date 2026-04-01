import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김도윤 이력서",
  description: "김도윤의 이력서입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-full bg-gray-50 text-gray-900 antialiased">
        {children}
        {/* 우측 고정 누끼 이미지 */}
        <div className="fixed bottom-0 right-0 pointer-events-none z-50 hidden xl:block">
          <div className="relative">
            <Image
              src="/김도윤 누끼.png"
              alt="김도윤"
              width={390}
              height={600}
              className="object-contain select-none"
              priority
            />
            <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1.5 px-4">
              {["상권분석 전문가", "실제 8년 필드 경력 상가 전문 중개사", "AI주도 빠른 MVP 개발"].map((text) => (
                <span
                  key={text}
                  className="bg-orange-600/70 text-white text-sm font-semibold px-5 py-2 rounded-full backdrop-blur-sm"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
