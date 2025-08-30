import React, { useRef } from "react";

function Home() {

    const refHome = useRef(null);
  const refAbout = useRef(null);
  const refFaqs = useRef(null);
  const refHowItWork = useRef(null);

  const handleSolutionsClick = () => {
    if (refHome.current) {
      refHome.current.scrollIntoView();
    }
  };
  const handleHomeClick = () => {
    if (refAbout.current) {
      refAbout.current.scrollIntoView();
    }
  };
  const handleAboutUsClick = () => {
    if (refFaqs.current) {
      refFaqs.current.scrollIntoView();
    }
  };
  const handleHowWeWorkClick = () => {
    if (refHowItWork.current) {
      refHowItWork.current.scrollIntoView();
    }
  };


  return (
    <div>
        <Navigation
        onSolutionsClick={handleSolutionsClick}
        onAboutUsClick={handleAboutUsClick}
        onHowWeWorkClick={handleHowWeWorkClick}
      />
      <div ref={refHome}>
        <Hero />
      </div>
      <MergingTradition />
      <div ref={refAboutUs}>
        <AboutUs />
      </div>
      <div ref={refValue}>
        <OurSolutions />
      </div>
      <div ref={refHowWeWork}>
        <HowAwambeWorks />
      </div>
    </div>
  );
}

export default Home;
