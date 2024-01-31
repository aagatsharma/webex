import ContactAccordin from "@/components/contact/ContactAccordin";
import ContactCards from "@/components/contact/ContactCards";
import ContactCarousel from "@/components/contact/ContactCarousel";
import ContactPartnership from "@/components/contact/ContactPartnership";
import ContactStarter from "@/components/contact/ContactStarter";
import ContactTabs from "@/components/contact/ContactTabs";

const Contact = () => {
  return (
    <div>
      <ContactStarter />
      <ContactCards />
      <ContactTabs />
      <ContactAccordin />
      <ContactCarousel />
      <ContactPartnership />
    </div>
  );
};

export default Contact;
