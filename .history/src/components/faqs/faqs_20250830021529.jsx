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
      <div className="mt-5 txt-00">
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
            <div className="fs-19 fw-500">FAQs</div>
          </div>
          <div className="fs-48 fw-600 mb-5">
            Have Inquiries? Find Answers Here.
          </div>
        </div>
        <div>
          <div
            className="collapseMargin "
            onClick={() => setOpen(!open)}
            style={{ cursor: "pointer", padding: "30px", borderRadius: "10px" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="fs-23 fw-400">What services do you offer?</div>
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
                We specialize in design, development, and strategic solutions to
                help businesses grow and succeed. Our services include web
                development, mobile app development, UX/UI design, business
                consulting, and more. We tailor our offerings to meet the unique
                needs of each client, ensuring impactful, high-quality results.
              </div>
            )}
          </div>

          <div
            className="collapseMargin bg-ffd"
            onClick={() => setOpen1(!open1)}
            style={{ cursor: "pointer", padding: "30px", borderRadius: "10px" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="fs-23 fw-400">What industries do you serve?</div>
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
            {open1 && (
              <div className="mt-4 fs-19 fw-400 txt-00">
                We specialize in design, development, and strategic solutions to
                help businesses grow and succeed. Our services include web
                development, mobile app development, UX/UI design, business
                consulting, and more. We tailor our offerings to meet the unique
                needs of each client, ensuring impactful, high-quality results.
              </div>
            )}
          </div>

          <div
            className="collapseMargin bg-ffd "
            onClick={() => setOpen2(!open2)}
            style={{ cursor: "pointer", padding: "30px", borderRadius: "10px" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="fs-23 fw-400">
                How long does a typical project take?
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
            {open2 && (
              <div className="mt-4 fs-19 fw-400 txt-00">
                We specialize in design, development, and strategic solutions to
                help businesses grow and succeed. Our services include web
                development, mobile app development, UX/UI design, business
                consulting, and more. We tailor our offerings to meet the unique
                needs of each client, ensuring impactful, high-quality results.
              </div>
            )}
          </div>

          <div
            className="collapseMargin bg-ffd"
            onClick={() => setOpen3(!open3)}
            style={{ cursor: "pointer", padding: "30px", borderRadius: "10px" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="fs-23 fw-400">
                Do you offer SEO and digital marketing services?
              </div>
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
            {open3 && (
              <div className="mt-4 fs-19 fw-400 txt-00">
                We specialize in design, development, and strategic solutions to
                help businesses grow and succeed. Our services include web
                development, mobile app development, UX/UI design, business
                consulting, and more. We tailor our offerings to meet the unique
                needs of each client, ensuring impactful, high-quality results.
              </div>
            )}
          </div>

          <div
            className="collapseMargin bg-ffd "
            onClick={() => setOpen4(!open4)}
            style={{ cursor: "pointer", padding: "30px", borderRadius: "10px" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="fs-23 fw-400">
                What makes you different from other agencies?
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
                We specialize in design, development, and strategic solutions to
                help businesses grow and succeed. Our services include web
                development, mobile app development, UX/UI design, business
                consulting, and more. We tailor our offerings to meet the unique
                needs of each client, ensuring impactful, high-quality results.
              </div>
            )}
          </div>
        </div>
      </div>
  );
}

export default Faq;
