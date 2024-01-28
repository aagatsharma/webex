import why1 from "@/assets/developer/37a5bb4e-b7c8-4890-96e3-c6323dea21dd.png";
import why2 from "@/assets/developer/70a21aae-3f4f-4901-bb75-54958dcd46de.png";
import why3 from "@/assets/developer/99b91dcb-fc5f-40ab-abd3-b252de51cc09.png";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const DeveloperWhy = () => {
  return (
    <div className="my-10 max-w-7xl m-auto text-white">
      <h1 className=" text-5xl">Why Hoostly</h1>
      <div className="mt-10 grid grid-cols-3 max-md:grid-cols-1 gap-6 place-items-stretch mx-3">
        <div className="flex flex-col justify-between gap-y-8 ">
          <img src={why1} alt="Image1" className="w-20 h-20" />
          <h1 className="text-3xl">Extensive platform</h1>
          <p className="text-gray-300 text-xl">
            A developer platform that extends meetings, messaging, calling, and
            even device.
          </p>
          <div>
            <Button className="text-red-500 hover:text-red-300">
              Explore the suite <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between  gap-y-8 ">
          <img src={why2} alt="Image1" className="w-20 h-20" />
          <h1 className="text-3xl">Market leader</h1>
          <p className="text-gray-300 text-xl">
            Gartner names Cisco as a Meeting Solutions Leader for fifteenth
            time.
          </p>
          <div>
            <Button className="text-red-500 hover:text-red-300">
              Read Analysis <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-8">
          <img src={why3} alt="Image1" className="w-20 h-20" />
          <h1 className="text-3xl">Global reach</h1>
          <p className="text-gray-300 text-xl">
            Expand your user base by tapping into millions of Hoostly users.
          </p>
          <div>
            <Button className="text-red-500 hover:text-red-300">
              Learn More <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperWhy;
