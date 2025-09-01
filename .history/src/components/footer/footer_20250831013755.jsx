import { LiaLinkedin } from "react-icons/lia"
import footerLogoWithName from "../../assets/images/footerLogoWithName.png"
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"

function Footer() {
  return (
    <div className='wavyBackground d-flex align-items-center  flex-column bg-fa txt-f5'>
        <div>
            <div className="d-flex flex-column" style={{maxWidth:"329px"}}>
                <div><img src={footerLogoWithName} /></div>
                <div className="fs-16 fw-500">MyUniMap is a trademark of Control Genesis, dedicated to building smart, student-focused tools that make everyday campus life simpler, seamless, and stress-free.</div>
                <div className="d-flex gap-3">
                    {/* <div><img src={x}/></div>
                    <div><img src={linked}/></div>
                    <div><img src={x}/></div>
                    <div><img src={x}/></div> */}
                    <LiaLinkedin size={35}/>
                    <BsTwitter size={30}/>
                    <FaFacebook size={30}/>
                    <BsInstagram size={30}/>
                </div>
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