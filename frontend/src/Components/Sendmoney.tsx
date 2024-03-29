import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SendMoney() {

  const navigate = useNavigate();



  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/");
          return;
        }
        // headers body params 
        const resp = await axios.get("http://localhost:3000/api/v1/user/verify", {
          headers: {
            Authorization: `Bearer ${token}` 
            // userId => grghrhgoh939393
          }
        });

        if (resp.data.message !== "User is logged in") {
          navigate("/");
        }


      } catch (error) {
        // Handle error (network error, server error, etc.)
        console.error("Error fetching verification:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-row justify-center h-screen bg-gray-100">
      <div className="border-2 border-slate-200 rounded-lg shadow-2xl z-10 bg-white mt-40 p-8 w-96 h-min">
        <div className="flex flex-row justify-center mx-4 mb-10">
          <div className="text-3xl font-bold">Send Money</div>
        </div>
        <div>
          <div className="flex">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-2xl text-white">H</span>
            </div>
            <div className="text-2xl font-semibold mb-2 ml-2 mt-2">Harkirat Singh</div>
          </div>
          <div className="font-semibold">Amount (in Rs)</div>
          <input placeholder="Enter amount" className="border-2 rounded w-full p-1 my-2"></input>
          <br />
          <button className="text-white bg-green-600 p-1 rounded w-full mt-2 ">Initiate Transfer</button>
        </div>
      </div>
    </div>
  )
}