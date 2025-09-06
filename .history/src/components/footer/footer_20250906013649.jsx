import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

// Placeholder components for the routes
const Home = () => (
  <div className="flex justify-center items-center h-screen text-3xl font-bold">
    <div className="text-gray-900 dark:text-gray-100">Home Page</div>
  </div>
);
const About = () => (
  <div className="flex justify-center items-center h-screen text-3xl font-bold">
    <div className="text-gray-900 dark:text-gray-100">About Page</div>
  </div>
);
const Features = () => (
  <div className="flex justify-center items-center h-screen text-3xl font-bold">
    <div className="text-gray-900 dark:text-gray-100">Features Page</div>
  </div>
);
const HowItWorks = () => (
  <div className="flex justify-center items-center h-screen text-3xl font-bold">
    <div className="text-gray-900 dark:text-gray-100">How It Works Page</div>
  </div>
);
const FAQs = () => (
  <div className="flex justify-center items-center h-screen text-3xl font-bold">
    <div className="text-gray-900 dark:text-gray-100">FAQs Page</div>
  </div>
);

function Footer() {
  const myWhatsAppNumber = "2349039341520";
  const preFilledMessage = "Hello! I'm interested in your services. Can we chat?";
  const cleanedPhoneNumber = myWhatsAppNumber.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(preFilledMessage);

  const whatsappLink = `https://wa.me/${cleanedPhoneNumber}?text=${encodedMessage}`;

  return (
    <div className="mt-5 spacing-50 FooterWavyBackground gap-5 d-flex align-items-center flex-column bg-fa txt-f5">
      <style>
        {`
        .FooterWavyBackground {
            background-color: #fcf6f6;
            color: black;
            padding: 50px;
            position: relative;
        }
        
        .FooterWavyBackground::before {
            content: "";
            position: absolute;
            top: -50px;
            left: 0;
            width: 100%;
            height: 50px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0 C240,80 480,-40 720,40 S1200,80 1200,80 V120 H0 V0 Z" fill="#fcf6f6"/></svg>');
            background-size: 100% 100%;
        }
        .spacing-50{
          padding: 50px 0;
        }
        .bg-fa{
          background-color: #FAFAFA;
        }
        .txt-f5{
          color: #F5F5F5;
        }
        .cursor{
          cursor: pointer;
        }
        `}
      </style>
      <div className="d-flex col-12 gap-5 justify-content-between flex-column flex-wrap flex-md-row">
        <div className="d-flex gap-4 flex-column" style={{ maxWidth: "329px" }}>
          <div className="fs-2xl font-bold">MyUniMap</div>
          <div className="fs-base font-medium">
            MyUniMap is a trademark of Control Genesis, dedicated to building
            smart, student-focused tools that make everyday campus life simpler,
            seamless, and stress-free.
          </div>
          <div className="d-flex gap-3">
            <span>LinkedIn</span>
            <span>Twitter</span>
            <span>Facebook</span>
            <span>Instagram</span>
          </div>
          <div>© 2025 Control Genesis. All rights reserved.</div>
        </div>
        <div className="d-flex gap-4 flex-column">
          <div className="fs-19 fw-700">Quick links</div>
          <NavLink to="/" className="fs-16 fw-500 cursor" style={{ textDecoration: 'none', color: 'inherit' }}>Home</NavLink>
          <NavLink to="/about" className="fs-16 fw-500 cursor" style={{ textDecoration: 'none', color: 'inherit' }}>About</NavLink>
          <NavLink to="/features" className="fs-16 fw-500 cursor" style={{ textDecoration: 'none', color: 'inherit' }}>Features</NavLink>
          <NavLink to="/how-it-works" className="fs-16 fw-500 cursor" style={{ textDecoration: 'none', color: 'inherit' }}>How it works</NavLink>
          <NavLink to="/faqs" className="fs-16 fw-500 cursor" style={{ textDecoration: 'none', color: 'inherit' }}>FAQs</NavLink>
        </div>
        <div>
          <div className="d-flex gap-4 flex-column">
            <div className="fs-19 fw-700">Need Help?</div>
            <div className="fs-16 fw-500">Help Center</div>
            <div className="fs-16 fw-500">Report a Problem</div>
            <a
              style={{ textDecoration: "none" }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="fs-16 fw-500 txt-ff">Contact Support</div>
            </a>
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
            <a
              href="https://controlgenesis.com/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="fs-2xl font-bold">Control Genesis</div>
            </a>
          </div>
        </div>
      </div>
      <div className="fs-19 fw-800">Built by Students, for Students</div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}





// import { LiaLinkedin } from "react-icons/lia";
// import footerLogoWithName from "../../assets/images/footerLogoWithName.png";
// import { BsInstagram, BsTwitter } from "react-icons/bs";
// import { FaFacebook } from "react-icons/fa";
// import companyLogo from "../../assets/images/companyLogoAndName.png";
// import "./footer.css";

// function Footer({
//   onAboutClick,
//   onFeaturesClick,
//   onHowItWorkClick,
//   onFaqsClick,
// }) {
//   const myWhatsAppNumber = "2349039341520";
//   const preFilledMessage =
//     "Hello! I'm interested in your services. Can we chat?";
//   const cleanedPhoneNumber = myWhatsAppNumber.replace(/[^0-9]/g, "");
//   const encodedMessage = encodeURIComponent(preFilledMessage);

//   const whatsappLink = `https://wa.me/${cleanedPhoneNumber}?text=${encodedMessage}`;

//   return (
//     <div className="mt-5 spacing-50 FooterWavyBackground gap-5  d-flex align-items-center  flex-column bg-fa txt-f5">
//       <div className="d-flex col-12 gap-5 justify-content-between flex-column flex-wrap flex-md-row">
//         <div className="d-flex gap-4 flex-column" style={{ maxWidth: "329px" }}>
//           <div>
//             <img src={footerLogoWithName} />
//           </div>
//           <div className="fs-16 fw-500">
//             MyUniMap is a trademark of Control Genesis, dedicated to building
//             smart, student-focused tools that make everyday campus life simpler,
//             seamless, and stress-free.
//           </div>
//           <div className="d-flex gap-3">
//             <LiaLinkedin size={35} />
//             <BsTwitter size={30} />
//             <FaFacebook size={30} />
//             <BsInstagram size={30} />
//           </div>
//           <div>© 2025 Control Genesis. All rights reserved.</div>
//         </div>
//         <div className="d-flex gap-4 flex-column">
//           <div className="fs-19 fw-700">Quick links</div>
//           <div className="fs-16 fw-500 cursor">Home</div>
//           <div onClick={onAboutClick} className="fs-16 fw-500 cursor">
//             About
//           </div>
//           <div onClick={onFeaturesClick} className="fs-16 fw-500 cursor">
//             Features
//           </div>
//           <div onClick={onHowItWorkClick} className="fs-16 fw-500 cursor">
//             How it works
//           </div>
//           <div onClick={onFaqsClick} className="fs-16 fw-500 cursor">
//             FAQs
//           </div>
//         </div>
//         <div>
//           <div className="d-flex gap-4 flex-column">
//             <div className="fs-19 fw-700">Need Help?</div>
//             <div className="fs-16 fw-500">Help Center</div>
//             <div className="fs-16 fw-500">Report a Problem</div>
//             <a
//               style={{ textDecoration: "none" }}
//               href={whatsappLink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className="fs-16 fw-500 txt-ff">Contact Support</div>
//             </a>
//           </div>
//         </div>
//         <div>
//           <div className="d-flex gap-4 flex-column">
//             <div className="fs-19 fw-700">Legal & Compliance</div>
//             <div className="fs-16 fw-500">Terms & Conditions</div>
//             <div className="fs-16 fw-500">Privacy Policy</div>
//           </div>
//         </div>
//         <div>
//           <div className="d-flex gap-4 flex-column">
//             <div className="fs-19 fw-700">FROM</div>
//             <a
//               href="https://controlgenesis.com/"
//               style={{ textDecoration: "none" }}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={companyLogo} style={{ color: "transparent" }} />
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="fs-19 fw-800">Built by Students, for Students</div>
//     </div>
//   );
// }

// export default Footer;
