import photoBased from "../../assets/images/photoBased.png";
import builtByStudents from "../../assets/images/builtByStudent.png";
import realTimeDirections from "../../assets/images/realTimeDirections.png";
import hiddenLocation from "../../assets/images/hiddenLocation.png";
import trustedBy from "../../assets/images/trustedBy.png";
import friendPinging from "../../assets/images/friendPinging.png";
function Features() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center spacing-50">
      <div className="text-center" style={{ maxWidth: "567px" }}>
        <div className="fs-32 fw-600">Key Features & Benefits</div>
        <div className="fs-16 fw-400">
          Built for students, tested on campus, and packed with tools you’ll
          actually use — designed to make campus life easier, smarter, and more
          connected.
        </div>
      </div>

      <div className="d-flex">
        <div className="d-flex gap-3">
          <div><img src={realTimeDirections} style={{ width: "100%" }} /></div>
          <div className="d-flex flex-column">
            <div><img src={hiddenLocation} style={{ width: "100%" }} /></div>
            <div className="d-flex gap-3">
              <div><img src={trustedBy} style={{ width: "100%" }} /></div>
              <div><img src={friendPinging} style={{ width: "100%" }} /></div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div>
            <img src={photoBased} style={{ width: "100%" }} />
          </div>
          <div>
            <img src={builtByStudents} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
