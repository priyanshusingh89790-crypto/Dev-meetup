import {Code2} from "lucide-react"
import {useNavigate} from "react-router-dom"
import About from "./About/About"
const Header = () => {
    const navigate = useNavigate();
  return ( 
    <header className="w-full shadow-xl shadow-primary/5 h-16 border border-b-gray-200">
    <div className="flex max-w-7xl mx-auto justify-between">
    <div className="flex items-center gap-2">
      <Code2 className="h-6 w-6 text-primary"/>
      <h1 className="text-3xl font-bold">Dev Meetup</h1>
    </div>
    <div className="">
      <ul className="flex p-5 gap-10">
        <li className="font-lato text-gray-600">Home</li>
        <li className="font-lato text-gray-600">Events</li>
        <li className="font-lato text-gray-600">Community</li>
        <li onClick={()=>navigate("/about")} className="font-lato text-gray-600">About</li>
      </ul>
    </div>
    </div>
    </header>
  );
};

export default Header;
