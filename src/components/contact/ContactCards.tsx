import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const ContactCards = () => {
  return (
    <div className="py-10 bg-[#000000] text-white px-3">
      <div className="max-w-7xl m-auto max-md:px-5">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 border-b-2 pb-10">
          <div className="flex flex-1 flex-col gap-5">
            <h1 className=" text-emerald-300 text-6xl">
              Your contact center. Powered by AI.
            </h1>
            <h2 className="text-2xl text-gray-400">
              Anticipate customer needs, empower agents, and deliver business
              results with an AI-driven contact center.
            </h2>
          </div>
          <div className=" md:justify-self-end">
            <Button
              className="border rounded-full h-14 w-44 bg-transparent hover:text-black hover:bg-white space-x-1 max-md:w-full"
              size="lg"
            >
              <span>Contact Sales</span>
              <ArrowRight />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-6 py-10 max-xl:px-4">
          <Card
            className={`p-6 max-md:p-0 max-md:py-6 bg-contact-card-left bg-cover bg-no-repeat h-auto rounded-3xl border-none  `}
          >
            <CardContent className="flex flex-col  h-full justify-center gap-6">
              <CardTitle className="text-3xl font-normal max-md:text-2xl">
                Give your customers a personal concierge experience.
              </CardTitle>
              <CardDescription className="text-xl max-md:text-lg text-black">
                Notify customers before there’s a problem, on their channel of
                choice.
              </CardDescription>
              <CardDescription className="text-xl max-md:text-lg text-black">
                Provide conversational self-service options to resolve issues
                faster.
              </CardDescription>
            </CardContent>
          </Card>
          <Card
            className={`p-6 max-md:p-0 max-md:py-6 bg-contact-card-middle bg-cover bg-no-repeat h-auto rounded-3xl border-none  `}
          >
            <CardContent className="flex flex-col  h-full justify-center gap-6">
              <CardTitle className="text-3xl font-normal max-md:text-2xl">
                Put the power of AI in the hands of your agents.
              </CardTitle>
              <CardDescription className="text-xl text-black">
                Get real-time nudges, coaching, and context for best handling
                customer needs.
              </CardDescription>
              <CardDescription className="text-xl text-black">
                Free up agent time with conversation summaries and real-time
                transcripts
              </CardDescription>
            </CardContent>
          </Card>
          <Card
            className={`p-6 max-md:p-0 max-md:py-6 bg-contact-card-right bg-cover bg-no-repeat h-auto rounded-3xl border-none  `}
          >
            <CardContent className="flex flex-col  h-full justify-center gap-6">
              <CardTitle className="text-3xl font-normal max-md:text-2xl">
                Optimize business results with intelligent insights.
              </CardTitle>
              <CardDescription className="text-xl text-black">
                Surface actionable insights with analysis of every
                interaction—human or virtual.
              </CardDescription>
              <CardDescription className="text-xl text-black">
                Get visibility into customer sentiment, satisfaction, and
                interaction data.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
