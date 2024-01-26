import ProductItem from "./productItem/productItem";
import meetings from "@/assets/home/meetings.svg";
import calling from "@/assets/home/calling.svg";
import messaging from "@/assets/home/messaging.svg";
import webinars from "@/assets/home/webinars.svg";
import events from "@/assets/home/events.svg";
import videomessaging from "@/assets/home/videomessaging.svg";
import polling from "@/assets/home/polling.svg";
import whiteboard from "@/assets/home/whiteboard.svg";

const NavbarProductItem = () => {
  const websuite = [
    {
      label: "Meetings",
      description: "Video conferencing and screen sharing",
      logo: meetings,
    },
    {
      label: "Calling",
      description: "Cloud calling and phone system",
      logo: calling,
    },
    {
      label: "Messaging",
      description: "Group messaging, chat, and file sharing",
      logo: messaging,
    },
    {
      label: "Webinars",
      description: "Large meeting and virtual event hosting",
      logo: webinars,
    },
    {
      label: "Events",
      description: "In-person and hybrid event management",
      logo: events,
    },
    {
      label: "Video Messaging",
      description: "Video messaging and screen recording",
      logo: videomessaging,
    },
    {
      label: "Polling",
      description: "Interactive Q&A, quizzes, and polling",
      logo: polling,
    },
    {
      label: "Whiteboarding",
      description: "Digital co-creation and brainstorming",
      logo: whiteboard,
    },
  ];

  const workspaceCategories = [
    {
      label: "Home Spaces",
      description: "Personal devices for every home workspace",
    },
    {
      label: "Office Spaces",
      description: "Intelligent devices for the hybrid workplace",
    },
    {
      label: "Anywhere",
      description: "Portable devices for on-the-go collaboration",
    },
  ];

  const customerService = [
    {
      label: "Cloud Contact Center",
      description: "Intelligent, digital to human customer interactions",
    },
    {
      label: "CPass",
      description: "Communications platform for automating customer journeys",
    },
  ];

  return (
    <div className=" max-w-7xl m-auto px-2 flex w-full justify-between items-start  ">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-black/60">WebSuiteX Suite</h1>
        <div className="grid grid-cols-2 gap-6 pt-3">
          {websuite.map((feature) => (
            <ProductItem
              logo={feature.logo}
              description={feature.description}
              label={feature.label}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="text-black/60">WorkSpaces</h1>
        <div className="grid grid-cols-1 gap-6 pt-3">
          {workspaceCategories.map((feature) => (
            <ProductItem
              description={feature.description}
              label={feature.label}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="text-black/60">Customer Service</h1>
        <div className="flex flex-col gap-6 pt-3">
          {customerService.map((feature) => (
            <ProductItem
              description={feature.description}
              label={feature.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarProductItem;
