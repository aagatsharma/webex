import card1 from "@/assets/meetings/more_slido.jpg";
import card2 from "@/assets/meetings/more_events.jpg";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import red from "@/assets/meetings/red.png";

const MeetingsExperience = () => {
  return (
    <div className="lg:py-40 relative">
      <div className="flex flex-col lg:px-40 max-md:p-10 my-7">
        <h1 className="md:text-7xl text-4xl font-bold">Experience more from</h1>
        <h1 className="md:text-7xl text-4xl font-bold">Hoostly.</h1>
        <h3 className="text-gray-500 text-lg lg:text-2xl pt-7">
          Get the most complete collaboration portfolio.
        </h3>
      </div>
      <div className="grid p-10 lg:grid-cols-2 grid-cols-1 max-w-6xl lg:my-20 m-auto gap-14">
        <div>
          <img src={card1} alt="Cards" className="rounded-3xl" />
          <div className="mt-6 gap-5 flex justify-between items-center">
            <div className="flex flex-col gap-4">
              <h1 className=" text-3xl ">Slido</h1>
              <h3 className="text-gray-500 text-lg">
                Make meetings instantly interactive with six different types of
                polling and Q&A.
              </h3>
            </div>
            <div>
              <Button className="rounded-full bg-black h-20 w-20 hover:bg-emerald-600">
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img src={card2} alt="Cards" className="rounded-3xl" />
          <div className="mt-6 gap-5 flex justify-between items-center">
            <div className="flex flex-col gap-4">
              <h1 className=" text-3xl ">Hoostly Webinars</h1>
              <h3 className="text-gray-500 text-lg">
                Host virtual meetings at scale from 100 to 10,000 without
                sacrificing engagement.
              </h3>
            </div>
            <div>
              <Button className="rounded-full bg-black h-20 w-20 hover:bg-emerald-600">
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={red}
        alt="Red gradient"
        className="absolute bottom-0 left-0 scale-x-100 -scale-y-100 -z-10  h-full w-full"
      />
    </div>
  );
};

export default MeetingsExperience;
