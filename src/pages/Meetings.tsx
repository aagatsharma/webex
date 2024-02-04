import MeeingsBusiness from "@/components/meetings/MeeingsBusiness";
import MeetingReviewsCarousel from "@/components/meetings/MeetingReviewsCarousel";
import MeetingsCollaborateAccordion from "@/components/meetings/MeetingsCollaborateAccordion";
import MeetingsCollaborateGrid from "@/components/meetings/MeetingsCollaborateGrid";
import MeetingsCompare from "@/components/meetings/MeetingsCompare";
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
      <MeetingsCollaborateGrid />
      <MeetingReviewsCarousel />
      <MeetingsCompare />
    </div>
  );
};

export default Meetings;
