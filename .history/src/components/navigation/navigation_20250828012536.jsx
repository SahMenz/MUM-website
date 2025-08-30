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

  return (
    <div className="spacing-50 bg-ff4 ">
      <div className="d-flex justify-content-between align-items-center">
        <img src={logoAndName} />
        <div className="d-flex align-items-center col-5 justify-content-between d-lg-flex d-none">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#FA0808" : "#737373",
            })}
            className="text-decoration-none txt-73 fw-600 fs-16"
          >
            Home
          </NavLink>
          <NavLink
            onClick={onAboutClick}
            style={({ isActive }) => ({
              color: isActive ? "#FA0808" : "#737373",
            })}
            className="text-decoration-none txt-73 fw-600 fs-16"
          >
            About
          </NavLink>
          <NavLink
            onClick={onFeaturesClick}
            style={({ isActive }) => ({
              color: isActive ? "#FA0808" : "#737373",
            })}
            className="text-decoration-none txt-73 fw-600 fs-16"
          >
            Features
          </NavLink>
          <NavLink
            onClick={onHowItWorkClick}
            style={({ isActive }) => ({
              color: isActive ? "#FA0808" : "#737373",
            })}
            className="text-decoration-none txt-73 fw-600 fs-16"
          >
            How it works
          </NavLink>
          <NavLink
            onClick={onFaqsClick}
            style={({ isActive }) => ({
              color: isActive ? "#FA0808" : "#737373",
            })}
            className="text-decoration-none txt-73 fw-600 fs-16"
          >
            FAQs
          </NavLink>
        </div>
        <button
          className="d-none d-lg-block px-4 py-2 bg-fa txt-ff"
          style={{ borderRadius: "30px" }}
        >
          contact us
        </button>
      </div>
      {/* </div> */}
      <div
        onClick={handleShow}
        className=" d-lg-none"
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
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#FA0808" : "#737373",
                })}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                end
              >
                Home
              </NavLink>
              <NavLink
                onClick={onAboutClick}
                style={({ isActive }) => ({
                  color: isActive ? "#FA0808" : "#737373",
                })}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                end
              >
                About
              </NavLink>
              <NavLink
                onClick={onFeaturesClick}
                style={({ isActive }) => ({
                  color: isActive ? "#FA0808" : "#737373",
                })}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                end
              >
                Features
              </NavLink>
              <NavLink
                onClick={onHowItWorkClick}
                style={({ isActive }) => ({
                  color: isActive ? "#FA0808" : "#737373",
                })}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                end
              >
                How it works
              </NavLink>

              <NavLink
                onClick={onFaqsClick}
                style={({ isActive }) => ({
                  color: isActive ? "#FA0808" : "#737373",
                })}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                end
              >
                FAQs
              </NavLink><a
          style={{ textDecoration: "none" }}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="d-flex align-items-center"
            style={{
            backgroundColor: "#FA0808",
            borderRadius: "40px",
            padding: "13px 18px",
            color:"white"
          }}
          >
            <p className="mb-0 fw-500">Contact us</p>
          </button>
        </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Navigation;
