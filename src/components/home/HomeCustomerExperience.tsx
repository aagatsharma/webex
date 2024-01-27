import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import CustomerExpCards from "./CustomerExperience/CustomerExpCards";
import CustomerDevice from "./CustomerExperience/CustomerDevice";

const HomeCustomerExperience = () => {
  return (
    <div className="max-w-7xl m-auto my-10 max-md:px-2">
      <div className="flex items-center flex-col gap-y-3 ">
        <h1 className="text-4xl font-bold">Customer Experience</h1>
        <h3 className="text-black/60 text-xl">
          Maximize customer satisifaction. Minimize cost.
        </h3>
        <Button
          variant="link"
          className="border-b border-transparent hover:text-emerald-600  hover:border-emerald-600 space-x-2 "
        >
          Learn More
          <ArrowRight />
        </Button>
      </div>
      <div className="mt-3">
        <CustomerExpCards />
      </div>
      <div>
        <CustomerDevice />
      </div>
    </div>
  );
};

export default HomeCustomerExperience;
