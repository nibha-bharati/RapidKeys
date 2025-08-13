import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3000/users/login",
        {
          email,
          password,
        }
      )
      .then((result) => {
        const token = result.data.token;
        if (token) {
          localStorage.setItem("authToken", token);
          const user = result.data.user;
          localStorage.setItem("user", JSON.stringify(user));
        //   notifySuccess();
          if (user.role == "admin") {
            navigate("/adminDashboard");
          } else {
            navigate("/");
          }
        } 

      })
      .catch((e) => {
        console.log("Error occured: ", e);
       alert("Login failed");
    //    notifyFailure()
      });
  };
  return (
    <>
      <Header />
      <div className="min-h-[84.6vh] bg-black flex items-center justify-center px-4">
        <div className="bg-zinc-900 p-8 rounded-xl shadow-lg w-full max-w-md border border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Login to RapidKeys
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Email</label>
              <input
                type="email"
                className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006500]"
                placeholder="you@example.com"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006500]"
                placeholder="••••••••"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <button
            onClick={onSubmitHandler}
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
      <Footer />
    </>
  );
}
