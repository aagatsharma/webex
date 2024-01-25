import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const menu = {
  Products: [
    { name: "Webex Suite", link: "/webex-suite" },
    { name: "Meetings", link: "/meetings" },
    { name: "Calling", link: "/calling" },
    { name: "Messaging", link: "/messaging" },
    { name: "Events", link: "/events" },
    { name: "Video Messaging", link: "/video-messaging" },
    { name: "Polling", link: "/polling" },
    { name: "Webinars", link: "/webinars" },
    { name: "Whiteboarding", link: "/whiteboarding" },
    { name: "Cloud Contact Center", link: "/cloud-contact-center" },
    { name: "CPaaS", link: "/cpaas" },
  ],
  Devices: [
    { name: "Room Devices", link: "/room-devices" },
    { name: "Desk Devices", link: "/desk-devices" },
    { name: "Digital Whiteboards", link: "/digital-whiteboards" },
    { name: "Phones", link: "/phones" },
    { name: "Cameras", link: "/cameras" },
    { name: "Headsets", link: "/headsets" },
    { name: "Room Accessories", link: "/room-accessories" },
  ],
  "Use Cases": [
    { name: "Hybrid Work", link: "/hybrid-work" },
    { name: "Interoperability", link: "/interoperability" },
    { name: "Return to the office", link: "/return-to-office" },
    { name: "Frontline Workers", link: "/frontline-workers" },
    { name: "Sustainability", link: "/sustainability" },
  ],
  Resources: [
    { name: "Pricing", link: "/pricing" },
    { name: "Downloads", link: "/downloads" },
    { name: "Help Center", link: "/help-center" },
    { name: "Webex Community", link: "/webex-community" },
    { name: "Product Essentials", link: "/product-essentials" },
    { name: "Watch Webinars", link: "/watch-webinars" },
    { name: "App Hub", link: "/app-hub" },
    { name: "Accessibility", link: "/accessibility" },
    { name: "Webex Blog", link: "/webex-blog" },
    { name: "Developers", link: "/developers" },
  ],
  Company: [
    { name: "Cisco", link: "/cisco" },
    { name: "Contact Support", link: "/contact-support" },
    { name: "Contact Sales", link: "/contact-sales" },
    { name: "Webex Merch Store", link: "/webex-merch-store" },
    { name: "Careers", link: "/careers" },
    { name: "Webex Leap", link: "/webex-leap" },
  ],
};

const FooterTags = () => {
  return (
    <div>
      <div className="max-w-7xl m-auto py-10 max-md:hidden ">
        <div className="flex space-x-7 lg:space-x-20">
          {Object.entries(menu).map(([label, components]) => (
            <div key={label}>
              <h2 className="font-bold text-lg text">{label}</h2>
              <ul className=" flex flex-col gap-y-5 pt-5">
                {components.map(({ name, link }) => (
                  <li key={name}>
                    <a href={link} className="hover:underline">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full px-5 md:hidden ">
        {Object.entries(menu).map(([label, components]) => (
          <AccordionItem value={label} key={label}>
            <AccordionTrigger className="font-bold text-lg">
              {label}
            </AccordionTrigger>
            <AccordionContent className=" flex flex-col gap-y-5">
              {components.map(({ name, link }) => (
                <li key={name}>
                  <a href={link} className="hover:underline">
                    {name}
                  </a>
                </li>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FooterTags;
