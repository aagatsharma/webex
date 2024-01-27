import devices from "@/assets/home/Devices.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CustomerDevice = () => {
  return (
    <div className="max-w-7xl m-auto mt-10">
      <div className="grid grid-cols-2 max-md:grid-cols-1 place-items-stretch gap-6">
        <div className="relative h-full">
          <img
            src={devices}
            alt="Devices"
            className="object-cover w-full h-full"
          />
        </div>

        <Card className="h-full max-sm:h-[500px] max-md:h-[550px] flex flex-col items-center justify-center gap-y-4 rounded-3xl">
          <CardTitle className="text-5xl max-md:text-3xl pt-10 max-md:py-4">
            Devices for any workspace.
          </CardTitle>
          <CardDescription className="text-xl text-black/60 px-6">
            Beauty meets function with award-winning devices designed for the
            home, the office, and everywhere in between.
          </CardDescription>
          <CardContent>
            <Button
              variant="outline"
              className="border-2 border-black rounded-full h-14 hover:text-white hover:bg-black space-x-1 max-md:w-full"
              size="lg"
            >
              <span>See All Devices</span>
              <ArrowRight />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerDevice;
