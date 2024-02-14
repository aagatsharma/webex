import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ResourceItem from "./resourceItem/ResourceItem";
import whatsnew from "@/assets/home/whatsnew.jpg";
import { ArrowRight } from "lucide-react";

const NavbarSolutionItem = () => {
  const supportArray = [
    "Product Help",
    "Product Essentials",
    "Webex Community",
    "Contact Support",
    "Webex Insider",
  ];

  const learnArray = [
    "Webex Blog",
    "Customer Stories",
    "Thought Leadership",
    "Live & On-Demand Webinars",
    "Webex Academy",
  ];

  const integrationsArray = [
    "App Hub",
    "Integration Partners",
    "Developer Tools",
  ];

  return (
    <div className=" max-w-7xl m-auto px-2 flex w-full justify-between items-start max-lg:flex-col max-lg:gap-y-6  ">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-black/60 uppercase">Support</h1>
        <div className="grid grid-cols-1 gap-6 pt-3">
          {supportArray.map((item, index) => (
            <ResourceItem item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="text-black/60 uppercase">Learn</h1>
        <div className="grid grid-cols-1 gap-6 pt-3">
          {learnArray.map((item, index) => (
            <ResourceItem item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="text-black/60 uppercase">Integration</h1>
        <div className="flex flex-col gap-6 pt-3">
          {integrationsArray.map((item, index) => (
            <ResourceItem item={item} key={index} />
          ))}
        </div>
      </div>
      <div>
        <Card className=" h-96 w-96 rounded-3xl">
          <CardHeader>
            <img
              src={whatsnew}
              alt="whatsnew"
              className=" w-80 h-auto rounded"
            />
            <CardTitle className=" leading-snug">What's New</CardTitle>
            <CardDescription className=" leading-5">
              Achieve your sustainability goals by gaining insights into your
              carbon emissions and progressing on a net zero journey.
            </CardDescription>
          </CardHeader>

          <CardFooter className="font-bold text-emerald-600  hover:underline hover:cursor-pointer ">
            Learn More
            <ArrowRight />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default NavbarSolutionItem;
