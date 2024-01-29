import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ContactAccordin = () => {
  const accordinItem = [
    {
      title: "Future- proof innovation from a market leader.",
      description:
        "With decades of experience in the contact center industry and innovation at its core, Webex is a true market leader and the last contact center solution you’ll ever need.",
    },
    {
      title: "Single platform for collaboration and contact center.",
      description:
        "Webex gives you one proven vendor to trust. One platform to manage. And one experience to connect with customers and colleagues.",
    },
    {
      title: "Trusted solution that’s secure, flexible, and scalable.",
      description:
        "Your mission-critical contact center can rely on Webex–a secure, open, and flexible platform that interoperates with all your systems and can scale to meet your evolving business needs.",
    },
  ];
  return (
    <div className=" bg-according-img py-40 h-auto bg-no-repeat bg-cover">
      <div className="max-w-7xl m-auto px-3 h-full">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 h-full place-items-center">
          <div className="flex flex-col gap-10 ">
            <h1 className="text-6xl text-white">
              A global industry leader you can trust.
            </h1>
            <h2 className="text-3xl text-white">
              Not only do you get the innovation you need, but the security and
              reliability only Cisco can deliver.
            </h2>
            <Button
              className="border rounded-full h-14 w-44 bg-transparent hover:text-black hover:bg-white space-x-1 max-md:w-full"
              size="lg"
            >
              <span>Learn More</span>
              <ArrowRight />
            </Button>
          </div>
          <div className="w-full place-self-end ">
            <Accordion type="single" collapsible className="w-full px-5 ">
              {accordinItem.map((acc) => (
                <AccordionItem value={acc.title}>
                  <AccordionTrigger className="font-bold text-2xl text-white hover:no-underline text-left">
                    {acc.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-lg">
                    {acc.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAccordin;
