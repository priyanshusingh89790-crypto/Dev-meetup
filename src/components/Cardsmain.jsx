import {Calendar,Users,Code2} from "lucide-react"
const Cardsmain = () => {
    return (
        <div className="w-full bg-stone-50/30 h-auto">
            <div className="max-w-7xl pt-20 mx-auto items-center justify-center min-h-[calc(97vh-20rem)] ">
               <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-6">
                    Everything you need to grow</h1>
                    <h2 className="text-[18px] font-lato text-gray-500">
                    Dev Meetup provides all the tools you need to connect, learn, and advance your career.</h2>
               </div>
               
               <div className="flex flex-row gap-6 pt-10">
                <div className=" bg-white border hover:border-primary/30 hover:scale-101 hover:shadow-lg transition-all duration-300 border-gray-200 w-[400px] h-[200px] p-6 rounded-lg">
                   <h1 className="bg-primary/10 p-3 rounded-lg w-12 h-12">
                    <Calendar className="h-6 w-auto text-primary"/>
                    </h1>
                    <h1 className="text-xl font-semibold pt-2 pb-2">
                        Discover Events</h1>
                        <h2 className="text-gray-500 font-lato text-[16px]">
                            Find local meetups, hackathons, and tech talks happening in your area.
                        </h2>
                </div>
                <div className=" bg-white border hover:border-primary/30 hover:scale-101 hover:shadow-lg transition-all duration-300 border-gray-200 w-[400px] h-[200px] p-6 rounded-lg">
                   <h1 className="bg-primary/10 p-3 rounded-lg w-12 h-12">
                    <Users className="h-6 w-6 text-primary" />
                    </h1>
                    <h1 className="text-xl font-semibold pt-2 pb-2">
                        Build Connections</h1>
                        <h2 className="text-gray-500 font-lato text-[16px]">
                        Network with fellow developers and grow your professional circle.
                        </h2>
                </div>
                <div className=" bg-white border hover:border-primary/30 hover:scale-101 hover:shadow-lg transition-all duration-300 border-gray-200 w-[400px] h-[200px] p-6 rounded-lg">
                   <h1 className="bg-primary/10 p-3 rounded-lg w-12 h-12">
                    <Code2 className="h-6 w-auto text-primary"/>
                    </h1>
                    <h1 className="text-xl font-semibold pt-2 pb-2">
                        Share Knowledge</h1>
                        <h2 className="text-gray-500 font-lato text-[16px]">
                            Present your projects, learn from others, and collaborate on ideas.
                        </h2>
                </div>
                
                
               </div>
            </div>
        </div>
    );
};

export default Cardsmain;