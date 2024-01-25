import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Logo from "@/assets/logo.svg";

const Navbar = () => {
  const navbarItem = [
    "Products",
    "Devices",
    "Solutions",
    "Resources",
    "Plans and Pricing",
  ];
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [currentScrollPos, setCurrentScrollPos] = useState(0);

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY);
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      ref={navbarRef}
      className={` ${currentScrollPos < 10 ? "bg-transparent" : "bg-black"} ${
        visible ? "translate-y-0 " : "-translate-y-full"
      }  h-20 text-white fixed top-0 w-full transition-transform duration-300 z-50 `}
    >
      <div className="max-w-7xl m-auto h-full">
        <div className="flex justify-between items-center h-full ">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src={Logo} alt="Company Logo" />
            </Link>
            {navbarItem.map((item, index) => (
              <Button
                variant="link"
                size="sm"
                className="text-white text-base max-w-max hover:underline"
                key={index}
              >
                <span className="flex items-center">
                  {item}
                  <ChevronDown className="w-4 h-4 " />
                </span>
              </Button>
            ))}
          </div>
          <div className="flex items-center">
            <Button variant="link" className="text-white text-base">
              Join a Meeting
            </Button>
            <Button variant="link" className="text-white text-base">
              Sign In
            </Button>
            <Button
              className="h-14 bg-white text-black rounded-full text-base hover:bg-emerald-600 hover:text-white
             font-medium hover:transition-all hover:duration-300"
            >
              Sign Up, It's Free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
