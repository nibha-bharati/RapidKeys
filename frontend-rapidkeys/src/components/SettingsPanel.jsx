export default function SettingsPanel() {
  return (
    <div className="flex gap-4 flex-wrap text-sm text-zinc-300">
      <div>
        Mode:
        <select className="ml-2 bg-zinc-800 p-1 rounded">
          <option>Time</option>
          <option>Words</option>
        </select>
      </div>
      <div>
        Language:
        <select className="ml-2 bg-zinc-800 p-1 rounded">
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>
      <div>
        Theme:
        <select className="ml-2 bg-zinc-800 p-1 rounded">
          <option>Dark</option>
          <option>Light</option>
          <option>Retro</option>
        </select>
      </div>
    </div>
  );
}
