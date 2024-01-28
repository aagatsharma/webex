import AccCards from "./AccCards/AccCards";

const AccessibilityCards = () => {
  return (
    <div className="bg-[#e1e1e1] py-20">
      <div className=" max-w-[1400px] m-auto px-4 ">
        <div className="flex justify-between max-md:flex-col max-md:items-center max-md:gap-y-10">
          <h1 className="text-7xl max-md:text-5xl w-[600px] max-md:w-full">
            Accessibility features, built for you.
          </h1>
          <h3 className=" w-[450px] text-2xl max-md:w-full">
            At Hoostly, our goal is to create a truly inclusive experience that
            can adapt to everyone. That’s why we build and continuously improve
            our collaboration solutions with accessibility, usability, and
            inclusivity at the forefront.
          </h3>
        </div>
        <AccCards />
      </div>
    </div>
  );
};

export default AccessibilityCards;
