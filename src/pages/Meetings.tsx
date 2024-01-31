import MeetingsEngageCard from "@/components/meetings/MeetingsEngageCard";
import MeetingsStarter from "@/components/meetings/MeetingsStarter";
import MeetingsWorkCarousel from "@/components/meetings/MeetingsWorkCarousel";

const Meetings = () => {
  return (
    <div>
      <MeetingsStarter />
      <MeetingsEngageCard />
      <MeetingsWorkCarousel />
    </div>
  );
};

export default Meetings;
