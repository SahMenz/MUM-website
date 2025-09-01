import { BiSend } from "react-icons/bi";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import "./team.css";
function Team() {
  return (
    <div className="spacing-50 mt-4">
      <div className="distance col-12 p-3 p-lg-4">
        <div
          className="txt-f5 d-flex flex-column p-3"
          style={{
            maxWidth: "869px",
            borderRadius: "16px",
            backgroundColor: "rgba(115, 115, 115, 0.5)",
          }}
        >
          <div className="fs-43 fw-600">
            Why We’re Different — Tested on Campus, Proven by Students
          </div>
          <div className="my-3 fs-16 fw-500">
            Google Maps is great for cities. Our app is built for campus life —
            with real landmarks, shortcuts, and hidden spots only students know.
            Made by students, for students.
          </div>
          <div
            className="bg-ff d-flex gap-2"
            style={{
              borderRadius: "60px",
              padding: "10px",
              alignSelf: "end",
              minWidth: "80px",
            }}
          >
            <input
              placeholder="Your email address"
              className="w-75 w-md-25"
              style={{ border: "none", borderRadius: "60px" }}
            />
            <button
              className="bg-fa txt-ff d-none d-md-block col-6"
              style={{ borderRadius: "60px", padding: "10px 20px" }}
            >
              Get early access
            </button>
            <BiSend color="red" size={30} className="d-block d-md-none" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="d-flex align-items-center gap-5 justify-content-center flex-column flex-lg-row justify-content-lg-between">
          <img src={img1} className="col-32"/>{" "}
          <div className="text-center col-6" style={{maxWidth:"661px", minWidth:"300px"}}>
            <div className="fs-56 fw-600 mt-5">The Team Behind the Technology.</div>{" "}
            <div className="fs-19 fw-400 mt-4">
              We’re Control Genesis — students and creators building tools to
              make campus life easier. We face the same struggles, so we set out
              to solve them.
            </div>{" "}
          </div>{" "}
          <img src={img2} className="col-3"/>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Team;
