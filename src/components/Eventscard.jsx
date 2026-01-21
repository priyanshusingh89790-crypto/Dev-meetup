import {ArrowRight,Zap,MapPin,Users,Calendar} from "lucide-react"
const Eventscard = () => {
    return (
        <div className="max-w-7xl pt-20 pb-20 mx-auto items-center justify-center min-h-[calc(100vh-20rem)] ">
            
            <h1 className="text-4xl font-bold">Upcoming Events</h1>
            <div className="flex flex-row items-center pt-4 justify-between">
            <h2 className="text-[18px] font-lato text-gray-500">
                Join these exciting events happening soon </h2>
                <button className="hover:bg-primary/20 text-gray-800 border flex font-lato border-gray-200 px-6 py-2 rounded-lg">View All Events <ArrowRight className="h-6 w-auto text-gray-600" /></button>
            </div>
            <div className="flex flex-row gap-6">
            <div className="flex flex-col group pt-10">
                <div className="bg-primary/10 w-[410px] h-[150px] items-center justify-center flex rounded-t-lg">
                    <Zap className="h-12 w-auto group-hover:text-primary text-primary/70"/>
                </div>
                <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-b-lg w-[410px]">
                    <h1 className="text-xl group-hover:text-primary font-semibold pt-2 pb-2">
                        React.js Workshop</h1>
                        <p className="text-gray-500 font-lato text-[16px] gap-2 flex items-center"><Calendar className="h-4 w-auto text-gray-600" /> Jan 25, 2026 at 6:00 PM</p>
                        <p className="text-gray-500 font-lato text-[16px] gap-2 flex items-center"><MapPin className="h-4 w-auto text-gray-600" /> India,UK</p>
                        <p className="text-gray-500 font-lato text-[16px] gap-2 flex items-center"><Users className="h-4 w-auto text-gray-600" /> 45 attending</p>
                        <button className="hover:bg-primary/10 text-gray-800 border items-center justify-center flex font-lato border-gray-200 px-6 py-2 rounded-lg">View Details </button>
                </div>
            </div>

            <div className="flex flex-col group pt-10">
                <div className="bg-primary/10 w-[410px] h-[150px] items-center justify-center flex rounded-t-lg">
                    <Zap className="h-12 w-auto group-hover:text-primary text-primary/70"/>
                </div>
                <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-b-lg w-[410px]">
                    <h1 className="text-xl group-hover:text-primary font-semibold pt-2 pb-2">
                        AI/ML Study Group</h1>
                        <p className="text-gray-500 font-lato text-[16px] gap-2 flex items-center"><Calendar className="h-4 w-auto text-gray-600" /> Jan 28, 2026 at 7:00 PM</p>
                        <p className="text-gray-500 font-lato text-[16px] gap-2 flex items-center"><MapPin className="h-4 w-auto text-gray-600" /> Virtual Event</p>
                        <p className="text-gray-500 font-lato text-[16px] gap-2 flex items-center"><Users className="h-4 w-auto text-gray-600" /> 120 attending</p>
                        <button className="hover:bg-primary/10 text-gray-800 border items-center justify-center flex font-lato border-gray-200 px-6 py-2 rounded-lg">View Details </button>
                </div>
            </div>

            <div className="flex flex-col group pt-10">
                <div className="bg-primary/10 w-[410px] h-[150px] items-center justify-center flex rounded-t-lg">
                    <Zap className="h-12 w-auto group-hover:text-primary text-primary/70"/>
                </div>
                <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-b-lg w-[410px]">
                    <h1 className="text-xl group-hover:text-primary font-semibold pt-2 pb-2">
                        Startup Pitch Night</h1>
                        <p className="text-gray-500 font-lato text-[16px] gap-2 flex items-center"><Calendar className="h-4 w-auto text-gray-600" /> Feb 1, 2026 at 5:30 PM</p>
                        <p className="text-gray-500 font-lato text-[16px] gap-2 flex items-center"><MapPin className="h-4 w-auto text-gray-600" /> Bangalore, India</p>
                        <p className="text-gray-500 font-lato text-[16px] gap-2 flex items-center"><Users className="h-4 w-auto text-gray-600" /> 89 attending</p>
                        <button className="hover:bg-primary/10 text-gray-800 border items-center justify-center flex font-lato border-gray-200 px-6 py-2 rounded-lg">View Details </button>
                </div>
                </div>

            </div>

        </div>
    );
};

export default Eventscard;