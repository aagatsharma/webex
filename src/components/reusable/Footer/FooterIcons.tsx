import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const FooterIcons = () => {
  return (
    <div className="max-w-7xl m-auto py-10 max-md:px-4">
      <div className="flex md:items-center md:justify-between max-md:flex-col">
        <div className="space-y-2 max-md:flex max-md:flex-col max-md:px-2 ">
          <div className="flex space-x-4">
            <Linkedin className="hover:text-emerald-600 hover:cursor-pointer" />
            <Facebook className="hover:text-emerald-600 hover:cursor-pointer" />
            <Instagram className="hover:text-emerald-600 hover:cursor-pointer" />
            <Twitter className="hover:text-emerald-600 hover:cursor-pointer" />
          </div>
          <div>
            <p className=" text-xs mt-3">
              © 2024 Webex and/or its affiliates. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="max-md:flex max-md:flex-col max-md:self-start max-md:mt-6 max-md:place-self-start">
          <Button variant="link" className="text-white">
            Terms & Conditions
          </Button>
          <Button variant="link" className="text-white">
            Privacy Statement
          </Button>
          <Button variant="link" className="text-white">
            Cookies
          </Button>
          <Button variant="link" className="text-white">
            Trademark
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterIcons;
