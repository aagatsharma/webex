import MeeingsBusiness from "@/components/meetings/MeeingsBusiness";
import MeetingReviewsCarousel from "@/components/meetings/MeetingReviewsCarousel";
import MeetingsCollaborateAccordion from "@/components/meetings/MeetingsCollaborateAccordion";
import MeetingsCollaborateGrid from "@/components/meetings/MeetingsCollaborateGrid";
import MeetingsCompare from "@/components/meetings/MeetingsCompare";
import MeetingsConferenceCarousel from "@/components/meetings/MeetingsConferenceCarousel";
import MeetingsEngageCard from "@/components/meetings/MeetingsEngageCard";
import MeetingsExperience from "@/components/meetings/MeetingsExperience";
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
      <MeetingsConferenceCarousel />
      <MeetingsExperience />
    </div>
  );
};

export default Meetings;
