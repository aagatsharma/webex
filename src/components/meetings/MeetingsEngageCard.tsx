import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import drivemore from "@/assets/meetings/Drive-more-engaging-meetings.jpg";

const MeetingsEngageCard = () => {
  return (
    <div className="bg-black xl:p-20 py-10 px-4">
      <Card className="bg-transparent text-white rounded-3xl xl:p-4 py-4">
        <CardContent className="grid grid-cols-2 lg:place-content-center gap-10 xl:px-40 max-lg:grid-cols-1 ">
          <div className="flex flex-col gap-6 place-self-center ">
            <h1 className="text-5xl max-md:text-3xl">
              Drive more engaging meetings.
            </h1>
            <h2 className=" text-gray-400 text-xl max-md:text-lg">
              Ensure your meetings are designed to give everyone the ability to
              engage no matter their location, language, or communication style.
            </h2>
            <Button
              className="border border-white rounded-full h-14 w-40 bg-transparent text-white space-x-1 max-md:w-full hover:bg-white hover:text-black"
              size="lg"
            >
              See How it works
            </Button>
          </div>
          <div className=" justify-self-center">
            <img
              src={drivemore}
              alt="Drive More"
              className="rounded-full sm:h-96 sm:w-96"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MeetingsEngageCard;
