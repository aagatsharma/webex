import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

import Inclusivity from "@/assets/meetings/inclusivity.svg";
import Encryption from "@/assets/meetings/end-to-end-encryption-1.svg";
import Virtual from "@/assets/meetings/virtual-background.svg";
import Meetings from "@/assets/meetings/meetings.svg";
import Analytics from "@/assets/meetings/insights-analytics.svg";
import Meet from "@/assets/meetings/meeting-templates.svg";

const items = [
  {
    title: "Inclusive meetings for all.",
    description:
      "Real-time translation. Closed captions. Noise removal, voice optimization, and people-focused views. Give everyone a seat at the table, no matter how or where they work. ",
    image: Inclusivity,
  },
  {
    title: "Engagement is everything.",
    description:
      "From custom stage views and immersive share for presentations to interactive polling and Q&A features, meetings can be more enjoyable and productive.",
    image: Virtual,
  },
  {
    title: "Flexibility comes first.",
    description:
      "Schedule and join meetings across any device with a single tap. Go from desktop to phone to car with our Move to Mobile QR code feature and Apple CarPlay integration. And use our library of embedded apps to simplify workflows.",
    image: Encryption,
  },
  {
    title: "Solve employee fatigue.",
    description:
      "Use Webex Assistant for time-consuming tasks—calling, note taking, action items—and rely on people insights to manage time, build stronger connections, and optimize work-life balance.",
    image: Meetings,
  },
  {
    title: "Simplify management.",
    description:
      "Control Hub lets IT oversee users and devices from a single pane of glass and provide custom analytics for real-time or long-term insights. Plus, it’s all protected by Cisco’s best-in-class security.",
    image: Analytics,
  },
  {
    title: "Empower the whole org chart.",
    description:
      "Whether supporting sales teams through integrations such as Salesforce or empowering frontline workers by connecting seamlessly to wearable tech, Webex works wonders for the entire workforce.",
    image: Meet,
  },
];

interface MeetingsProps {
  title: string;
  description: string;
  image: string;
}

const MeetingsIndividualItem = ({
  title,
  description,
  image,
}: MeetingsProps) => {
  return (
    <div className="border-b flex flex-col gap-10 lg:p-10 p-5">
      <img src={image} alt="Image" className=" h-32 w-32" />
      <h1 className="text-4xl text-white max-md:text-2xl">{title}</h1>
      <h3 className=" text-gray-400 text-lg max-md:text-lg">{description}</h3>
    </div>
  );
};

const MeeingsBusiness = () => {
  return (
    <div className="bg-black lg:p-40 p-10">
      <div className="grid lg:grid-cols-2 gap-6 py-10 ">
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-7xl max-md:text-5xl max-sm:text-3xl">
            Do business better.
          </h1>
          <h3 className=" text-gray-500 text-3xl max-md:text-5xl max-sm:text-xl">
            Webex Meetings simplifies your company’s workflows at scale. Equip
            your team with the most powerful tool to meet and exceed business
            goals.
          </h3>
        </div>
        <div className=" lg:justify-self-end">
          <Button
            size="lg"
            className="h-14 bg-emerald-600 text-white rounded-full text-base hover:bg-white 
             font-medium hover:text-black hover:transition-all hover:duration-300 space-x-1 max-md:w-full "
          >
            <span>Contact Sales</span>
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 lg:gap-20 gap-10 my-10">
        {items.map((item) => (
          <MeetingsIndividualItem
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MeeingsBusiness;
