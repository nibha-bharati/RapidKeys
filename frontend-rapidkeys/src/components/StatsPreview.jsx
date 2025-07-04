export default function StatsPreview() {
  return (
    <div className="mt-8 bg-zinc-800 p-4 rounded-lg text-sm text-zinc-300">
      <h2 className="text-white text-lg mb-2">Your Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>Best WPM: <span className="text-yellow-400">85</span></div>
        <div>Avg Accuracy: <span className="text-yellow-400">96%</span></div>
        <div>Total Tests: 14</div>
        <div>Time Spent: 32 mins</div>
      </div>
    </div>
  );
}
