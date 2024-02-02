import MeeingsBusiness from "@/components/meetings/MeeingsBusiness";
import MeetingsCollaborateAccordion from "@/components/meetings/MeetingsCollaborateAccordion";
import MeetingsEngageCard from "@/components/meetings/MeetingsEngageCard";
import MeetingsStarter from "@/components/meetings/MeetingsStarter";
import MeetingsWorkCarousel from "@/components/meetings/MeetingsWorkCarousel";

const Meetings = () => {
  return (
    <div>
      <MeetingsStarter />
      <MeetingsEngageCard />
      <MeetingsWorkCarousel />
      <MeetingsCollaborateAccordion />
      <MeeingsBusiness />
    </div>
  );
};

export default Meetings;
