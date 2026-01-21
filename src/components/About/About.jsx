import {Code2,Users,Calendar,Heart,Globe} from "lucide-react"
import Mission from "./Mission"
import Story from "./Story"
const About = () => {
    return (
        <div className="max-w-7xl mx-auto pb-20">
            <div className="min-h-screen items-center flex flex-col justify-center ">
                <h1 className="flex items-center text-primary text-[17px] bg-primary/10 px-4 py-2 rounded-full gap-x-2">
                    <Code2 className="h-6 w-6 text-primary"/>
                    About Dev Meetup</h1>
                    <h2 className="text-5xl w-[70%] text-center pt-6 font-bold">

                   Building the Future of <b className="text-primary">Developer Communities</b> </h2>
                   <p className="text-[20px] w-[50%] text-center pt-6 font-lato text-gray-500">Dev Meetup is more than a platform — it's a movement to connect developers worldwide, foster meaningful relationships, and create opportunities for growth and collaboration.</p>
                <div className="flex items-center justify-between pt-20 gap-6 w-full">
                 <div className="flex flex-col items-center border border-gray-200 p-6 rounded-lg w-[25%]">
                   <div className="flex items-center justify-center bg-primary/10 p-4 rounded-lg">
                    <Users className="h-7 w-7 text-primary"/>
                   </div>
                    
                    <h1 className="text-[30px] font-lato font-bold">10,000+</h1>
                    <p className="text-[15px] font-lato text-gray-500">Developers</p>
                 </div>

                 <div className="flex flex-col items-center border border-gray-200 p-6 rounded-lg w-[25%]">
                    <div className="flex items-center justify-center bg-primary/10 p-4 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary"/>
                    </div>
                    <h1 className="text-[30px] font-lato font-bold">500+</h1>
                    <p className="text-[15px] font-lato text-gray-500">Events Hosted</p>
                 </div>
                 <div className="flex flex-col items-center border border-gray-200 p-6 rounded-lg w-[25%]">
                    <div className="flex items-center justify-center bg-primary/10 p-4 rounded-lg">
                    <Globe className="h-6 w-6 text-primary"/>
                    </div>
                    <h1 className="text-[30px] font-lato font-bold">50+</h1>
                    <p className="text-[15px] font-lato text-gray-500">Cities</p>
                 </div>
                 <div className="flex flex-col items-center border border-gray-200 p-6 rounded-lg w-[25%]">
                    <div className="flex items-center justify-center bg-primary/10 p-4 rounded-lg">
                    <Heart className="h-6 w-6 text-primary"/>
                    </div>
                    <h1 className="text-[30px] font-lato font-bold">150+</h1>
                    <p className="text-[15px] font-lato text-gray-500">Communities</p>
                 </div>
            </div>
            </div>
            <Mission/>
            <Story/>
        </div>
        
    );
    
};

export default About;