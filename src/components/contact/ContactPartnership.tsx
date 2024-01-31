import { Card } from "../ui/card";

import chromeInterprise from "@/assets/contact/chrome-enterprise.svg";
import google from "@/assets/contact/google.svg";
import microsoft from "@/assets/contact/microsoft.svg";
import salesforce from "@/assets/contact/salesforce.svg";
import zendesk from "@/assets/contact/zendesk.svg";
import servicenow from "@/assets/contact/service-now.svg";
import freshworks from "@/assets/contact/freshworks-vector-logo.svg";

import ringred from "@/assets/contact/ring-red.svg";
import butcher from "@/assets/contact/bucher-suter.svg";
import egain from "@/assets/contact/egain.svg";
import eleveo from "@/assets/contact/eleveo.svg";
import kustomer from "@/assets/contact/kustomer.svg";
import spinchi from "@/assets/contact/spinsci.svg";
import uniphore from "@/assets/contact/uniphore.svg";
import upstreamworks from "@/assets/contact/upstreamworks.svg";
import verint from "@/assets/contact/verint.svg";
import zingtree from "@/assets/contact/zingtree.svg";
import { Button } from "../ui/button";

const integrationpartner = [
  chromeInterprise,
  google,
  microsoft,
  salesforce,
  zendesk,
  servicenow,
  freshworks,
  freshworks,
];

const techpartner = [
  ringred,
  butcher,
  egain,
  eleveo,
  kustomer,
  spinchi,
  uniphore,
  upstreamworks,
  verint,
  zingtree,
];

const ContactPartnership = () => {
  return (
    <div className="my-10 max-w-7xl m-auto px-3">
      <div className="max-w-xl space-y-4">
        <h1 className="text-5xl font-bold">Strong partnerships.</h1>
        <h1 className="text-5xl font-bold">Incredible integrations.</h1>
        <h2 className="text-2xl text-black/60">
          Harness the power of Webex and Cisco by enabling your business to mix
          and match the best-of-breed solutions that suit your specific
          requirements.
        </h2>
      </div>
      <div className="my-10">
        <h1 className="text-lg text-black/60 mt-10 mb-5">
          Integration Partners
        </h1>
        <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 gap-6 ">
          {integrationpartner.map((image, index) => (
            <Card
              className=" rounded-3xl h-24 w-60 max-sm:h-24 max-sm:w-40 p-5 flex items-center justify-center"
              key={index}
            >
              <img src={image} alt="Chrome" />
            </Card>
          ))}
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-lg text-black/60 mt-10 mb-5">
          Integration Partners
        </h1>
        <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 gap-6 ">
          {techpartner.map((image, index) => (
            <Card
              className=" rounded-3xl h-24 w-60 max-sm:h-24 max-sm:w-40 p-5 flex items-center justify-center"
              key={index}
            >
              <img src={image} alt="Chrome" />
            </Card>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Button className="bg-emerald-600 rounded-full p-7 text-xl">
          Visit Hoostly App Hub
        </Button>
      </div>
    </div>
  );
};

export default ContactPartnership;
