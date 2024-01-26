import { Button } from "@/components/ui/button";
import bgImage from "@/assets/home/image.jpg";
import { ArrowRight } from "lucide-react";

const HomeImage = () => {
  return (
    <div>
      <div className="relative h-full w-full">
        <img
          className="object-cover h-[600px] w-full"
          src={bgImage}
          alt="Background Image"
        />
        <div className="absolute inset-0 max-w-7xl m-auto flex flex-col justify-end bottom-20 px-2 ">
          <p className="text-white md:text-7xl text-5xl  font-bold md:w-[770px]">
            One collaboration suite, endless possibilities.
          </p>

          <div className="flex max-md:flex-col items-center gap-5 mt-8 ">
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
    </div>
  );
};

export default HomeImage;
