import gradient from "@/assets/developer/gradient-hero.757d6074745337fc62859d9a0ff39d5e.png";
import hero from "@/assets/developer/hero-illustration.9a1679acd6ec6532b6adbc22d9b67e1a.png";
import { Button } from "../ui/button";

const DeveloperStarter = () => {
  return (
    <div className=" h-[700px] max-md:h-auto my-10 px-3">
      <div className="max-w-7xl m-auto relative grid grid-cols-2 max-md:grid-cols-1 gap-10 place-items-center  h-full max-md:pt-10">
        <div className="flex flex-col gap-y-6">
          <h1 className="bg-gradient-to-r from-sky-600 to-purple-400 inline-block text-transparent bg-clip-text text-6xl">
            Build With Webex
          </h1>
          <h2 className=" text-gray-400 text-3xl">
            Champion hybrid work with a collaboration platform that's engaging,
            intelligent, and inclusive.
          </h2>
          <div className="flex gap-x-6 max-md:flex-col gap-y-4">
            <Button className="bg-white text-black rounded-full p-8 text-lg hover:text-white hover:bg-emerald-600 duration-300">
              Start Building Apps
            </Button>
            <Button className="bg-transparent text-white border-2 rounded-full p-8 text-lg hover:text-black hover:bg-white duration-300">
              Go to Docs
            </Button>
          </div>
        </div>
        <div className="z-40">
          <img src={hero} alt="Hero" />
        </div>
        <div className="absolute right-0 max-md:bottom-10 z-20 ">
          <img src={gradient} alt="gradient" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default DeveloperStarter;
