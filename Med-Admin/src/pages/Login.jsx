import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import axios from 'axios'
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Admin");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);
  const {setDToken} = useContext(DoctorContext)

  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {

    event.preventDefault()

    try {

      if (state === 'Admin') {
        const {data} = await axios.post(backendUrl + '/api/admin/login', {email, password})
        if (data.success) {
          sessionStorage.setItem('aToken', data.token)
          setAToken(data.token);

          navigate('/admin-dashboard')
        } else {
          toast.error(data.message)
        }
      } else {
        const {data} = await axios.post(backendUrl + '/api/doctor/login', {email, password})
        if (data.success) {
          sessionStorage.setItem('dToken', data.token)
          setDToken(data.token);

          navigate('/doctor-dashboard')
        } else {
          toast.error(data.message)
        }
      }
      
    } catch (error) {
      toast.error(error.message)
      console.log(error);
      
    }

  }

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col items-start gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 border border-gray-200 rounded-xl text-gray-400 shadow-lg">
        <p className="text-2xl font-semibold m-auto mb-3">
          <span className="text-primary"> {state} </span> Login
        </p>

        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-zinc-300 rounded w-full p-2 mt-1 text-gray-700"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-zinc-300 rounded w-full p-2 mt-1 text-gray-700"
            type="password"
            required
          />
        </div>
        <button type="submit" className="bg-primary text-white w-full py-2 rounded-md text-base mt-4 mb-2 cursor-pointer">
          Login
        </button>

        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
