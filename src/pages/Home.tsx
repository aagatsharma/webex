import HomeAds from "@/components/home/HomeAds";
import HomeCustomerExperience from "@/components/home/HomeCustomerExperience";
import HomeImage from "@/components/home/HomeImage";
import HomeReview from "@/components/home/HomeReview";
import HomeTabs from "@/components/home/HomeTabs";

const Home = () => {
  return (
    <div>
      <HomeImage />
      <HomeReview />
      <HomeTabs />
      <HomeAds />
      <HomeCustomerExperience />
    </div>
  );
};

export default Home;
