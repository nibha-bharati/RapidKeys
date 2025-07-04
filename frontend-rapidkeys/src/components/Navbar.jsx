

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-zinc-700">
      <div className="text-xl font-bold tracking-wide" style={{color: "#05ab05"}}>
        RapidKeys
      </div>
      <div className="space-x-4 text-sm">
        <button className="hover:text-yellow-400">Home</button>
        <button className="hover:text-yellow-400">Test</button>
        <button className="hover:text-yellow-400">Stats</button>
        <button className="hover:text-yellow-400">Login</button>
        <button className="hover:text-yellow-400">Signup</button>
      </div>
    </nav>
  );
}
