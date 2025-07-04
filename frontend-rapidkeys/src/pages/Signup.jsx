import { Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer";

export default function Signup() {
  return (
    <>
    <Header/>
    <div className="min-h-[84.6vh] bg-black flex items-center justify-center px-4">
      <div className="bg-zinc-900 p-8 rounded-xl shadow-lg w-full max-w-md border border-zinc-800">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Your Account</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Username</label>
            <input
              type="text"
              className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006500]"
              placeholder="yourname"
            />
          </div>

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
            Sign Up
          </button>
        </form>

        <p className="text-sm text-zinc-400 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-[#006500] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
