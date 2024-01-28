import DeveloperGetStarted from "@/components/developer/DeveloperGetStarted";
import DeveloperStarter from "@/components/developer/DeveloperStarter";
import DeveloperWhy from "@/components/developer/DeveloperWhy";

const Developer = () => {
  return (
    <div className="mt-20 bg-black">
      <DeveloperStarter />
      <DeveloperWhy />
      <DeveloperGetStarted />
    </div>
  );
};

export default Developer;
