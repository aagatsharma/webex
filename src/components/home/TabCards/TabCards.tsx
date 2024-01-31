import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface TabCardsProps {
  label: string;
  title: string;
  description: string;
  logo: string;
}

const TabCards = ({ label, title, description, logo }: TabCardsProps) => {
  return (
    <Card className=" bg-[#f2f2f2] md:h-[600px] max-md:h-auto flex items-center justify-center md:px-10 py-4 mx-2">
      <div className="flex w-full justify-around items-center max-md:flex-col">
        <div className="flex flex-col items-center md:w-96 gap-y-6 max-sm:gap-y-0 max-md:px-6 px-2 ">
          <CardHeader className="text-3xl text-black/60 max-md:text-lg ">
            {label}
          </CardHeader>
          <CardTitle className="text-6xl max-md:text-3xl max-sm:text-2xl ">
            {title}
          </CardTitle>
          <CardDescription className="text-xl text-black/60 max-md:hidden">
            {description}
          </CardDescription>
          <CardContent className="flex max-md:flex-col items-center gap-5 mt-8 ">
            <Button
              variant="outline"
              className=" border-2 border-black rounded-full h-14 hover:text-white hover:bg-black  space-x-1 max-md:w-full"
              size="lg"
            >
              <span>Learn More</span>
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="link"
              className=" text-emerald-600 hover:border-none"
            >
              Plans & Pricing
              <ArrowRight />
            </Button>
          </CardContent>
        </div>

        <img src={logo} alt={title} className=" w-96 h-auto px-3" />
      </div>
    </Card>
  );
};

export default TabCards;
