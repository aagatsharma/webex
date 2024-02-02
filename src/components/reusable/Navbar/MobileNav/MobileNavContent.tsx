import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NavbarProductItem from "../NavbarItems/NavbarProductItem";
import NavbarSolutionItem from "../NavbarItems/NavbarSolutionItem";
import NavbarResourcesItem from "../NavbarItems/NavbarResourcesItem";
import { SheetClose } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const MobileNavContent = () => {
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
    {
      label: "Join a Meeting",
      link: "/meetings",
    },
    {
      label: "Accessibility",
      link: "/accessibility",
    },
  ];
  return (
    <Accordion type="single" collapsible className="mt-10">
      {products.map((product, index) => (
        <AccordionItem
          value={product.label}
          key={index}
          className="border-y border-black"
        >
          {product.link ? (
            <SheetClose asChild>
              <AccordionTrigger iconType="none">
                <SheetClose asChild>
                  <Link to={product.link}>{product.label}</Link>
                </SheetClose>
              </AccordionTrigger>
            </SheetClose>
          ) : (
            <>
              <AccordionTrigger iconType="plus">
                {product.label}
              </AccordionTrigger>
              <AccordionContent>{product.component}</AccordionContent>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MobileNavContent;
