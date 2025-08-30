import { Link } from "react-router-dom";
import logoAndName from "../../assets/images/logoAndName.png";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

function Navigation({
  onAboutClick,
  onFeaturesClick,
  onHowItWorkClick,
  onFaqsClick,
}) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const navLinkClass = ({ isActive }) =>
    `text-decoration-none fw-600 fs-16 ${
      isActive ? "text-red-500" : "text-gray-400"
    }`;

  const offcanvasNavLinkClass = ({ isActive }) =>
    `hovering txt-16 lh-19 fw-600 text-decoration-none ${
      isActive ? "text-red-500" : "text-gray-400"
    }`;

  return (
    <div className="d-flex container-adjustment justify-content-between align-items-center">
      <img src={logoAndName} />
      <div className="d-flex align-items-center w-50 justify-content-between d-lg-flex d-none">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink onClick={onAboutClick} className={navLinkClass}>
          About
        </NavLink>
        <NavLink onClick={onFeaturesClick} className={navLinkClass}>
          Features
        </NavLink>
        <NavLink onClick={onHowItWorkClick} className={navLinkClass}>
          How it works
        </NavLink>
        <NavLink onClick={onFaqsClick} className={navLinkClass}>
          FAQs
        </NavLink>
        <button>contact us</button>
      </div>
      <div
        onClick={handleShow}
        className="d-lg-none"
        style={{
          cursor: "pointer",
          width: "40px",
          height: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className=""
        style={{ backgroundColor: "#737373" }}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{ borderRadius: "20px" }}
            className="bg-ff pt-4 d-flex flex-column d-lg-flex justify-content-center align-items-center"
          >
            <div
              className="d-flex flex-column mb-5 justify-content-between align-items-center"
              style={{ height: "200px" }}
            >
              <NavLink to="/" className={offcanvasNavLinkClass} end>
                Home
              </NavLink>
              <NavLink onClick={onAboutClick} className={offcanvasNavLinkClass} end>
                About
              </NavLink>
              <NavLink onClick={onFeaturesClick} className={offcanvasNavLinkClass} end>
                Features
              </NavLink>
              <NavLink onClick={onHowItWorkClick} className={offcanvasNavLinkClass} end>
                How it works
              </NavLink>
              <NavLink onClick={onFaqsClick} className={offcanvasNavLinkClass} end>
                FAQs
              </NavLink>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Navigation;