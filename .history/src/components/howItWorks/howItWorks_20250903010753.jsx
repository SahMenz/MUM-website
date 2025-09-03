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
          <div style={{maxWidth:"589px", width:"100%"}}>
            <div className="w-100 d-flex justify-content-between">
              <div className="fs-19 fw-400 txt-fa">Step</div>
              <div >
                <div className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5" style={{borderRadius:"100%", width:"40px", height:"40px", backgroundColor:"#FA0808"}}>1</div>
                <div style={{width:"1px", marginTop:"3px" , height:"104px",border:"1px border: 1px solid", linearGradient:"90deg, #FA0808 52.11%, #FFFBFB 100%"}}></div>
              </div>
              <div style={{maxWidth:"425px"}}>
                <div className="fs-23 fw-500">Search or Pick a Location</div>
                <div className="fs-16 fw-400 mt-4">From restrooms to lecture halls — plus food joints, shortcuts, and hidden gems you didn’t know existed.</div>
              </div>
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
