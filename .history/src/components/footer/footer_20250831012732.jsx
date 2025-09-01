import footerLogoWithName from "../../assets/images/footerLogoWithName.png"

function Footer() {
  return (
    <div className='wavyBackground d-flex align-items-center  flex-column bg-fa txt-f5'>
        <div>
            <div>
                <div><img src={footerLogoWithName} /></div>
                <div className="fs-16 fw-500">MyUniMap is a trademark of Control Genesis, dedicated to building smart, student-focused tools that make everyday campus life simpler, seamless, and stress-free.</div>
                <div></div>
                <div>© 2025 Control Genesis. All rights reserved.</div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='fs-19 fw-800'>Built by Students, for Students</div>
    </div>
  )
}

export default Footer