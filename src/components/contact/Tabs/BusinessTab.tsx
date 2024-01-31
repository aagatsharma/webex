import image from "@/assets/contact/image.jpg";
import svg1 from "@/assets/contact/01-meetings-business.svg";
import svg2 from "@/assets/contact/02-collaboration-management-business.svg";
import svg3 from "@/assets/contact/03-insights-analytics-business.svg";
import svg4 from "@/assets/contact/04-third-party-integration-business.svg";
import svg5 from "@/assets/contact/05-user-hub-business.svg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BusinessTab = () => {
  return (
    <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1 px-5 place-items-center">
      <div>
        <div className=" pb-6">
          <h1 className="text-3xl text-white pb-6 border-b">
            Unlock valuable insights, optimize workflows, and propel your
            business to new heights with powerful features designed to
            streamline your operations and maximize productivity. 
          </h1>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg1} alt="Image" />
            <p className="text-white text-2xl">
              Customer journey orchestration
            </p>
          </div>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg2} alt="Image" />
            <p className="text-white text-2xl">Workforce optimization</p>
          </div>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg3} alt="Image" />
            <p className="text-white text-2xl">Reporting & analytics</p>
          </div>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg4} alt="Image" />
            <p className="text-white text-2xl">
              Hoostly App Hub & developer tools
            </p>
          </div>
          <div className="flex items-center py-3 border-b gap-6">
            <img src={svg5} alt="Image" />
            <p className="text-white text-2xl">Hoostly Control Hub</p>
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

export default BusinessTab;
