import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-primary">
            <div className="max-w-7xl pt-20 mx-auto items-center justify-center min-h-[calc(70vh-20rem)] ">
                <div className="flex flex-col items-center gap-5 justify-center">
                    <h1 className="text-white text-4xl font-bold">
                        Ready to join the community?
                    </h1>
                    <h2 className="text-white text-[20px] font-lato">
                        Sign up today and start connecting with developers who share your passion for technology.
                    </h2>
                    <button onClick={()=>navigate("/signup")} className="bg-white font-lato text-black px-6 py-3 rounded-lg flex items-center gap-2">
                        Create Free Account <span>➜</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;