import { Target,Lightbulb,Rocket } from "lucide-react";
const Mission = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Our Mission</h1>
                    <p className="text-[20px] p-6 w-[50%] text-center font-lato text-gray-500">
                        We're on a mission to make developer communities more accessible, inclusive, and impactful. We believe that when developers come together, amazing things happen.</p>
            </div>
            <div className="flex items-center w-full p-6 justify-between gap-6">
                <div className="flex flex-col items-center text-center justify-center border border-gray-200 p-6 rounded-lg gap-2 w-[25%]">
                   <div className="flex items-center justify-center bg-primary/10 p-4 rounded-2xl">
                    <Target className="h-7 w-7 text-primary"/>
                   </div>
                    <h1 className="text-xl font-bold">Community First</h1>
                    <p className="text-[16px] font-lato text-gray-500">
                        We believe in the power of community. Every feature we build is designed to help developers connect and grow together.</p>
                </div>
                <div className="flex flex-col items-center text-center justify-center border border-gray-200 p-6 rounded-lg gap-2 w-[25%]">
                   <div className="flex items-center justify-center bg-primary/10 p-4 rounded-lg">
                    <Lightbulb className="h-7 w-7 text-primary"/>
                   </div>
                    <h1 className="text-xl font-bold">Knowledge Sharing</h1>
                        <p className="text-[16px] font-lato text-gray-500">
                            Learning never stops. We create spaces where developers can share knowledge, mentor others, and stay current with technology.
                        </p>
                </div>
                <div className="flex flex-col items-center text-center justify-center border border-gray-200 p-6 rounded-lg gap-2 w-[25%]">
                   <div className="flex items-center justify-center bg-primary/10 p-4 rounded-lg">
                    <Rocket className="h-7 w-7 text-primary"/>
                   </div>
                    <h1 className="text-xl font-bold">Continuous Growth</h1>
                    <p className="text-[16px] font-lato text-gray-500">
                        Whether you're just starting out or a seasoned pro, there's always room to grow. We're here to support your journey.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Mission;