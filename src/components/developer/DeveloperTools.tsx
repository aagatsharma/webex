import tools from "@/assets/developer/tools-illustration.68ded5c22c1e9a48f0bcddffc60e107b.png";
import { Button } from "../ui/button";
import greengradient from "@/assets/developer/gradient-green.ffbe16790f4d1c49807814beecd92b72.png";

const DeveloperTools = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl m-auto text-white py-10 ">
        <div className="flex flex-col gap-y-10 items-center">
          <h1 className="text-4xl text-center">Tools to get Started</h1>
          <h3 className="text-gray-300 text-xl text-center">
            New to Hoostly? Here’s a list of places to get started.
          </h3>
          <img src={tools} alt="Tools" className="w-full h-full" />
          <h1 className="text-4xl text-center z-40">
            Embed your app in real time or async
          </h1>
          <h3 className="text-gray-300 text-xl text-center z-40">
            Fully immerse your app into Webex meetings and spaces.
          </h3>
          <Button className=" text-white border-2 rounded-full p-8 text-lg hover:text-black hover:bg-white duration-300 w-30 bg-transparent z-40">
            Go to Docs
          </Button>
        </div>
      </div>
      <img
        src={greengradient}
        alt="Green gradient"
        className="absolute bottom-0 w-full z-10"
      />
    </div>
  );
};

export default DeveloperTools;
