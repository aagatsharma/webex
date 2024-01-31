import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { useEffect, useRef, useState } from "react";

import tmobileimg from "@/assets/contact/t-mobile-new.jpg";
import tmobilesvg from "@/assets/contact/tmobile-new.svg";
import covermoreimg from "@/assets/contact/cover-more-new.jpg";
import covermoresvg from "@/assets/contact/cover-more-travel-insurance-black-new.svg";
import horizonimg from "@/assets/contact/first-horizon-new.jpg";
import horizonsvg from "@/assets/contact/first-horizon-new.svg";
import cityimg from "@/assets/contact/city-of-buffalo-new.jpg";
import citysvg from "@/assets/contact/04-buffalo-new.svg";

const contactcarousel = [
  {
    id: 1,
    title:
      "Webex enabled 12,000 call center employees to rapidly transition to remote work, resulting in boosted satisfaction for customers and agents.",
    img: tmobileimg,
    svg: tmobilesvg,
  },
  {
    id: 2,
    title:
      "After an unexpected disruption to the travel insurance industry, Cover-More launched Webex Contact Center to better meet customer needs.",
    img: covermoreimg,
    svg: covermoresvg,
  },
  {
    id: 3,
    title:
      "After a long search for a contact center solution with cutting-edge technology and simple onboarding, First Horizon chose Webex.",
    img: horizonimg,
    svg: horizonsvg,
  },
  {
    id: 4,
    title:
      "Webex was able to quickly transform the City of Buffalo’s essential 311 call center and allow agents to work safely from home.",
    img: cityimg,
    svg: citysvg,
  },
];

const ContactCarousel = () => {
  const carouselNextRef = useRef<HTMLButtonElement>(null);
  const carouselPrevRef = useRef<HTMLButtonElement>(null);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="my-20">
      <div className="max-w-7xl m-auto">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 px-3">
          <h1 className="text-6xl font-bold">Customer experience champions.</h1>
          <div className="md:justify-self-end">
            <Button
              className="border-2 border-black rounded-full h-14 w-44 bg-transparent hover:text-white hover:bg-black space-x-1 max-md:w-full text-black"
              size="lg"
            >
              <span>View More</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <div className=" my-10 mx-2">
        <Carousel setApi={setApi}>
          <CarouselContent className=" 2xl:ml-80">
            {contactcarousel.map((carousel, index) => (
              <CarouselItem key={index} className=" lg:basis-3/5">
                <div className="p-1">
                  <Card className=" w-[900px] h-[400px] max-2xl:w-auto max-2xl:h-auto flex items-center justify-center rounded-3xl bg-emerald-100">
                    <CardContent className=" grid grid-cols-2 max-2xl:grid-cols-1 gap-5 pt-3">
                      <div className="flex flex-col gap-5 ">
                        <img
                          src={carousel.img}
                          alt="Image"
                          className="rounded-3xl"
                        />
                        <img
                          src={carousel.svg}
                          alt="Svg"
                          className="flex-1 self-start"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h1 className="text-2xl">{carousel.title}</h1>
                        <Button className=" rounded-none bg-transparent text-black p-0 self-start hover:bg-transparent border-b border-transparent hover:border-emerald-600 hover:text-emerald-600">
                          Watch Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden" ref={carouselPrevRef} />
          <CarouselNext className="hidden" ref={carouselNextRef} />
        </Carousel>
        <div className=" 2xl:ml-80 mt-10 flex justify-center items-center gap-6">
          <ChevronLeft
            className="bg-black text-white rounded-full h-12 w-12 p-3 hover:bg-emerald-600 hover:cursor-pointer"
            onClick={() => {
              carouselPrevRef.current && carouselPrevRef.current.click();
            }}
          />
          <h1 className="text-xl font-bold">
            {current}/{count}
          </h1>
          <ChevronRight
            className="bg-black text-white rounded-full h-12 w-12 p-3 hover:cursor-pointer hover:bg-emerald-600 "
            onClick={() => {
              carouselNextRef.current && carouselNextRef.current.click();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCarousel;
