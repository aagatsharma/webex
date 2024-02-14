import starter from "@/assets/accessibility/hero-collab-image.png";

const AccessibilityStarter = () => {
  return (
    <div className="max-w-5xl m-auto my-40">
      <div className="flex flex-col items-center space-y-20 mx-6 max-md:space-y-10 ">
        <h1 className=" text-8xl text-center max-md:text-6xl">
          Collaboration that works for everyone.
        </h1>
        <h3 className="text-5xl text-center max-md:text-2xl">
          Webex is committed to making collaboration accessible and inclusive
          for people of all abilities and backgrounds.
        </h3>
        <img src={starter} alt="Hero Image" />
      </div>
    </div>
  );
};

export default AccessibilityStarter;
