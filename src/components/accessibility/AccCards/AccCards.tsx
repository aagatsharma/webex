import TextDownCards from "./CardsOption/TextDownCards";
import TextLeftCards from "./CardsOption/TextLeftCards";
import TextFullCards from "./CardsOption/TextFullCards";

import screenreader from "@/assets/accessibility/screenreader.png";
import keyboard from "@/assets/accessibility/keyboard2.png";
import closeCaption from "@/assets/accessibility/close-caption.png";
import fonticon from "@/assets/accessibility/fonticonsimg.png";
import integrateinterpreter from "@/assets/accessibility/integrate-interpreters.png";
import automatedtranscript from "@/assets/accessibility/automated-transcripts.png";
import customlayout from "@/assets/accessibility/custom-layouts.png";
import guestures from "@/assets/accessibility/gestures.png";

const AccCards = () => {
  return (
    <div>
      <div className="my-20 flex gap-6 px-3 max-lg:flex-col">
        <TextDownCards
          title="Keyboard accessibility"
          description="Webex supports the use of screen readers and is also committed to the
          continuous expansion of our compatibility with screen reader features."
          image={keyboard}
          bg="white"
        />
        <TextLeftCards
          title="Keyboard accessibility"
          description="Webex supports the use of screen readers and is also committed to the
          continuous expansion of our compatibility with screen reader features."
          image={screenreader}
          bg="black"
        />
      </div>
      <TextFullCards
        title="Closed captioning​"
        description="Easily follow along in a meeting with real-time closed captioning on screen."
        image={closeCaption}
        bg="white"
      />
      <div className="my-20 flex gap-6 px-3 max-lg:flex-col">
        <TextLeftCards
          title="Font & icons​​"
          description="Choose high contrast settings so that it's easier to view the text and icons in Webex."
          image={fonticon}
          bg="black"
        />
        <TextDownCards
          title="Integrate interpreters​"
          description="Assign interpreters (including sign language) to a meeting, and easily customize a view for deaf & hard-of-hearing users to ensure the interpreter video is always visible."
          image={integrateinterpreter}
          bg="white"
        />
      </div>
      <TextFullCards
        title="Automated transcripts"
        description="Get written transcriptions of your full meeting, complete with clearly labeled speakers, so you never miss a detail. "
        image={automatedtranscript}
        bg="white"
      />
      <div className="my-20 flex gap-6 px-3 max-lg:flex-col">
        <TextLeftCards
          title="Custom layouts"
          description="Choose your own view by customizing your video layouts to best suit your needs."
          image={customlayout}
          bg="white"
        />
        <TextLeftCards
          title="Gestures"
          description="Express yourself in more ways during your meeting. Use on-screen emojis by simply gesturing with your hands."
          image={guestures}
          bg="black"
        />
      </div>
    </div>
  );
};

export default AccCards;
