import { Button } from "@/components/ui/button";
import bgImage from "@/assets/home/image.jpg";
import { ArrowRight } from "lucide-react";

const HomeImage = () => {
  return (
    <div>
      <div className="relative h-full w-full">
        <img
          className="object-cover h-[700px] w-full"
          src={bgImage}
          alt="Background Image"
        />
        <div className="absolute inset-0 max-w-7xl m-auto flex flex-col justify-end bottom-20 ">
          <p className="text-white text-7xl font-bold w-[770px]">
            One collaboration suite, endless possibilities.
          </p>

          <div className="flex items-center gap-5 mt-8">
            <Button
              size="lg"
              className="h-14 bg-emerald-600 text-white rounded-full text-base hover:bg-white hover:text-black
             font-medium hover:transition-all hover:duration-300 space-x-1 "
            >
              <span>Plans & Pricing</span>
              <ArrowRight />
            </Button>
            <Button
              className="border rounded-full h-14 bg-transparent hover:text-black hover:bg-white space-x-1"
              size="lg"
            >
              <span>Learn More</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
