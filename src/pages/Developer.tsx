import DeveloperApp from "@/components/developer/DeveloperApp";
import DeveloperChatbot from "@/components/developer/DeveloperChatbot";
import DeveloperGetStarted from "@/components/developer/DeveloperGetStarted";
import DeveloperStarter from "@/components/developer/DeveloperStarter";
import DeveloperTools from "@/components/developer/DeveloperTools";
import DeveloperWhy from "@/components/developer/DeveloperWhy";

const Developer = () => {
  return (
    <div className="mt-20 bg-black">
      <DeveloperStarter />
      <DeveloperWhy />
      <DeveloperGetStarted />
      <DeveloperTools />
      <DeveloperChatbot />
      <DeveloperApp />
    </div>
  );
};

export default Developer;
