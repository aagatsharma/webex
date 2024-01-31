import commonground from "@/assets/meetings/Where-common-ground-is-found.jpg";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import blue from "@/assets/meetings/blue.png";

const MeetingsStarter = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 max-lg:grid-cols-1 justify-items-center place-content-center xl:ml-28 gap-10 p-3 max-lg:pt-10 relative ">
      <div className="flex flex-col gap-6 z-40">
        <h1 className="text-4xl max-md:text-2xl">Hoostly Meetings </h1>
        <h1 className=" text-8xl max-md:text-4xl font-bold">
          Where common ground is found.
        </h1>
        <h3 className="text-3xl max-md:text-xl text-black/60">
          When everyone has an equitable experience, your meeting platform isn’t
          just helping collaboration—it’s driving better business results.
        </h3>
        <div className="flex items-center gap-5 max-md:flex-col max-md:px-3 lg:mt-10">
          <Button
            size="lg"
            className="h-14 bg-emerald-600 text-white rounded-full text-base hover:bg-black 
             font-medium hover:transition-all hover:duration-300 space-x-1 max-md:w-full "
          >
            <span>Plans & Pricing</span>
            <ArrowRight />
          </Button>
          <Button
            className="border border-black rounded-full h-14 bg-transparent text-black space-x-1 max-md:w-full hover:bg-black hover:text-white group"
            size="lg"
          >
            See How it works
          </Button>
        </div>
      </div>

      <img
        src={commonground}
        alt="Common Ground"
        className="rounded-3xl h-[650px] w-[650px] max-md:h-auto max-md:w-auto z-40"
      />

      <img
        src={blue}
        alt=""
        className="absolute bottom-0 right-0 rotate-180 h-full w-full"
      />
    </div>
  );
};

export default MeetingsStarter;
