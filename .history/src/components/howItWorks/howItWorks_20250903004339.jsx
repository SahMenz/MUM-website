import mumOnIos from "../../assets/images/mumOnIos.png";

function HowItWorks() {
  return (
    <div>
      <div className="text-center my-4">
        <div className="fs-32 fw-600">How It Works</div>
        <div className="fs-16 fw-400 mt-3">
          Simple steps to get you started — from download to discovery in
          minutes.
        </div>
      </div>
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <img src={mumOnIos} style={{ width: "100%", maxWidth: "600px" }} />
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="fs-19 fw-400 txt-fa">Step</div>
              <div></div>
              <div></div>
            </div>
            {/* <div></div>
            <div></div>
            <div></div> */}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HowItWorks;
