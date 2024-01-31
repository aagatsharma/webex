import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import BusinessTab from "./Tabs/BusinessTab";
import CustomerTab from "./Tabs/CustomerTab";
import AgentTab from "./Tabs/AgentTab";

const tabsData = [
  { label: "Customer", component: <CustomerTab /> },
  { label: "Agents", component: <AgentTab /> },
  { label: "Business", component: <BusinessTab /> },
];

const ContactTabs = () => {
  return (
    <div className="bg-[#000000] py-10">
      <div className="max-w-7xl m-auto px-3">
        <div className="border-b pb-10 flex flex-col max-lg:mx-3">
          <h1 className="text-6xl text-emerald-300 max-md:text-5xl">
            One solution.
          </h1>
          <h1 className="text-6xl text-emerald-300 max-md:text-5xl">
            For every journey.
          </h1>
        </div>

        <div>
          <Tabs defaultValue={tabsData[0].label}>
            <TabsList className="bg-transparent text-white flex my-10 border rounded-full w-fit  h-fit mx-2">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className="bg-transparent data-[state=active]:bg-emerald-600 data-[state=active]:rounded-full p-3 text-lg uppercase px-8 max-md:text-base max-md:p-3 "
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabsData.map((tab) => (
              <TabsContent key={tab.label} value={tab.label} className="my-10">
                {tab.component}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ContactTabs;
