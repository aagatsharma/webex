import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavbarProductItem from "./NavbarItems/NavbarProductItem";
import NavbarSolutionItem from "./NavbarItems/NavbarSolutionItem";
import NavbarResourcesItem from "./NavbarItems/NavbarResourcesItem";

const products = [
  {
    label: "Products",
    component: <NavbarProductItem />,
  },

  {
    label: "Solutions",
    component: <NavbarSolutionItem />,
  },
  {
    label: "Resources",
    component: <NavbarResourcesItem />,
  },
  {
    label: "Developer",
    link: "/developer",
  },
  {
    label: "Plans and Pricing",
    link: "/pricing",
  },
];

const NavbarItemList = () => {
  const [showNav, setShowNav] = useState(Array(products.length).fill(false));

  const handleButtonClick = (index: number) => {
    const newShowNav = Array(products.length).fill(false);
    newShowNav[index] = !showNav[index];
    setShowNav(newShowNav);
  };

  return (
    <div className="flex pl-3 items-center">
      {products.map((product, index) => (
        <div key={index}>
          {product.component ? (
            <div className="group">
              <Button
                variant="link"
                className="text-white flex items-center justify-center border-emerald-600"
                onClick={() => handleButtonClick(index)}
              >
                <span className={showNav[index] ? "text-emerald-600" : ""}>
                  {product.label}
                </span>
                <ChevronDown
                  className={`${
                    showNav[index] ? "rotate-180 text-emerald-600" : ""
                  } duration-300 w-4 h-4`}
                />
              </Button>
              {showNav[index] && (
                <div className="flex flex-col absolute left-0 top-full p-10 w-full bg-white z-20 text-black duration-300 shadow-2xl">
                  {product.component}
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="link"
              className="text-white flex items-center justify-center border-emerald-600"
            >
              <Link to={product.link}>{product.label}</Link>
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarItemList;
