import {Code2,Eye, EyeOff} from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-[600px] mx-auto min-h-screen flex items-center justify-center">
    <div className="flex flex-col gap-4 items-center h-auto border border-gray-200 rounded-lg shadow-xl justify-center py-10 p-8">
      <h1 className="flex items-center gap-2 font-bold text-xl"><Code2 className="h-6 w-6 text-primary"/> Dev Meetup</h1>
      <h2 className="text-3xl text-center items-center justify-center w-[350px] font-bold ">Create Your Dev Meetup Account</h2>
      <h3 className="font-lato text-gray-500 text-[18px]">Join the developer community</h3>
      <div className="flex gap-6 items-center justify-center max-w-[350px] mx-auto">
        <h1 className="flex flex-col gap-2 font-lato">First Name
          <input type="text" className="border border-gray-200 bg-gray-100/50 rounded-lg focus:outline-primary outline-none focus:border-primary/100 px-4 py-2 font-lato" placeholder="Enter your first name" />
        </h1>
        <h2 className="flex flex-col gap-2 font-lato">Last Name
          <input type="text" className="border border-gray-200 bg-gray-100/50 rounded-lg focus:outline-primary outline-none focus:border-primary/100 px-4 py-2 font-lato" placeholder="Enter your last name" />
        </h2>
      </div>
      <div className="flex flex-col gap-2 font-lato">
        <h1 className="flex flex-col gap-2 font-lato ">Email
          <input type="text" className="border border-gray-200 bg-gray-100/50 rounded-lg focus:outline-primary outline-none focus:border-primary/100 px-4 py-2 w-[450px] font-lato" placeholder="Enter your email" />
        </h1>
        <h2 className="flex flex-col gap-2 font-lato">Phone Number
          <input type="number" className="border border-gray-200 bg-gray-100/50 rounded-lg focus:outline-primary outline-none focus:border-primary/100 px-4 py-2 font-lato" placeholder="+91" />
        </h2>
      </div>
      <div className="gap-3 font-lato"> 
        <h1>Gender</h1>
        <div className="flex gap-5">
        
        <input type="radio" name="gender" id="male"  />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" />
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="other" />
        <label htmlFor="other">Other</label>
        <input type="radio" name="gender" id="prefer-not-to-say" />
        <label htmlFor="prefer-not-to-say">Prefer not to say</label>
        </div>          
      </div>
      <div className="flex relative flex-col gap-2 font-lato">
        <h1>Password</h1>
        <input type={showPassword ? "text" : "password"} className="border border-gray-200 w-[450px] rounded-lg px-4 py-2 focus:outline-primary outline-none focus:border-primary/100 text-gray-700 font-lato" placeholder="Create a strong password" />
        <button onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 p-1 text-gray-500">
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      </div>
      <div className="flex relative flex-col gap-2 font-lato">
        <h1>Confirm Password</h1>
        <input type={showPassword ? "text" : "password"} className="border border-gray-200 w-[450px] rounded-lg px-4 py-2 outline-none focus:outline-primary focus:border-primary/100 text-gray-700 font-lato" placeholder="Confirm your password" />
        <button onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 p-1 text-gray-500">
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      </div>
      <div className="flex w-[450px] gap-2 font-lato">
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>
        <button className="bg-primary font-lato text-white px-6 py-3 rounded-lg w-[450px] flex items-center justify-center gap-2">Sign Up</button>
        <h1 className="font-lato">Already have an account? <button onClick={()=>navigate("/login")} className="text-primary">Login</button></h1>
      
    </div>
    </div>
  );
};

export default Signup;
