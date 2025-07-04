import Navbar from "./components/Navbar";
import TypingTest from "./components/TypingTest";
import SettingsPanel from "./components/SettingsPanel";
import StatsPreview from "./components/StatsPreview";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-mono">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <TypingTest />
        <SettingsPanel />
        {/* <StatsPreview /> */}
      </main>
      <footer className="text-center py-4 text-zinc-500 text-sm bottom-0">
        © 2025 RapidKeys • GitHub • Discord • Feedback
      </footer>
    </div>
  );
}
