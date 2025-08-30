import playStore from "../../assets/images/playStore.png";
import appleStore from "../../assets/images/appleStore.png";
import mumOnPhone from "../../assets/images/mumOnPhone.png";
import unCover from "../../assets/images/uncover.svg";
import navigate from "../../assets/images/navigate.svg";
import connect from "../../assets/images/connect.svg";
import "./hero.css";

function Hero() {
  return (
    <div className="bg-ff4  d-flex align-items-center flex-column justify-content-center text-center">
      <div className="spacing-50 fs-63 fw-600">
        Find Every Corner of Your Campus And Your Friends Too.
      </div>
      <div className="spacing-50-adjusted fw-400 fs-19 col-10 col-md-8 ">
        From hidden restrooms and food joints to that one POS that actually
        works — our campus navigation app helps you see what Google doesn’t.{" "}
        <b>Made by students, for students.</b>
      </div>
      <div className="d-flex gap-4 mt-4 spacing-50-adjusted">
        <button
          className="d-flex gap-3 txt-ff bg-00"
          style={{ borderRadius: "10px", padding: "7px 20px" }}
        >
          <img src={playStore} />
          <div className="text-start">
            <div className="fs-11 fw-600">Available on</div>
            <div className="fs-19 fw-600">Google Play</div>
          </div>
        </button>
        <button
          className="d-flex gap-3 txt-ff bg-00"
          style={{ borderRadius: "10px", padding: "7px 20px" }}
        >
          <img src={appleStore} />
          <div className="text-start">
            <div className="fs-11 fw-600">Available on</div>
            <div className="fs-19 fw-600">Apple Store</div>
          </div>
        </button>
      </div>
      <div className="d-flex flex-column align-items-center flex-lg-row wavyBackground justify-content-center mt-5 gap-4">
        <div
          className="text-start bg-ffb p-4"
          style={{ maxWidth: "284px", borderRadius: "16px" }}
        >
          <div>
            <img src={unCover} />
          </div>
          <div className="fs-16 fw-500 mt-4 mb-3">
            Uncover Hidden Campus Spots
          </div>
          <div className="fs-13 fw-400">
            Restrooms, food joints, study nooks, and hangout corners — discover
            the places only students talk about. Explore your campus like never
            before.
          </div>
        </div>
        <img src={mumOnPhone} />
        <div className="d-flex flex-column gap-5">
          {/* <div> */}
          <div
            className="text-start bg-ffb p-4 ms-5"
            style={{ maxWidth: "284px", borderRadius: "16px" }}
          >
            <div>
              <img src={navigate} />
            </div>
            <div className="fs-16 fw-500 mt-4 mb-3">
              Navigate Shortcuts With Ease
            </div>
            <div className="fs-13 fw-400">
              Forget long detours and confusing hallways. Find the fastest paths
              to classes, hostels, or food spots, and always arrive on time.
            </div>
          </div>
          <div className="d-none d-lg-block" style={{height:"200px"}}>

          </div>
          <div
            className="text-start bg-ffb p-4"
            style={{ maxWidth: "284px", borderRadius: "16px" }}
          >
            <div>
              <img src={connect} />
            </div>
            <div className="fs-16 fw-500 mt-4 mb-3">
              Connect Faster With Friends
            </div>
            <div className="fs-13 fw-400">
              From group projects to lunch breaks, see where your circle is and
              link up instantly. Campus life is better together.
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
