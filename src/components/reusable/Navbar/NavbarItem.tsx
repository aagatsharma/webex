import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

import Logo from "@/assets/logo.svg";
import NavbarItemList from "./NavbarItemList";
import MobileNav from "./MobileNav/MobileNav";

const NavbarItem = () => {
  return (
    <div className="flex justify-between items-center h-full ">
      <div className="flex items-center space-x-2 ">
        <Link to="/">
          <img src={Logo} alt="Company Logo" />
        </Link>
        <div className="flex max-lg:hidden">
          <NavbarItemList />
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center max-lg:hidden">
          <Link to="/meetings">
            <Button
              variant="link"
              className="text-white text-base border-b-2 border-transparent hover:border-emerald-600"
            >
              Join a Meeting
            </Button>
          </Link>
          <Link to="/accessibility">
            <Button
              variant="link"
              className="text-white text-base border-b-2 border-transparent hover:border-emerald-600"
            >
              Accessibility
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-x-2">
          <Link to="/contact-us">
            <Button
              className="h-14 bg-white text-black rounded-full text-base hover:bg-emerald-600 hover:text-white
             font-medium hover:transition-all hover:duration-300 max-md:hidden"
            >
              Contact Us
            </Button>
          </Link>

          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarItem;
