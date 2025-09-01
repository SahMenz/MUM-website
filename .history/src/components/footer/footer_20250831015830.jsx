import { LiaLinkedin } from "react-icons/lia";
import footerLogoWithName from "../../assets/images/footerLogoWithName.png";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import companyLogo from "../../assets/images/companyLogoAndName.png";
import "./footer.css";

function Footer() {
  return (
    <div className="mt-5 spacing-50 FooterWavyBackground gap-5  d-flex align-items-center  flex-column bg-fa txt-f5">
      <div className="d-flex col-12 gap-5 justify-content-between flex-column flex-lg-row">
        <div className="d-flex gap-4 flex-column" style={{ maxWidth: "329px" }}>
          <div>
            <img src={footerLogoWithName} />
          </div>
          <div className="fs-16 fw-500">
            MyUniMap is a trademark of Control Genesis, dedicated to building
            smart, student-focused tools that make everyday campus life simpler,
            seamless, and stress-free.
          </div>
          <div className="d-flex gap-3">
            <LiaLinkedin size={35} />
            <BsTwitter size={30} />
            <FaFacebook size={30} />
            <BsInstagram size={30} />
          </div>
          <div>© 2025 Control Genesis. All rights reserved.</div>
        </div>
        <div className="d-flex gap-4 flex-column">
          <div className="fs-19 fw-700">Quick links</div>
          <div className="fs-16 fw-500">Home</div>
          <div className="fs-16 fw-500">About</div>
          <div className="fs-16 fw-500">Features</div>
          <div className="fs-16 fw-500">How it works</div>
          <div className="fs-16 fw-500">FAQs</div>
        </div>
        <div>
          <div className="d-flex gap-4 flex-column">
            <div className="fs-19 fw-700">Need Help?</div>
            <div className="fs-16 fw-500">Help Center</div>
            <div className="fs-16 fw-500">Report a Problem</div>
            <div className="fs-16 fw-500">Contact Support</div>
          </div>
        </div>
        <div>
          <div className="d-flex gap-4 flex-column">
            <div className="fs-19 fw-700">Legal & Compliance</div>
            <div className="fs-16 fw-500">Terms & Conditions</div>
            <div className="fs-16 fw-500">Privacy Policy</div>
          </div>
        </div>
        <div>
          <div className="d-flex gap-4 flex-column">
            <div className="fs-19 fw-700">FROM</div>
            <a href="https://controlgenesis.com/" style={{textDecoration:"none"}} target="_blank"
                  rel="noopener noreferrer">
              <img src={companyLogo} style={{color:"transparent"}}/>
            </a>
          </div>
        </div>
      </div>
      <div className="fs-19 fw-800">Built by Students, for Students</div>
    </div>
  );
}

export default Footer;
