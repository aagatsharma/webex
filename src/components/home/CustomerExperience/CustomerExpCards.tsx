import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import contact from "@/assets/home/CC.jpg";
import cpass from "@/assets/home/CPaaS.jpg";

const CustomerExpCards = () => {
  return (
    <div className="grid grid-cols-2 my-6 mx-3 max-md:grid-cols-1 gap-4">
      <Card className=" h-[600px] max-sm:h-[500px] max-md:h-[550px] flex flex-col items-center gap-y-4 relative rounded-3xl">
        <CardTitle className="text-5xl max-md:text-3xl pt-10 max-md:py-4 ">
          Contact Center
        </CardTitle>
        <CardDescription className="text-xl text-black/60 px-6">
          Create intelligent, digital to human interactions for more
          personalized customer experiences.
        </CardDescription>
        <CardContent>
          <Button
            variant="outline"
            className="border-2 border-black rounded-full h-14 hover:text-white hover:bg-black space-x-1 max-md:w-full"
            size="lg"
          >
            <span>Learn More</span>
            <ArrowRight />
          </Button>
        </CardContent>
        <div className="absolute bottom-0 w-full">
          <img src={contact} alt="Contact" className=" rounded-b-3xl" />
        </div>
      </Card>

      <Card className=" h-[600px] max-sm:h-[500px] max-md:h-[550px] flex flex-col items-center gap-y-4 relative rounded-3xl">
        <CardTitle className="text-5xl max-md:text-3xl pt-10 max-md:py-4 ">
          CPaaS
        </CardTitle>
        <CardDescription className="text-xl text-black/60 px-6">
          Automate end-to-end customer journeys on a centralized cloud
          communications platform to drive smarter interactions.
        </CardDescription>
        <CardContent>
          <Button
            variant="outline"
            className="border-2 border-black rounded-full h-14 hover:text-white hover:bg-black space-x-1 max-md:w-full"
            size="lg"
          >
            <span>Learn More</span>
            <ArrowRight />
          </Button>
        </CardContent>
        <div className="absolute bottom-0 w-full">
          <img src={cpass} alt="Cpass" className=" rounded-b-3xl" />
        </div>
      </Card>
    </div>
  );
};

export default CustomerExpCards;
