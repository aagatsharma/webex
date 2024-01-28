import { Button } from "../ui/button";
import bluegradient from "@/assets/developer/gradient-blue.5e07439eee6ebbe92e6bd4c8b3b6f3ce.png";
import botillustration from "@/assets/developer/bot-illustration.828fc15698004a7124b097f642e09bc3.png";

const DeveloperChatbot = () => {
  return (
    <div className="relative bg-[#000000]">
      <div className="max-w-7xl m-auto text-white py-20 ">
        <div className="flex flex-col gap-y-10 items-center">
          <img src={botillustration} alt="Tools" />
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
        src={bluegradient}
        alt="Green gradient"
        className="absolute bottom-0 w-full z-10"
      />
    </div>
  );
};

export default DeveloperChatbot;
