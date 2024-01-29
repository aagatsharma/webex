import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabCards from "./TabCards/TabCards";

import calling from "@/assets/home/Calling.png";
import meetings from "@/assets/home/Meetings.png";
import polling from "@/assets/home/Polling.png";
import webinars from "@/assets/home/Webinars.png";
import events from "@/assets/home/Events.png";
import { motion } from "framer-motion";
import { useState } from "react";

const tabsData = [
  {
    label: "Calling",
    title: "Connect with cloud Calling.",
    description: "Discussing project updates and future plans with the team.",
    image: calling,
  },
  {
    label: "Meeting",
    title: "Team Meeting",
    description: "Discussing project updates and future plans with the team.",
    image: meetings,
  },
  {
    label: "Event",
    title: "Product Launch Event",
    description:
      "Introducing our latest product to the market with a grand event.",
    image: events,
  },
  {
    label: "Webinar",
    title: "Tech Webinar: Future Trends",
    description:
      "Join our webinar to learn about upcoming trends in technology.",
    image: webinars,
  },
  {
    label: "Polling",
    title: "User Feedback Poll",
    description:
      "Gather feedback from users about our latest product features.",
    image: polling,
  },
];

const HomeTabs = () => {
  let [activeTab, setActiveTab] = useState(tabsData[0].label);

  return (
    <div className="max-w-7xl m-auto my-8">
      <Tabs defaultValue={tabsData[0].label}>
        <TabsList className="max-w-5xl m-auto bg-transparent flex justify-evenly  w-full">
          {tabsData.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={` relative px-3 py-1.5 text-sm font-medium text-white transition bg-transparent `}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.label && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 border-b-2 border-emerald-600 bg-transparent  "
                  transition={{ type: "keyframes", bounce: 0.2, duration: 0.3 }}
                />
              )}
              <TabsTrigger
                key={tab.label}
                value={tab.label}
                className=" text-xl text-black/60 border-b-2 border-white rounded-none
                duration-300 max-md:text-sm"
              >
                {tab.label}
              </TabsTrigger>
            </button>
          ))}
        </TabsList>

        {tabsData.map((tab) => (
          <TabsContent value={tab.label} className="max-w-7xl m-auto my-10">
            <TabCards
              label={tab.label}
              description={tab.description}
              title={tab.title}
              logo={tab.image}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default HomeTabs;
