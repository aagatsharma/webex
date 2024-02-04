import aion from "@/assets/meetings/AION-logo-slogan-ENG.svg";
import broadcom from "@/assets/meetings/Broadcom_Ltd_Logo.svg";
import clayco from "@/assets/meetings/Clayco_Logo2.svg";
import glugroup from "@/assets/meetings/logo-GluGroup.svg";
import oneworldsurge from "@/assets/meetings/OneWorldSurgery.svg";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import green from "@/assets/meetings/green.png";

const reviews = [
  {
    description:
      "We are seeing as much as a 60-70% reduction in the amount of time it takes to make decisions. Problems are resolved before construction begins and this helps our teams deliver projects faster, optimize costs, and better satisfy clients.",
    author: "Tomislav Žigo, Chief Technology Officer, Clayco",
    image: clayco,
  },
  {
    description:
      " We saw a 230% increase of our usual meeting minutes’ run rate. One of the advantages we see is Cisco’s ability to scale to handle the tremendous increase in meetings. And Broadcom doesn't have to do anything.",
    author:
      "Stanley Toh, Global IT - Head of Enterprise End-users Experience and Services, Broadcom",
    image: broadcom,
  },
  {
    description:
      "Hoostly was the obvious choice, and it’s still the superior platform. It is what we needed for security and confidentiality. Hoostly is an established brand, easy to use, familiar to all, and simultaneous interpretation on top of all of its other features makes it just perfect for our industry.",
    author: "Nada Buric, Director, Aion",
    image: aion,
  },
  {
    description:
      "Hoostly Meetings enables us to conduct ‘one-to-many' sessions. We can have seven partners in one session, each with a local language translation, and with an individual breakout room when needed. It encourages real dialogue.",
    author: "Billy Haining, Cofounder, Glu Group",
    image: glugroup,
  },
  {
    description:
      "We can connect directly from the operating room to the conference room and beyond internationally. It can give students an invaluable, real-time view of challenging or interesting cases.",
    author:
      "Merlin Antunez, MD; Medical Director and Orthopedic Surgeon, One World Surgery",
    image: oneworldsurge,
  },
];

const MeetingReviewsCarousel = () => {
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
    <div className=" py-20 flex lg:p-20 p-4 max-2xl:flex-col lg:items-start lg:gap-10 relative">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.author}>
              <div className="flex gap-10 max-xl:flex-col items-start justify-between">
                <img
                  src={review.image}
                  alt="Image"
                  className="lg:h-40 lg:w-80 h-20"
                />

                <div className="flex flex-col gap-3 ">
                  <h1 className="lg:text-3xl text-2xl">
                    "{review.description}"
                  </h1>
                  <h3 className="text-black/60">- {review.author}</h3>
                  <div>
                    <Button
                      variant="link"
                      className="border-b border-transparent  hover:border-emerald-600 space-x-2 px-0 text-emerald-600 "
                    >
                      Explore Hoostly
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" ref={carouselPrevRef} />
        <CarouselNext className="hidden" ref={carouselNextRef} />
      </Carousel>

      <div className="flex gap-3 items-center  ">
        <Button
          disabled={current === 1}
          className="bg-black lg:h-20 lg:w-20 w-16 h-16 hover:bg-emerald-600 rounded-full"
          onClick={() => {
            carouselPrevRef.current && carouselPrevRef.current.click();
          }}
        >
          <ChevronLeft className=" lg:h-20 lg:w-20 h-10 w-10" />
        </Button>
        <h1 className="text-3xl">
          {current}/{count}
        </h1>
        <Button
          disabled={current === count}
          className="bg-black lg:h-20 lg:w-20 w-16 h-16 hover:bg-emerald-600 rounded-full"
          onClick={() => {
            carouselNextRef.current && carouselNextRef.current.click();
          }}
        >
          <ChevronRight className=" h-20 w-20" />
        </Button>
      </div>
      <img
        src={green}
        alt="Background gradient"
        className="absolute right-0 bottom-0 -scale-x-100 -scale-y-100 -z-10  h-full w-full"
      />
    </div>
  );
};

export default MeetingReviewsCarousel;
