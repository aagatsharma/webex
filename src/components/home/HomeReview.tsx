import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

interface ReviewsProps {
  icon: string;
  text: string;
}

import TMobile from "@/assets/home/T-mobile.svg";
import WhatsNewImg from "@/assets/home/WhatsNewImage.svg";
import { ArrowRight } from "lucide-react";

const Reviews = ({ icon, text }: ReviewsProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 w-full max-md:flex-col">
      <img src={icon} alt="Icon" />
      <p>{text}</p>
      <Button variant="link" className="gap-2 text-emerald-600">
        <p>Read More</p>
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

const HomeReview = () => {
  const itemsArray = [
    {
      icon: TMobile,
      text: " “We have relied on Webex for nearly every aspect of our business over the past 2 years.”",
    },
    {
      icon: WhatsNewImg,
      text: "“The level of innovation we get with Webex makes it so much easier for us to run our business.”",
    },
  ];
  return (
    <div className=" bg-emerald-50 py-6 w-screen">
      <Carousel className=" max-w-64 m-auto w-full sm:max-w-xs md:max-w-xl lg:max-w-4xl xl:max-w-6xl">
        <CarouselContent>
          {itemsArray.map((items, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-1 justify-center items-center max-lg:flex-col ">
                <Reviews icon={items.icon} text={items.text} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent border-none hover:bg-transparent " />
        <CarouselNext className="bg-transparent border-none hover:bg-transparent" />
      </Carousel>
    </div>
  );
};

export default HomeReview;
