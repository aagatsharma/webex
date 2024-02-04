import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import purple from "@/assets/meetings/purple.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/scrollbar";

import { Pagination } from "swiper/modules";
import { ArrowDownToLine, StickyNote } from "lucide-react";
import { Button } from "../ui/button";

const contactcarousel = [
  {
    id: 1,
    title: "The Total Economic Impact™ of Hoostly Suite unveils 204% ROI.",
    description:
      "Discover the Hoostly Suite advantage: Forrester's recent study unveils that a composite organization comprised of interviewees with experience using Hoostly Suite realized 204% return on investment with the Hoostly Suite—including cost savings, improved collaboration experiences, and dramatic gains in IT efficiencies.",
    report: "Read the forester study",
  },
  {
    id: 2,
    title: "Omdia Names Hoostly as a Leader in Collaborative Meetings",
    description:
      "“Cisco Hoostly has emerged as one of the most comprehensive collaborative meeting solutions ... making Cisco one of the fastest innovators in the market,” says Prachi Nema, Principal Analyst at Omdia.",
    report: "Get the report",
  },
  {
    id: 3,
    title: "Aragon Names Hoostly an Intelligent Video Conferencing Leader",
    description:
      "Aragon states, “Cisco is still one of the only vendors to have an integrated virtual assistant that will take commands from humans and do actions such as document action items and then distribute them.”",
    report: "Get the report",
  },
];

const MeetingsWorkCarousel = () => {
  return (
    <div className="py-40 relative">
      <div className="flex flex-col lg:px-40 max-md:p-10">
        <h1 className="md:text-7xl text-4xl font-bold">Forge a new path </h1>
        <h1 className="md:text-7xl text-4xl font-bold">in hybrid work.</h1>
        <h3 className="my-7 md:text-3xl text-xl text-black/60 xl:mr-96">
          A unified platform. Premier, enterprise-grade features. A seamless
          collaboration experience for all, from anywhere.
        </h3>
      </div>

      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, centeredSlides: true, spaceBetween: 20 },
          800: { slidesPerView: 1.2, centeredSlides: false, spaceBetween: 20 },
          1000: { slidesPerView: 1.6, centeredSlides: false, spaceBetween: 20 },
          1200: { slidesPerView: 2.4, centeredSlides: false, spaceBetween: 20 },
          1500: { slidesPerView: 3.1, centeredSlides: true, spaceBetween: 20 },
        }}
        pagination
        grabCursor
        modules={[Pagination]}
        className="pb-10 px-6"
      >
        {contactcarousel.map((carousel) => (
          <SwiperSlide key={carousel.id}>
            <Card className=" w-[600px] h-[650px] max-md:w-auto grid grid-cols-1 rounded-3xl bg-emerald-600 text-white">
              <CardHeader className=" gap-5 mt-6  ">
                <StickyNote className="h-10 w-10" />
                <CardTitle className="text-4xl max-md:text-2xl">
                  {carousel.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-2xl max-md:text-lg text-white">
                  {carousel.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex items-center justify-between px-10 group  ">
                <span className="text-lg max-md:text-base">
                  {carousel.report}
                </span>
                <div>
                  <Button
                    className=" rounded-full  bg-white text-black self-start hover:bg-transparent border-b border-transparent hover:border-emerald-600 hover:text-emerald-600 group-hover:bg-black"
                    size={"icon"}
                  >
                    <ArrowDownToLine className=" group-hover:text-white   text-black" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <img
        src={purple}
        alt=""
        className="absolute bottom-0 right-0 rotate-180 h-full w-full"
      />
    </div>
  );
};

export default MeetingsWorkCarousel;
