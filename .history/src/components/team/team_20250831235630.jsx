import "./team.css"
function Team() {
  return (
    <div className="spacing-50">
        <div className="open&distance col-12">
            <div className="txt-f5" style={{maxWidth:"869px"}}>
                <div className="fs-43 fw-600">Why We’re Different — Tested on Campus, Proven by Students</div>
                <div className="my-2 fs-16 fw-500">Google Maps is great for cities. Our app is built for campus life — with real landmarks, shortcuts, and hidden spots only students know. Made by students, for students.</div>
                <div className="bg-ff" style={{borderRadius:"60px", padding:"10px"}}>
                    <input placeholder="Your email address" style={{border:"none"}}/>
                    <button className="bg-fa txt-ff" style={{borderRadius:"60px", padding:"10px 20px"}}>Get early access</button>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Team