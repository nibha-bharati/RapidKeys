import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-8 border-b border-zinc-700 bg-black">
      <div className="text-2xl font-bold tracking-wide text-[#05ab05]">
        RapidKeys
      </div>
      <div className="space-x-6 text-lg text-white">
        <button className="hover:text-[#05ab05]">Home</button>
        <button className="hover:text-[#05ab05]">Test</button>
        <button className="hover:text-[#05ab05]">Stats</button>
        <Link to={"/login"} className="hover:text-[#05ab05]">Login</Link>
        <Link to={"/signup"} className="hover:text-[#05ab05]">Signup</Link>
      </div>
    </nav>
  );
}
