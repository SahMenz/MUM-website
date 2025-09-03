import { useState } from "react";
import CustomSvg from "../customSvg/CustomSvg";
import "./faq.css";

function Faq() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className="mt-5 txt-00 mt-5x">
      <div style={{ maxWidth: "454px", margin: "auto", textAlign: "center" }}>
        <div className="d-flex align-items-center justify-content-center">
          <div
            style={{
              width: "30px",
              height: "2px",
              backgroundColor: "white",
              borderRadius: "3px",
              marginRight: "15px",
            }}
          ></div>
          <div className="fs-19 fw-600">FAQs</div>
        </div>
        <div className="fs-45 fw-600 mb-5">
          Have Inquiries? Find Answers Here.
        </div>
      </div>
      <div>
        <div
          className="collapseMargin bg-ffd"
          onClick={() => setOpen(!open)}
          style={{ cursor: "pointer", padding: "20px", borderRadius: "10px" }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="fs-23 fw-500">Is MyUniMap free?</div>
            {open && (
              <div>
                <CustomSvg name="minus" />
              </div>
            )}
            {!open && (
              <div>
                <CustomSvg name="plus" />
              </div>
            )}
          </div>
          {open && (
            <div className="mt-4 fs-19 fw-400 txt-00">
              Yes. You can download and use the app free during early access.
            </div>
          )}
        </div>

        <div
          className="collapseMargin bg-ffd"
          onClick={() => setOpen1(!open1)}
          style={{ cursor: "pointer", padding: "20px", borderRadius: "10px" }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="fs-23 fw-500">Does it work on IOS?</div>
            {open1 && (
              <div>
                <CustomSvg name="minus" />
              </div>
            )}
            {!open1 && (
              <div>
                <CustomSvg name="plus" />
              </div>
            )}
          </div>
          {open1 && <div className="mt-4 fs-19 fw-400 txt-00">blahhhh</div>}
        </div>

        <div
          className="collapseMargin bg-ffd "
          onClick={() => setOpen2(!open2)}
          style={{ cursor: "pointer", padding: "20px", borderRadius: "10px" }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="fs-23 fw-500">
              Will it track someone without their permission?{" "}
            </div>
            {open2 && (
              <div>
                <CustomSvg name="minus" />
              </div>
            )}
            {!open2 && (
              <div>
                <CustomSvg name="plus" />
              </div>
            )}
          </div>
          {open2 && <div className="mt-4 fs-19 fw-400 txt-00">blahhh</div>}
        </div>

        <div
          className="collapseMargin bg-ffd"
          onClick={() => setOpen3(!open3)}
          style={{ cursor: "pointer", padding: "20px", borderRadius: "10px" }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="fs-23 fw-500">Do I need internet?</div>
            {open3 && (
              <div>
                <CustomSvg name="minus" />
              </div>
            )}
            {!open3 && (
              <div>
                <CustomSvg name="plus" />
              </div>
            )}
          </div>
          {open3 && <div className="mt-4 fs-19 fw-400 txt-00">Ask Alpha</div>}
        </div>

        <div
          className="collapseMargin bg-ffd "
          onClick={() => setOpen4(!open4)}
          style={{ cursor: "pointer", padding: "20px", borderRadius: "10px" }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="fs-23 fw-500">
              What makes MyUniMap different from Google map?
            </div>
            {open4 && (
              <div>
                <CustomSvg name="minus" />
              </div>
            )}
            {!open4 && (
              <div>
                <CustomSvg name="plus" />
              </div>
            )}
          </div>
          {open4 && (
            <div className="mt-4 fs-19 fw-400 txt-00">
              Guy dont disturb me just go use am if u like
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faq;
