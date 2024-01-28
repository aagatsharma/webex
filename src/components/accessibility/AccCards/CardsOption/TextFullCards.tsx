import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TextCardsProps {
  title: string;
  description: string;
  image: string;
  bg: "white" | "black";
}

const TextFullCards = ({ title, description, image, bg }: TextCardsProps) => {
  return (
    <Card
      className={` w-full max-lg:w-auto max-lg:h-auto py-3 max-lg:flex-col rounded-3xl h-[500px] flex justify-between items-center bg-${bg} ${
        bg === "black" ? "text-white" : "text-black"
      }`}
    >
      <CardHeader className="flex flex-col items-start gap-y-5 self-end flex-1">
        <CardTitle className="text-4xl font-medium ">{title}</CardTitle>
        <CardDescription
          className={`text-xl ${bg === "black" ? "text-white" : "text-black"}`}
        >
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <img src={image} alt="Screen Recorder" className="" />
      </CardFooter>
    </Card>
  );
};

export default TextFullCards;
