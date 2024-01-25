import FooterIcons from "./FooterIcons";
import FooterStarter from "./FooterStarter";
import FooterTags from "./FooterTags";

const Footer = () => {
  return (
    <div>
      <FooterStarter />
      <div className="w-full bg-black text-white ">
        <FooterTags />
        <FooterIcons />
      </div>
    </div>
  );
};

export default Footer;
