const WebSuitex = () => {
  const features = [
    { label: "Meetings", description: "Video conferencing and screen sharing" },
    { label: "Calling", description: "Cloud calling and phone system" },
    {
      label: "Messaging",
      description: "Group messaging, chat, and file sharing",
    },
    {
      label: "Webinars",
      description: "Large meeting and virtual event hosting",
    },
    { label: "Events", description: "In-person and hybrid event management" },
    {
      label: "Video Messaging",
      description: "Video messaging and screen recording",
    },
    { label: "Polling", description: "Interactive Q&A, quizzes, and polling" },
    {
      label: "Whiteboarding",
      description: "Digital co-creation and brainstorming",
    },
  ];
  return (
    <div className="">
      <div></div>
    </div>
  );
};

const NavbarProductItem = () => {
  return (
    <div className=" max-w-7xl m-auto px-2 flex w-full justify-between  ">
      <div className="flex flex-col">
        <h1>Hello</h1>
        <WebSuitex />
      </div>
      <div>
        <h1>Hello</h1>
      </div>
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default NavbarProductItem;
