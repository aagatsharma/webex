import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

import cchero from "@/assets/contact/cc-hero.jpg";

const ContactStarter = () => {
  return (
    <div className="bg-[#000000] py-20 px-6">
      <div className="max-w-7xl m-auto">
        <div className=" grid grid-cols-2 max-md:grid-cols-1 w-full gap-6">
          <div>
            <h1 className="text-white text-6xl font-bold">Hoostly</h1>
            <h1 className=" text-emerald-300 text-6xl font-semibold">
              Contact Center
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl text-emerald-300  ">
              Set a new bar for extraordinary customer experiences with AI on
              your side.
            </h3>
            <Button
              className="border rounded-full h-14 w-44 bg-transparent hover:text-black hover:bg-white space-x-1 max-md:w-full"
              size="lg"
            >
              <span>Contact Sales</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="my-10 rounded-3xl">
          <img src={cchero} alt="Contact Page" className="rounded-3xl" />
        </div>
        <div className="my-10 grid grid-cols-3 gap-10 max-md:grid-cols-1">
          <div className="flex flex-col gap-5 border-b py-12">
            <h1 className="text-white text-3xl">
              Blend digital to human engagement.
            </h1>
            <p className=" text-gray-300 text-lg">
              Connect the customer experience across all engagement, from
              proactive messaging to digital self-service and human
              interactions.
            </p>
          </div>
          <div className="flex flex-col gap-5 border-b py-12">
            <h1 className="text-white text-3xl">
              Support any channel, anytime.
            </h1>
            <p className=" text-gray-300 text-lg">
              Let customers communicate in their channel of choice, including
              voice, text, email, social, messaging, and more.
            </p>
          </div>
          <div className="flex flex-col gap-5 border-b py-12">
            <h1 className="text-white text-3xl">Understand every customer.</h1>
            <p className=" text-gray-300 text-lg">
              Empower agents with data and history of each customer across the
              entire journey, so they can deliver the best experience, every
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactStarter;
