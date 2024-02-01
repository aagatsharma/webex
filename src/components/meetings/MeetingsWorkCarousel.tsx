import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const contactcarousel = [
  {
    id: 1,
    title:
      "Hoostly enabled 12,000 call center employees to rapidly transition to remote work, resulting in boosted satisfaction for customers and agents.",
  },
  {
    id: 2,
    title:
      "After an unexpected disruption to the travel insurance industry, Cover-More launched Hoostly Contact Center to better meet customer needs.",
  },
  {
    id: 3,
    title:
      "After a long search for a contact center solution with cutting-edge technology and simple onboarding, First Horizon chose Hoostly.",
  },
];

const MeetingsWorkCarousel = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:p-40 md:p-10 p-4">
        <h1 className="md:text-7xl text-4xl font-bold">Forge a new path </h1>
        <h1 className="md:text-7xl text-4xl font-bold">in hybrid work.</h1>
        <h3 className="my-7 md:text-3xl text-xl text-black/60 xl:mr-96">
          A unified platform. Premier, enterprise-grade features. A seamless
          collaboration experience for all, from anywhere.
        </h3>
      </div>

      <div className=" my-10 mx-2">
        <Carousel opts={{ loop: false }}>
          <CarouselContent className=" 2xl:ml-80 overflow-x-scroll">
            {contactcarousel.map((carousel, index) => (
              <CarouselItem key={index} className=" lg:basis-3/5">
                <div className="p-1">
                  <Card className=" w-[900px] h-[400px] max-2xl:w-auto max-2xl:h-auto flex items-center justify-center rounded-3xl bg-emerald-100">
                    <CardContent className=" grid grid-cols-2 max-2xl:grid-cols-1 gap-5 pt-3">
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
        </Carousel>
      </div>
    </div>
  );
};

export default MeetingsWorkCarousel;
