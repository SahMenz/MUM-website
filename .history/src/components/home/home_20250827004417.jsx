import React from "react";

function Home() {
  return (
    <div>
        <Navigation
        onSolutionsClick={handleSolutionsClick}
        onAboutUsClick={handleAboutUsClick}
        onHowWeWorkClick={handleHowWeWorkClick}
      />
      <div ref={refHero}>
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
