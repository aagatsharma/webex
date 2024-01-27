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
          <Button
            variant="link"
            className="text-white text-base border-b-2 border-transparent hover:border-emerald-600"
          >
            <Link to="/meetings">Join a Meeting</Link>
          </Button>
          <Button
            variant="link"
            className="text-white text-base border-b-2 border-transparent hover:border-emerald-600"
          >
            <Link to="/accessibility">Accessibility</Link>
          </Button>
        </div>
        <div className="flex items-center gap-x-2">
          <Button
            className="h-14 bg-white text-black rounded-full text-base hover:bg-emerald-600 hover:text-white
             font-medium hover:transition-all hover:duration-300 max-md:hidden"
          >
            <Link to="/contact-us">Contact Us</Link>
          </Button>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarItem;
