
import Cardsmain from "./Cardsmain";
import Eventscard from "./Eventscard";
import { Terminal } from "lucide-react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Frontpage = () => {
  const navigate = useNavigate();
  return (
    <>
      

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)]">

          <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Terminal className="h-6 w-6 text-primary" />

            <span className="text-[16px] font-lato text-primary">
              Join 10,000+ developers worldwide
            </span>
          </div>

          <h2 className="text-6xl font-bold text-center mt-6 max-w-3xl">
            Connect with <span className="text-primary">Developers</span> Near You
          </h2>

          <p className="text-[20px] font-lato text-gray-500 text-center mt-6 max-w-2xl">
            Dev Meetup brings together passionate developers for networking,
            learning, and building amazing things together.
          </p>

          <div className="flex gap-5 mt-6">
            <button onClick={()=>navigate("/signup")} className="bg-primary font-lato text-white px-6 py-3 rounded-lg flex items-center gap-2">
              Get Started Free <span>➜</span>
            </button>

            <button onClick={()=>navigate("/login")} className="border font-lato border-gray-200 px-6 py-3 rounded-lg hover:bg-primary/10">
              Login
            </button>
          </div>
        </div>
      </div>

      <Cardsmain />
      <Eventscard />
      <Footer />
      
    </>
  );
};

export default Frontpage;
