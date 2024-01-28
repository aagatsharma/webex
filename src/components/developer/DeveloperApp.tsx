import { Button } from "../ui/button";
import redgradient from "@/assets/developer/gradient-red.992a4a9669c9cee9b62b364a60de1394.png";
import botillustration from "@/assets/developer/widgets-illustration.eb3faa627e96e1a08d419cb4eef3b9e3.png";

const DeveloperApp = () => {
  return (
    <div className="relative bg-[#000000]">
      <div className="max-w-7xl m-auto text-white py-20 ">
        <div className="flex flex-col gap-y-10 items-center">
          <img src={botillustration} alt="Tools" className="z-40" />
          <h1 className="text-4xl text-center z-40">Create a chatbot</h1>
          <h3 className="text-gray-300 text-xl text-center z-40">
            Build chatbots that post content and respond to commands.
          </h3>
          <Button className=" text-white border-2 rounded-full p-8 text-lg hover:text-black hover:bg-white duration-300 w-30 bg-transparent z-40">
            Go to Docs
          </Button>
        </div>
      </div>
      <img
        src={redgradient}
        alt="Red gradient"
        className="absolute bottom-0 w-full z-10"
      />
    </div>
  );
};

export default DeveloperApp;
