import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import NavbarProductItem from "./NavbarItems/NavbarProductItem";
import NavbarDeviceItem from "./NavbarItems/NavbarDeviceItem";
import NavbarSolutionItem from "./NavbarItems/NavbarSolutionItem";
import NavbarResourcesItem from "./NavbarItems/NavbarResourcesItem";

const products = [
  {
    label: "Products",
    component: <NavbarProductItem />,
  },
  {
    label: "Devices",
    component: <NavbarDeviceItem />,
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
    label: "Plans and Pricing",
  },
];

const NavbarItemList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {products.map((product, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-white hover:underline data-[state=open]:bg-transparent focus:bg-transparent focus:text-white ">
              {product.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-screen">
              <NavigationMenuLink>{product.component}</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarItemList;
