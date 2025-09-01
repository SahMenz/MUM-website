import footerLogoWithName from "../../assets/images/footerLogoWithName.png"

function Footer() {
  return (
    <div className='wavyBackground d-flex align-items-center  flex-column bg-fa txt-f5'>
        <div>
            <div>
                <div><img src={footerLogoWithName} /></div>
                <div></div>
                <div></div>
                <div></div>
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