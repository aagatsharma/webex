import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ResourceItem from "./resourceItem/ResourceItem";
import Sustainability from "@/assets/home/Sustainability.jpg";
import { ArrowRight } from "lucide-react";

const NavbarResourcesItem = () => {
  const industriesArray = [
    "Education",
    "Healthcare",
    "Government",
    "Financial Services",
    "Sports & Entertainment",
    "Nonprofits",
  ];

  const useCasesArray = [
    "Hybrid Work",
    "Sustainability",
    "Return to the Office",
    "Frontline Workers",
  ];

  const crossPlatformArray = [
    "Accessibility",
    "Security",
    "Control Hub",
    "Collaboration AI",
    "Inclusivity",
    "Interoperability",
  ];

  return (
    <div className=" max-w-7xl m-auto px-2 flex w-full justify-between items-start max-lg:flex-col max-lg:gap-y-6  ">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-black/60">Industries</h1>
        <div className="grid grid-cols-1 gap-6 pt-3">
          {industriesArray.map((item, index) => (
            <ResourceItem item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="text-black/60">Use Cases</h1>
        <div className="grid grid-cols-1 gap-6 pt-3">
          {useCasesArray.map((item, index) => (
            <ResourceItem item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="text-black/60">Cross-Platform</h1>
        <div className="flex flex-col gap-6 pt-3">
          {crossPlatformArray.map((item, index) => (
            <ResourceItem item={item} key={index} />
          ))}
        </div>
      </div>
      <div>
        <Card className=" h-96 w-96 rounded-3xl">
          <CardHeader>
            <img
              src={Sustainability}
              alt="Sustainability"
              className=" w-80 h-auto rounded"
            />
            <CardTitle className=" leading-snug">
              Power hybrid work, Sustainability
            </CardTitle>
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

export default NavbarResourcesItem;
