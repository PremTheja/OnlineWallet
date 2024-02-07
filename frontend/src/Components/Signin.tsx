import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="bg-neutral-800 w-full h-full fixed top-0 left-0 z-0">
          {" "}
        </div>
        <div className="border-2 rounded-lg rounded-lg shadow-2xl z-10 bg-white my-12  ">
          <div className="flex flex-row justify-center ">
            <div className="text-2xl font-bold pt-2">Sign In</div>
          </div>
          <div className="text-slate-500 flex flex-row justify-center mt-2 mx-8">
            Enter your credentials to access your
          </div>
          <div className="text-slate-500 flex flex-row justify-center mt-2 mx-8">
            account
          </div>
          <div className="mx-4 mt-8">
            <div>
              <div className="font-bold mb-2 mt-4">Email</div>
            </div>
            <div>
              <input
                type="text"
                className="border-2 rounded w-full p-1"
                placeholder="Enter your Mail"
                required onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <div className="font-bold mb-2 mt-4">Password</div>
            </div>
            <div>
              <input
                type="text"
                className="border-2 rounded w-full p-1"
                placeholder="Enter your password"
                required onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex flex-row justify-center">
              <button className="bg-black text-white rounded w-full p-1 mt-3">
                Sign Up
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-center font-medium mb-3">
              Already have an account?
              <Link to="/Signup" className="underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
