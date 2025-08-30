import playStore from "../../assets/images/playStore.png"

function Hero() {
  return (
    <div className='bg-ff4 spacing-50 d-flex align-items-center flex-column justify-content-center text-center'>
      <div className='fs-63 fw-600'>Find Every Corner of Your Campus And Your Friends Too.</div>
      <div className='fw-400 fs-19 col-10 col-md-8 mt-3'>From hidden restrooms and food joints to that one POS that actually works — our campus navigation app helps you see what Google doesn’t. <b>Made by students, for students.</b></div>
      <div>
        <button>
          <img src={playStore}/>
          <div>
            <div className='fs-11 fw-600'>Available</div>
            <div className='fs-19 fw-600'>Google Play</div>
          </div>
        </button>
      </div>
      <div></div>
    </div>
  )
}

export default Hero