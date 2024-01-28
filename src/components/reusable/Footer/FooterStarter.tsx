import bgImage from "@/assets/home/secondary-promo.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.svg";

const FooterStarter = () => {
  return (
    <div className="relative h-full w-full ">
      <img
        className="object-cover h-[700px] md:h-[500px] w-full"
        src={bgImage}
        alt="Background Image"
      />
      <div className="absolute inset-0 max-w-7xl m-auto top-32 max-md:top-24 ">
        <Link to="/">
          <img src={Logo} alt="Company Logo" />
        </Link>
      </div>
      <div className="absolute inset-0 max-w-7xl m-auto flex flex-col justify-end bottom-20 px-2 ">
        <div className="flex justify-between items-center text-white max-md:flex-col max-md:gap-y-3">
          <p className=" text-7xl font-bold">Get started for free.</p>
          <div className="w-[400px] max-md:w-full">
            <p className="text-2xl max-md:text-xl ">
              Additional features, storage, and support start at just one low
              price.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-8 max-md:flex-col max-md:px-3">
          <Button
            size="lg"
            className="h-14 bg-emerald-600 text-white rounded-full text-base hover:bg-white hover:text-black
             font-medium hover:transition-all hover:duration-300 space-x-1 max-md:w-full "
          >
            <span>Plans & Pricing</span>
            <ArrowRight />
          </Button>
          <Button
            className="border rounded-full h-14 bg-transparent hover:text-black hover:bg-white space-x-1 max-md:w-full"
            size="lg"
          >
            <span>Learn More</span>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterStarter;
