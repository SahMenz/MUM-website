import { useRef } from "react";
import About from "../about/about";
import Hero from "../hero/hero";
import Features from "../features/features";
import HowItWorks from "../howItWorks/howItWorks";
import Faqs from "../faqs/faqs";
import Navigation from "../navigation/navigation";

function Home() {
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refFeatures = useRef(null);
  const refHowItWork = useRef(null);
  const refFaqs = useRef(null);

  const handleHomeClick = () => {
    if (refHome.current) {
      refHome.current.scrollIntoView();
    }
  };
  const handleAboutClick = () => {
    if (refAbout.current) {
      refAbout.current.scrollIntoView();
    }
  };
  const handleFeaturesClick = () => {
    if (refFeatures.current) {
      refFeatures.current.scrollIntoView();
    }
  };
  const handleHowItWorkClick = () => {
    if (refHowItWork.current) {
      refHowItWork.current.scrollIntoView();
    }
  };
  const handleFaqsClick = () => {
    if (refFaqs.current) {
      refFaqs.current.scrollIntoView();
    }
  };

  return (
    <div>
      <Navigation
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onFeaturesClick={handleFeaturesClick}
        onHowItWorkClick={handleHowItWorkClick}
        onFaqsClick={handleFaqsClick}
      />
      <div ref={refHome}>
        <Hero />
      </div>
      <div ref={refAbout}>
        <About />
      </div>
      <div ref={refFeatures}>
        <Features />
      </div>
      <div ref={refHowItWork}>
        <HowItWorks />
      </div>
      <div ref={refFaqs}>
        <Faqs />
      </div>
    </div>
  );
}

export default Home;
