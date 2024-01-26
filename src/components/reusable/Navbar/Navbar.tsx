import { useEffect, useRef, useState } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
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
  }, [currentScrollPos, prevScrollPos, visible]);

  return (
    <nav
      ref={navbarRef}
      className={` ${
        visible ? "translate-y-0 z-50 " : "-translate-y-full z-auto"
      } 
      h-20 text-white fixed top-0 z-50 w-full transition-transform duration-300 bg-black
      `}
      // ${
      //     currentScrollPos < 10 && currentPath === "/"
      //       ? "bg-transparent"
      //       : "bg-black"
      //     }
    >
      <div className="max-w-7xl m-auto h-full px-5">
        <NavbarItem />
      </div>
    </nav>
  );
};

export default Navbar;
