import playStore from "../../assets/images/playStore.png"
import appleStore from "../../assets/images/appleStore.png"
import "./hero.css"

function Hero() {
  return (
    <div className='bg-ff4  d-flex align-items-center flex-column justify-content-center text-center'>
      <div className='spacing-50 fs-63 fw-600'>Find Every Corner of Your Campus And Your Friends Too.</div>
      <div className='spacing-50-adjusted fw-400 fs-19 col-10 col-md-8 '>From hidden restrooms and food joints to that one POS that actually works — our campus navigation app helps you see what Google doesn’t. <b>Made by students, for students.</b></div>
      <div className="d-flex flex-column flex-sm-row gap-4 mt-4">
        <button className="d-flex gap-3 txt-ff bg-00" style={{borderRadius:"10px", padding:"7px 20px"}}>
          <img src={playStore}/>
          <div className="text-start">
            <div className='fs-11 fw-600'>Available on</div>
            <div className='fs-19 fw-600'>Google Play</div>
          </div>
        </button>
        <button className="d-flex gap-3 txt-ff bg-00" style={{borderRadius:"10px", padding:"7px 20px"}}>
          <img src={appleStore}/>
          <div className="text-start">
            <div className='fs-11 fw-600'>Available on</div>
            <div className='fs-19 fw-600'>Apple Store</div>
          </div>
        </button>
      </div>
      <div></div>
    </div>
  )
}

export default Hero