import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-6 py-8 border-b border-zinc-700 bg-black">
      <div className="text-2xl font-bold tracking-wide text-[#05ab05]">
        {/* <FontAwesomeIcon icon="fa-solid fa-keyboard" /> */}
        RapidKeys
      </div>
    </nav>
  );
}
