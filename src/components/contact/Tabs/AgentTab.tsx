import image from "@/assets/contact/t-mobile-new.jpg";
import svg1 from "@/assets/contact/01-app-integration-agents.svg";
import svg2 from "@/assets/contact/02-facial-recognition-agents.svg";
import svg3 from "@/assets/contact/03-third-party-integration-agents.svg";
import svg4 from "@/assets/contact/04-seamless-collaboration-agents.svg";
import svg5 from "@/assets/contact/05-remote-support-agents.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AgentTab = () => {
  return (
    <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1 px-5 place-items-center">
      <div>
        <div className=" pb-6">
          <h1 className="text-3xl text-white pb-6 border-b">
            Give your agents the power to solve customer problems the first
            time, with tools and helpful resources at their fingertips, and
            support from their team of experts when they need it.
          </h1>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg1} alt="Image" />
            <p className="text-white text-2xl">Customer journey intelligence</p>
          </div>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg2} alt="Image" />
            <p className="text-white text-2xl">AI-powered agent assistance</p>
          </div>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg3} alt="Image" />
            <p className="text-white text-2xl">
              Integrated collaboration tools
            </p>
          </div>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg4} alt="Image" />
            <p className="text-white text-2xl">CRM integrations</p>
          </div>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg5} alt="Image" />
            <p className="text-white text-2xl">Supervisor tools</p>
          </div>
          <Button className=" text-emerald-600 bg-transparent my-6 px-0 hover:underline hover:bg-transparent">
            Learn More
            <ArrowRight />
          </Button>
        </div>
      </div>
      <div>
        <img src={image} alt="Contact Image" className="rounded-3xl" />
      </div>
    </div>
  );
};

export default AgentTab;
