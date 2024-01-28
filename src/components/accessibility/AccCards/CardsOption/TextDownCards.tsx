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

const TextDownCards = ({ title, description, image, bg }: TextCardsProps) => {
  return (
    <Card
      className={` w-[550px] max-lg:w-auto max-lg:h-auto rounded-3xl h-[500px] flex flex-col justify-between bg-${bg} ${
        bg === "black" ? "text-white" : "text-black"
      }`}
    >
      <CardHeader>
        <img src={image} alt={title} />
      </CardHeader>

      <CardFooter className="flex flex-col items-start gap-y-5">
        <CardTitle className="text-4xl font-medium">{title}</CardTitle>
        <CardDescription
          className={`text-xl ${bg === "black" ? "text-white" : "text-black"}`}
        >
          {description}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default TextDownCards;
