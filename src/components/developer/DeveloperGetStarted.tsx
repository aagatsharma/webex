import starter1 from "@/assets/developer/ebfd6b02-4e12-487f-8e3f-274100529d4e.png";
import starter2 from "@/assets/developer/934030d1-f50d-4634-84e5-5dda5527ecc3.png";
import starter3 from "@/assets/developer/4bbdacfe-a369-447b-a716-7eb80d3688d8.png";
import starter4 from "@/assets/developer/6c689415-86d2-4e4a-9693-5387299be96f.png";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const DeveloperGetStarted = () => {
  return (
    <div className="my-10 max-w-7xl m-auto text-white py-10 border-b max-md:mx-4 ">
      <h1 className=" text-5xl">Get Started</h1>
      <div className="mt-10 grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 gap-6 place-items-stretch mx-3">
        <div className="flex flex-col justify-between gap-y-8 ">
          <img src={starter1} alt="Image1" className="w-20 h-20" />
          <h1 className="text-3xl">Sandbox</h1>
          <p className="text-gray-300 text-xl">
            Get started with your own sandbox.
          </p>
          <div>
            <Button className="text-sky-500 hover:text-sky-300 bg-transparent hover:bg-transparent">
              Request your Sandbox <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between  gap-y-8 ">
          <img src={starter2} alt="Image1" className="w-20 h-20" />
          <h1 className="text-3xl">Code Samples</h1>
          <p className="text-gray-300 text-xl">
            Get a head start with sample applications.
          </p>
          <div>
            <Button className="text-sky-500 hover:text-sky-300 bg-transparent hover:bg-transparent ">
              View Samples on Github <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-8">
          <img src={starter3} alt="Image1" className="w-20 h-20" />
          <h1 className="text-3xl">How To's</h1>
          <p className="text-gray-300 text-xl">
            Browse our collection of How To articles.
          </p>
          <div>
            <Button className="text-sky-500 hover:text-sky-300 bg-transparent hover:bg-transparent">
              Start Learning <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-8 ">
          <img src={starter4} alt="Image1" className="w-20 h-20" />
          <h1 className="text-3xl">Dev Community</h1>
          <p className="text-gray-300 text-xl">
            Support from our extensive Webex Community in minutes.
          </p>
          <div>
            <Button className="text-sky-500 hover:text-sky-300 bg-transparent hover:bg-transparent">
              Join the Community
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperGetStarted;
