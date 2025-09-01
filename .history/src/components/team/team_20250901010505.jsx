import { BiSend } from "react-icons/bi"
import "./team.css"
function Team() {
  return (
    <div className="spacing-50 mt-4">
        <div className="distance col-12">
            <div className="txt-f5 d-flex flex-column p-3" style={{maxWidth:"869px", borderRadius:"16px", backgroundColor:"rgba(115, 115, 115, 0.5)"}}>
                <div className="fs-43 fw-600">Why We’re Different — Tested on Campus, Proven by Students</div>
                <div className="my-3 fs-16 fw-500">Google Maps is great for cities. Our app is built for campus life — with real landmarks, shortcuts, and hidden spots only students know. Made by students, for students.</div>
                <div className="bg-ff d-flex gap-2" style={{borderRadius:"60px", padding:"10px", alignSelf:"end", minWidth:"80px"}}>
                    <input placeholder="Your email address" className="w-75" style={{border:"none", marginLeft:"20px"}}/>
                    {/* <button className="bg-fa txt-ff text-end" style={{borderRadius:"60px", padding:"10px 20px"}}>Get early access</button> */}
                    <BiSend color="red" size={30} className="d-block d-lg-none"/>
                </div>
            </div>
        </div>
        {/* <div></div> */}
    </div>
  )
}

export default Team