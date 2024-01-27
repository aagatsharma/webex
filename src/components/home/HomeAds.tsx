import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/home/Suite.jpg";

const HomeAds = () => {
  return (
    <div className="max-w-7xl m-auto my-10 px-2">
      <Card className=" bg-emerald-600 h-60 max-lg:h-auto grid grid-cols-3 max-md:grid-cols-1 justify-items-center place-items-center space-y-3 max-lg:p-4  text-white">
        <div>
          <img src={logo} alt="Suite" className=" w-52 h-52 rounded-full" />
        </div>
        <div className="flex flex-col gap-y-3  ">
          <h2 className=" text-3xl">
            Webex Suite: Intelligent collaboration for any workstyle.
          </h2>
          <h3 className="text-lg">
            See how customers achieved a 204% ROI with integrated calling,
            meetings, messaging, webinars, events, and more—on one unified
            platform.
          </h3>
        </div>
        <div className="flex  justify-center">
          <Button
            variant="outline"
            className=" border-2 bg-transparent border-white text-white rounded-full h-14 hover:text-black hover:bg-white  space-x-1 max-md:w-full"
            size="lg"
          >
            <span>Learn More</span>
            <ArrowRight />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default HomeAds;
