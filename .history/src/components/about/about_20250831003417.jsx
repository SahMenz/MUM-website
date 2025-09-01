import forFreshers from "../../assets/images/forFreshers.png";
import forReturningStudent from "../../assets/images/forReturningStudent.png";
import forVisitors from "../../assets/images/forVisitors.png";
import yourCampus from "../../assets/images/yourCampus.png";

function About() {
  return (
    <div className="spacing-50 mt-4 d-flex flex-column align-items-center">
      <div className="text-center" style={{ maxWidth: "569px" }}>
        <div className="fs-32 fw-600">We Know the Struggle</div>
        <div className="fs-16 fw-400">
          Not knowing where an office, lecture hall, or restroom is can be
          frustrating — from losing the best seats in class to trekking across
          campus just to find the one restroom you know.
        </div>
      </div>
      <div className="d-flex gap-3 gap-lg-5 mt-5">
        <div>
          <img src={forFreshers} style={{ width: "100%" }} />
        </div>
        <div className="d-flex gap-3 gap-lg-5 flex-column">
          <div>
            <img src={forReturningStudent} style={{ width: "100%" }} />
          </div>
          <div>
            <img src={forVisitors} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between col-10 col-lg-12 mt-5 align-items-center gap-4">
        <div><img src={yourCampus} style={{width:"100%", minWidth:"200px"}}/></div>
        <div className="text-start" style={{maxWidth:"520px"}}>
          <div className="fs-32 fw-600">
            Your Campus Mapped Like Never Before
          </div>
          <div className="fs-16 fw-400 my-4">
            We built an app that shows every spot on campus — with real photos,
            directions, and even friend tracking. From classes to offices to
            that suya joint your friend mentioned, you’ll get there without the
            guesswork.
          </div>
          <button
            className="d-flex align-items-center fs-16"
            style={{
              backgroundColor: "#FA0808",
              borderRadius: "40px",
              padding: "13px 18px",
              color: "white",
            }}
          >
            <p className="mb-0 fw-500">Get started for free</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
