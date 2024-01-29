import image from "@/assets/contact/og-image.jpg";
import svg1 from "@/assets/contact/01-messaging-customer.svg";
import svg2 from "@/assets/contact/02-contact-center-AI-customer.svg";
import svg3 from "@/assets/contact/03-AI-intelligence-customer.svg";
import svg4 from "@/assets/contact/04-intelligent-customer-experiences-customer.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CustomerTab = () => {
  return (
    <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1 px-5 place-items-center">
      <div>
        <div className=" pb-6">
          <h1 className="text-3xl text-white pb-6 border-b">
            Meet customers across digital channels while connecting business
            system, journey, and preference data to personalize experiences.
          </h1>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg1} alt="Image" />
            <p className="text-white text-2xl">
              Proactive, automated digital messaging
            </p>
          </div>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg2} alt="Image" />
            <p className="text-white text-2xl">AI-driven intelligent routing</p>
          </div>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg3} alt="Image" />
            <p className="text-white text-2xl">
              Customer experience management
            </p>
          </div>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg4} alt="Image" />
            <p className="text-white text-2xl">
              Digital & voice virtual agent self-service
            </p>
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

export default CustomerTab;
