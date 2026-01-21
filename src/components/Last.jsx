import { Code2 } from "lucide-react";
const Last = () => {
    return (
        <div className=" max-w-7xl mx-auto pt-10 pb-10">
            <div className="flex items-center justify-between gap-2">
            <h1 className="text-xl font-bold flex items-center gap-2">
                <Code2 className="h-6 w-6 text-primary"/>
                Dev Meetup</h1>
            <p className="text-gray-500 font-lato text-sm mt-2">
                © 2024 Dev Meetup. All rights reserved.
            </p>
        </div>
        </div>
    );
};

export default Last;