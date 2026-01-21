import {Code2} from "lucide-react"
import { useNavigate } from "react-router-dom";
const Forgotpass = () => {
    const navigate = useNavigate();
    return (
        <div className=" w-[600px] mx-auto min-h-screen flex items-center justify-center">
            <div className="flex flex-col gap-4 items-center h-auto border border-gray-200 rounded-lg shadow-xl justify-center py-10 p-8">
                <h1 className="flex items-center gap-2 font-bold text-xl"><Code2 className="h-6 w-6 text-primary"/> Dev Meetup</h1>
                <h2 className="text-3xl text-center items-center justify-center w-[350px] font-bold ">Forgot Password ?</h2>
                <h3 className="font-lato text-gray-500 text-[18px] w-[350px] text-center">Enter your email or phone number to reset your password</h3>
                <form className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="flex flex-col gap-2 font-lato">Email or Phone Number
                    <input type="text" placeholder="Enter your Email or Phone" className="border border-gray-200 bg-gray-100/50 w-[400px] rounded-lg focus:outline-primary outline-none focus:border-primary/100 px-4 py-2 font-lato" />
                    </h1>
                    <button className="bg-primary text-white px-6 py-3 rounded-lg w-[400px] flex items-center justify-center gap-2 font-lato">Send Reset Link/OTP</button>
                </form>
                <button onClick={()=>navigate("/login")} className="font-lato text-gray-500 "><b className="p-2">⟵</b> Back to Login</button>
            </div>
        </div>
    );
};

export default Forgotpass;