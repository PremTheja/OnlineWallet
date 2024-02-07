import { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(): void {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
  }

  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="bg-neutral-800 w-full h-full fixed top-0 left-0 z-0"></div>
        <div className="border-2 rounded-lg rounded-lg shadow-2xl z-10 bg-white my-12  ">
          <div className="flex flex-row justify-center ">
            <div className="text-2xl font-bold pt-2">Sign Up</div>
          </div>
          <div className="text-slate-500 flex flex-row justify-center mt-2 mx-8">
            Enter your information to creat an
          </div>
          <div className="text-slate-500 flex flex-row justify-center mt-2 mx-8">
            account
          </div>

          <div className="mx-4 mt-8">
            <div>
              <div className="font-bold mb-2 mt-4">First Name</div>
            </div>
            <div>
              <input
                type="text"
                className="border-2 rounded w-full p-1"
                placeholder="Enter your first name"
                required onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div>
              <div className="font-bold mb-2 mt-4">Last Name</div>
            </div>
            <div>
              <input
                type="text"
                className="border-2 rounded w-full p-1"
                placeholder="Enter your Last name"
                required onChange={(event)=> setLastName(event.target.value)}
              />
            </div>
            <div>
              <div className="font-bold mb-2 mt-4">Email</div>
            </div>
            <div>
              <input
                type="text"
                className="border-2 rounded w-full p-1"
                placeholder="Enter your Mail"
                 required onChange={(event)=> setEmail(event.target.value)}
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
              <button
                className="bg-black text-white rounded w-full p-1 mt-3 "
                onClick={handleClick}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-center font-medium mb-3">
              Already have an account?
              <Link to="/login" className="underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
