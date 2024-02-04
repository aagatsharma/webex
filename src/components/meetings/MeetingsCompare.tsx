import { Button } from "../ui/button";
import compares from "@/assets/meetings/See-how-Webex-compares.jpg";

const MeetingsCompare = () => {
  return (
    <div className="bg-black lg:p-40 p-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 text-white gap-20">
        <div className="flex flex-col gap-7 lg:pt-10 ">
          <h1 className="lg:text-6xl text-4xl">See how Webex compares.</h1>
          <h3 className="text-gray-500 text-lg lg:text-2xl">
            Hoostly complete, integrated platform delivers enormous benefits for
            customer organizations in terms of simplified deployment, security,
            management, and analytics.
          </h3>
          <div>
            <Button
              className="border border-white rounded-full h-14 bg-transparent text-white space-x-1 max-md:w-full hover:bg-white hover:text-black"
              size="lg"
            >
              Get the e-book
            </Button>
          </div>
        </div>
        <div>
          <img
            src={compares}
            alt="Compares"
            className="rounded-3xl lg:w-[650px] lg:h-[650px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetingsCompare;
