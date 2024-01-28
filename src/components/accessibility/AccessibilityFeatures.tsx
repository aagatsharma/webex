import message from "@/assets/accessibility/message-col.png";
import meet from "@/assets/accessibility/meet-col.png";
import calling from "@/assets/accessibility/calling-col.png";
import { Button } from "../ui/button";

const AccessibilityFeatures = () => {
  return (
    <div className="bg-[#e1e1e1] py-20">
      <div className="max-w-7xl m-auto grid grid-cols-3 max-md:grid-cols-1 gap-6 px-5">
        <div className="flex flex-col gap-y-6">
          <img src={meet} alt="Meetings" />
          <h1 className="text-3xl">Meetings</h1>
          <h3 className=" text-xl">
            Create inclusive meeting experiences that adapt to your needs with
            features like custom layouts, keyboard shortcuts for meeting
            navigation, real-time language translation, and more.
          </h3>
          <div>
            <Button className=" border-b border-black rounded-none bg-transparent hover:bg-transparent px-0 text-black">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <img src={message} alt="Messaging" />
          <h1 className="text-3xl">Messaging</h1>
          <h3 className=" text-xl">
            Customize your messaging experience by using one of our dark mode
            themes, or set up keyboard shortcuts to quickly navigate through the
            app.
          </h3>
          <div>
            <Button className=" border-b border-black rounded-none bg-transparent hover:bg-transparent px-0 text-black">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <img src={calling} alt="Calling" />
          <h1 className="text-3xl">Calling</h1>
          <h3 className=" text-xl">
            Create a more accessible calling experience with features that
            enable you to search and call contacts with ease using predefined
            shortcuts, or answer and decline calls using hotkeys.
          </h3>
          <div>
            <Button className=" border-b border-black rounded-none bg-transparent hover:bg-transparent px-0 text-black">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityFeatures;
