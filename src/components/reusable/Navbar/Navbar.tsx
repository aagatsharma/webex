import { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [currentScrollPos, setCurrentScrollPos] = useState(0);

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY);
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={` ${
        visible ? "translate-y-0 z-50 " : "-translate-y-full z-auto"
      } 
      h-20 text-white fixed top-0 z-50 w-full transition-transform duration-300 bg-black
      ${
        currentScrollPos < 10 && currentPath === "/"
          ? "bg-transparent"
          : "bg-black"
      }
      `}
    >
      <div className="max-w-7xl m-auto h-full px-5">
        <NavbarItem />
      </div>
    </nav>
  );
};

export default Navbar;
