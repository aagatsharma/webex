import ContactAccordin from "@/components/contact/ContactAccordin";
import ContactCards from "@/components/contact/ContactCards";
import ContactStarter from "@/components/contact/ContactStarter";
import ContactTabs from "@/components/contact/ContactTabs";

const Contact = () => {
  return (
    <div>
      <ContactStarter />
      <ContactCards />
      <ContactTabs />
      <ContactAccordin />
    </div>
  );
};

export default Contact;
