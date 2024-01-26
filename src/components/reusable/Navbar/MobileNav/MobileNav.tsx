import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
// import Logo from "@/assets/logo.svg";

import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import MobileNavContent from "./MobileNavContent";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="w-6 h-6" />
      </SheetTrigger>

      <SheetContent side="top" className=" w-screen min-h-screen">
        <SheetClose asChild>
          <Button
            className="h-14 bg-black text-white rounded-full text-base hover:bg-emerald-600 
             font-medium "
          >
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </SheetClose>
        <div>
          <SheetClose asChild>
            <MobileNavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
