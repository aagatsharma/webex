import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useState } from "react";

import image1 from "@/assets/meetings/Meetings-yield-results.jpg";
import image2 from "@/assets/meetings/Automation-simplifies-work.jpg";
import image3 from "@/assets/meetings/Inclusivity-fuels-innovation.jpg";

const accordinItem = [
  {
    id: 0,
    title: "Meetings yield results",
    description:
      "Boost real-time engagement with intelligent features and the highest quality video and audio.",
    image: image1,
  },
  {
    id: 1,
    title: "Automation simplifies work",
    description:
      "Use the power of AI to take the labor out of collaboration, optimize workflows, and improve productivity.",
    image: image2,
  },
  {
    id: 2,
    title: "Inclusivity fuels innovation",
    description:
      "Give hybrid teams equal access to collaborative workflows so that every voice is heard.",
    image: image3,
  },
];

const MeetingsCollaborateAccordion = () => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="xl:p-40 py-40 px-4">
      <div className="flex max-md:flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-1 ">
          <h1 className="text-7xl max-md:text-5xl max-sm:text-3xl font-bold">
            Connect and collaborate.
          </h1>
          <h1 className="text-7xl max-md:text-5xl max-sm:text-3xl font-bold">
            The Hoostly way.
          </h1>
        </div>
        <div>
          <Button
            size="lg"
            className="h-14 bg-emerald-600 text-white rounded-full text-base hover:bg-black 
             font-medium hover:transition-all hover:duration-300 space-x-1 max-md:w-full "
          >
            <span>Contact Sales</span>
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="w-full py-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-40">
        <div>
          <img
            src={accordinItem[imageIndex].image}
            alt="Image"
            className="rounded-3xl"
          />
        </div>
        <div className=" place-self-end">
          <Accordion
            type="single"
            collapsible={false}
            className="w-full px-5 justify-items-end place-items-end "
            defaultValue={String(accordinItem[0].id)}
            onValueChange={(data) => setImageIndex(parseInt(data))}
          >
            {accordinItem.map((acc) => (
              <AccordionItem
                value={String(acc.id)}
                key={acc.title}
                className="group"
              >
                <AccordionTrigger
                  className=" hover:no-underline text-3xl text-black group-hover:text-emerald-600 text-left data-[state=open]:text-emerald-600"
                  iconType="none"
                >
                  {acc.title}
                </AccordionTrigger>
                <AccordionContent className="text-black/60 text-xl">
                  {acc.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MeetingsCollaborateAccordion;
