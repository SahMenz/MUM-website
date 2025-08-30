import photoBased from "../../assets/images/photoBased.png"
// import BuiltByStudents from "../../assets/images/BuiltByStudents.png"
function Features() {
  return (
    <div className="d-flex align-items-center justify-content-center spacing-50">
      <div className="text-center" style={{ maxWidth: "567px" }}>
        <div className="fs-32 fw-600">Key Features & Benefits</div>
        <div className="fs-16 fw-400">
          Built for students, tested on campus, and packed with tools you’ll
          actually use — designed to make campus life easier, smarter, and more
          connected.
        </div>
      </div>

      <div>
        <div></div>
        <div>
          <div><img src={photoBased} style={{width:"100%"}}/>

          </div>
          {/* <div><img src={BuiltByStudents} style={{width:"100%"}}/> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
