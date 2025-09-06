import { NavLink } from "react-router-dom"; 

function Footer() {
  const myWhatsAppNumber = "2349039341520";
  const preFilledMessage =
    "Hello! I'm interested in your services. Can we chat?";
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
          background-color: #FA0808;
        }
        .txt-f5{
          color: #FA0808;
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
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.39 0-6.143 2.76-6.143 6.141 0 .484.055.955.162 1.404-5.102-.257-9.636-2.709-12.66-6.413-.526.911-.829 1.97-.829 3.092 0 2.133 1.084 4.02 2.732 5.122-.998-.035-1.93-.31-2.756-.757v.077c0 2.986 2.122 5.485 4.922 6.046-.518.14-1.066.216-1.635.216-.4 0-.79-.039-1.166-.112.784 2.451 3.056 4.238 5.768 4.288-2.112 1.65-4.783 2.636-7.69 2.636-2.016 0-3.992-.119-5.91-.347 2.737 1.75 5.968 2.772 9.473 2.772 11.36 0 17.585-9.444 17.585-17.658 0-.267-.008-.535-.021-.801.961-.695 1.795-1.562 2.45-2.55z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.909c0-1.096.312-1.85 1.88-1.85h2.12v-3.57l-3.77-.002c-4.136 0-5.23 2.479-5.23 5.134v2.197z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.148 3.228-1.667 4.747-4.919 4.919-1.266.058-1.645.07-4.85.07s-3.583-.012-4.85-.07c-3.251-.148-4.77-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.583.07-4.85c.149-3.227 1.667-4.746 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0-2.163c-3.632 0-4.07.016-5.484.08-4.435.201-6.702 2.478-6.902 6.903-.064 1.414-.08 1.852-.08 5.484s.016 4.07.08 5.484c.2 4.435 2.478 6.703 6.903 6.902 1.414.064 1.852.08 5.484.08s4.07-.016 5.484-.08c4.435-.2 6.703-2.478 6.902-6.903.064-1.414.08-1.852.08-5.484s-.016-4.07-.08-5.484c-.2-4.435-2.478-6.702-6.902-6.902-1.414-.064-1.852-.08-5.484-.08zm0 14.881c-2.88 0-5.208-2.327-5.208-5.208s2.328-5.208 5.208-5.208 5.208 2.327 5.208 5.208-2.328 5.208-5.208 5.208zm0-8.775c-1.968 0-3.567 1.599-3.567 3.567s1.599 3.567 3.567 3.567 3.567-1.599 3.567-3.567-1.599-3.567-3.567-3.567z" /><circle cx="18.158" cy="5.842" r="1.458" /></svg>
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

export default Footer;
