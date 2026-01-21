import {Code2} from "lucide-react"
import {useNavigate} from "react-router-dom"
const Login = () => {
    const navigate = useNavigate();
    return (
        <div className=" w-[600px] mx-auto min-h-screen flex items-center justify-center">
            <div className="flex flex-col gap-4 items-center h-auto border border-gray-200 rounded-lg shadow-xl justify-center py-10 p-8">
                <div className="flex flex-col gap-2 items-center">
                <h1 className="text-2xl flex items-center gap-2 font-bold"><Code2 className="h-6 w-6 text-primary"/> Dev Meetup</h1>
                <h2 className="text-3xl font-bold">Welcome Back! </h2>
                <p className="font-lato text-gray-500 text-[18px]">Log in to your account to continue</p>
                </div>
            <div className="flex flex-col gap-4 items-center">
                <form action="" className="flex flex-col gap-4">
                    <h1 className="flex flex-col gap-2 font-lato">Email
                    <input type="text" placeholder="Email" className="border border-gray-200 bg-gray-100/50 w-[450px] rounded-lg focus:outline-primary outline-none focus:border-primary/100 px-4 py-2 font-lato" />
                    </h1>
                    <h1 className="flex flex-col gap-2 font-lato">Password
                    <input type="password" placeholder="Password" className="border border-gray-200 bg-gray-100/50 w-[450px] rounded-lg focus:outline-primary outline-none focus:border-primary/100 px-4 py-2 font-lato" />
                    </h1>
                    <button onClick={()=>navigate("/forgotpass")} className="text-primary text-right font-lato">Forgot Password?</button>
                    <button className="bg-primary text-white px-6 py-3 rounded-lg w-[450px] flex items-center justify-center gap-2 font-lato">Login</button>
                </form>
                <p className="font-lato">Don't have an account? <button onClick={()=>navigate("/signup")} className="text-primary font-lato">Sign Up</button></p>
            </div>
        </div>
        </div>
    );
};

export default Login;