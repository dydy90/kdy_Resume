import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Career from "./components/Career";
import Certifications from "./components/Certifications";
import Introduction from "./components/Introduction";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Profile />
        <Career />
        <Certifications />
        <Introduction />
      </main>
      <footer className="border-t border-gray-200 py-8 text-center text-xs text-gray-400">
        © 2026 김도윤. All rights reserved.
      </footer>
    </>
  );
}
