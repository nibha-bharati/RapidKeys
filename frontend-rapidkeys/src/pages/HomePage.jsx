import Navbar from "../components/Navbar";
import TypingTest from "../components/TypingTest";
import SettingsPanel from "../components/SettingsPanel";
import StatsPreview from "../components/StatsPreview";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen font-mono">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8 min-h-[84vh]">
         <SettingsPanel />
        <TypingTest />
        {/* <StatsPreview /> */}
      </main>
      <Footer/>
    </div>
  );
}
