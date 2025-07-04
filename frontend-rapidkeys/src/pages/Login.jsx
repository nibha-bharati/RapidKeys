import { Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
    <Header/>
    <div className="min-h-[84.6vh] bg-black flex items-center justify-center px-4">
      <div className="bg-zinc-900 p-8 rounded-xl shadow-lg w-full max-w-md border border-zinc-800">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to RapidKeys</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006500]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-1">Password</label>
            <input
              type="password"
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006500]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#006500] hover:bg-green-700 text-white font-semibold py-2 rounded-md"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-zinc-400 mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#006500] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
