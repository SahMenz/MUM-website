import forFreshers from "../../assets/images/forFreshers.png"
import forReturningStudent from "../../assets/images/forReturningStudent.png"
import forVisitors from "../../assets/images/forVisitors.png"

function About() {
  return (
    <div className='spacing-50 mt-4 d-flex flex-column align-items-center'>
      <div className='text-center' style={{maxWidth:"569px"}}>
        <div className='fs-32 fw-600'>We Know the Struggle</div>
        <div className='fs-16 fw-400'>Not knowing where an office, lecture hall, or restroom is can be frustrating — from losing the best seats in class to trekking across campus just to find the one restroom you know.</div>
      </div>
      <div className="d-flex gap-3 mt-5">
        <div><img src={forFreshers} style={{width:"100%"}}/></div>
        <div className="d-flex gap-3 flex-column" >
          <div><img src={forReturningStudent} style={{width:"100%"}}/></div>
          <div><img src={forVisitors} style={{width:"100%"}}/></div>
        </div>
      </div>
      <div>
        <div></div>
        <div>
          <div></div>
          <div className="fs-16 fw-400">We built an app that shows every spot on campus — with real photos, directions, and even friend tracking. From classes to offices to that suya joint your friend mentioned, you’ll get there without the guesswork.</div>
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default About