import collaboration from "@/assets/meetings/Bring-every-part-of-collaboration-together.jpg";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import blue from "@/assets/meetings/blue.png";

const MeetingsCollaborateGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-40 p-10 gap-10 lg:gap-x-20 py-20 place-items-center relative">
      <div>
        <img src={collaboration} alt="Collaboration" className="rounded-3xl" />
      </div>
      <div className="flex flex-col gap-5 ">
        <h1 className="text-5xl max-md:text-xl ">
          Bring every part of collaboration together.
        </h1>
        <h2 className="text-lg max-md:text-base text-gray-400">
          Hybrid work demands seamless communication from anywhere—for everyone.
          The answer is simple: a single platform with calling, meetings,
          messaging, polling, webinars, events, async video, and more.
        </h2>
        <div>
          <Button
            variant="link"
            className="border-b border-transparent  hover:border-emerald-600 space-x-2 px-0 text-emerald-600 "
          >
            Explore Webex
            <ArrowRight />
          </Button>
        </div>
      </div>
      <img
        src={blue}
        alt="Background gradient"
        className="absolute bottom-0 left-0 scale-x-100 -scale-y-100 -z-10  h-full w-full"
      />
    </div>
  );
};

export default MeetingsCollaborateGrid;
