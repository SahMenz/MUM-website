import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import mumOnIos from "../../assets/images/mumOnIos.png";
import quotation from "../../assets/images/quotation.png";
import testimonial1 from "../../assets/images/testimonial1.png";
import testimonial2 from "../../assets/images/testimonial2.png";
import testimonial3 from "../../assets/images/testimonial3.png";

function HowItWorks() {
  return (
    <div className="spacing-50">
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #fa0808; /* Match the red from the first step */
          border-radius: 4px;
        }
        /* Style for Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #fa0808 #f1f1f1;
        }
      `}</style>
      <div className="text-center my-4">
        <div className="fs-32 fw-600">How It Works</div>
        <div className="fs-16 fw-400 mt-3">
          Simple steps to get you started — from download to discovery in
          minutes.
        </div>
      </div>
      <div>
        <div className="d-flex align-items-center justify-content-between flex-column gap-4 flex-md-row">
          <div>
            <img src={mumOnIos} style={{ width: "100%", maxWidth: "600px" }} />
          </div>
          <div style={{ maxWidth: "589px", width: "100%" }}>
            <div className="gap-4 w-100 d-flex justify-content-between">
              <div className="fs-19 fw-400 txt-fa">Step</div>
              <div className="d-flex flex-column align-items-center ">
                <div
                  className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5"
                  style={{
                    borderRadius: "100%",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#FA0808",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    width: "0px",
                    marginTop: "12px",
                    height: "90px",
                    border: "1px solid #FA0808",
                    linearGradient: "90deg, #FA0808 52.11%, #FFFBFB 100%",
                  }}
                ></div>
              </div>
              <div style={{ maxWidth: "425px" }}>
                <div className="fs-23 fw-500">Search or Pick a Location</div>
                <div className="fs-16 fw-400 mt-4">
                  From restrooms to lecture halls — plus food joints, shortcuts,
                  and hidden gems you didn’t know existed.
                </div>
              </div>
            </div>

            <div className="gap-4 w-100 d-flex justify-content-between mt-3">
              <div className="fs-19 fw-400 txt-73">Step</div>
              <div className="d-flex flex-column align-items-center ">
                <div
                  className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5"
                  style={{
                    borderRadius: "100%",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#737373",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    width: "0px",
                    marginTop: "12px",
                    height: "90px",
                    border: "1px solid #737373",
                  }}
                ></div>
              </div>
              <div style={{ maxWidth: "425px" }}>
                <div className="fs-23 fw-500">See Real Photos</div>
                <div className="fs-16 fw-400 mt-4">
                  Recognize the place before you arrive — no more
                  second-guessing or awkward wrong turns.
                </div>
              </div>
            </div>

            <div className="gap-4 w-100 d-flex justify-content-between mt-3">
              <div className="fs-19 fw-400 txt-73">Step</div>
              <div className="d-flex flex-column align-items-center ">
                <div
                  className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5"
                  style={{
                    borderRadius: "100%",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#737373",
                  }}
                >
                  3
                </div>
                <div
                  style={{
                    width: "0px",
                    marginTop: "12px",
                    height: "90px",
                    border: "1px solid #737373",
                  }}
                ></div>
              </div>
              <div style={{ maxWidth: "425px" }}>
                <div className="fs-23 fw-500">Follow Directions</div>
                <div className="fs-16 fw-400 mt-4">
                  Step-by-step to your destination — with clear directions that
                  keep you on track.
                </div>
              </div>
            </div>

            <div className="gap-4 w-100 d-flex justify-content-between mt-3">
              <div className="fs-19 fw-400 txt-73">Step</div>
              <div className="d-flex flex-column align-items-center ">
                <div
                  className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5"
                  style={{
                    borderRadius: "100%",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#737373",
                  }}
                >
                  4
                </div>
              </div>
              <div style={{ maxWidth: "425px" }}>
                <div className="fs-23 fw-500">Arrive Without Stress</div>
                <div className="fs-16 fw-400 mt-4">
                  Reach every destination with ease — know the way before you
                  even leave, Or ping your friends to meet up.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="fs-32 fw-600" style={{ maxWidth: "438px" }}>
              What Students Are Saying — Real Voices. Real Experiences.
            </div>
            <div className="gap-3 d-flex ">
              <div
                className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5 cursor"
                style={{
                  borderRadius: "100%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#737373",
                }}
              >
                <BsArrowLeft size={25} />
              </div>
              <div
                className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5 cursor"
                style={{
                  borderRadius: "100%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#FA0808",
                }}
              >
                <BsArrowRight size={25} />
              </div>
            </div>
          </div>
          <div className="my-5 d-flex gap-3 custom-scrollbar" style={{ overflowX: "auto", flexWrap: "nowrap" }}>
            <div
              className="d-flex flex-shrink-0"
              style={{
                maxWidth: "487px",
                borderRadius: "15px",
                background: "#FFFBFB",
                padding: "30px",
              }}
            >
              <div>
                <img src={quotation} />
              </div>
              <div className="align-self-end ms-2">
                <div style={{ height: "50px" }}></div>
                <div className="fs-16 fw-500">
                  I found a POS right behind my faculty I never knew was there —
                  no more running to the other side of campus for cash.
                </div>
                <div className="d-flex mt-4">
                  <img src={testimonial1} />
                  <div className="ms-3">
                    <div className="fs-13 fw-500">Alicia James</div>
                    <div className="fw-400 fs-11">200 level student</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex flex-shrink-0"
              style={{
                maxWidth: "487px",
                borderRadius: "15px",
                background: "#FFFBFB",
                padding: "30px",
              }}
            >
              <div>
                <img src={quotation} />
              </div>
              <div className="align-self-end ms-2">
                <div style={{ height: "50px" }}></div>
                <div className="fs-16 fw-500">
                  I found a POS right behind my faculty I never knew was there —
                  no more running to the other side of campus for cash.
                </div>
                <div className="d-flex mt-4">
                  <img src={testimonial2} />
                  <div className="ms-3">
                    <div className="fs-13 fw-500">Jude Akpan</div>
                    <div className="fw-400 fs-11">200 level student</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex flex-shrink-0"
              style={{
                maxWidth: "487px",
                borderRadius: "15px",
                background: "#FFFBFB",
                padding: "30px",
              }}
            >
              <div>
                <img src={quotation} />
              </div>
              <div className="align-self-end ms-2">
                <div style={{ height: "50px" }}></div>
                <div className="fs-16 fw-500">
                  Freshers need this app. I wish I had it last year — finding
                  classes and hangout spots would’ve been so much easier.
                </div>
                <div className="d-flex mt-4">
                  <img src={testimonial3} />
                  <div className="ms-3">
                    <div className="fs-13 fw-500">Jude Akpan</div>
                    <div className="fw-400 fs-11">200 level student</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex flex-shrink-0"
              style={{
                maxWidth: "487px",
                borderRadius: "15px",
                background: "#FFFBFB",
                padding: "30px",
              }}
            >
              <div>
                <img src={quotation} />
              </div>
              <div className="align-self-end ms-2">
                <div style={{ height: "50px" }}></div>
                <div className="fs-16 fw-500">
                  It’s easier to meet up with friends now. The ping feature is
                  mad — no more endless calls or ‘where are you?’ texts.
                </div>
                <div className="d-flex mt-4">
                  <img src={testimonial1} />
                  <div className="ms-3">
                    <div className="fs-13 fw-500">kennedy Effiong</div>
                    <div className="fw-400 fs-11">300 level student</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;







// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import mumOnIos from "../../assets/images/mumOnIos.png";
// import quotation from "../../assets/images/quotation.png";
// import testimonial1 from "../../assets/images/testimonial1.png";
// import testimonial2 from "../../assets/images/testimonial2.png";
// import testimonial3 from "../../assets/images/testimonial3.png";

// function HowItWorks() {
//   return (
//     <div className="spacing-50">
//       <div className="text-center my-4">
//         <div className="fs-32 fw-600">How It Works</div>
//         <div className="fs-16 fw-400 mt-3">
//           Simple steps to get you started — from download to discovery in
//           minutes.
//         </div>
//       </div>
//       <div>
//         <div className="d-flex align-items-center justify-content-between flex-column gap-4 flex-md-row">
//           <div>
//             <img src={mumOnIos} style={{ width: "100%", maxWidth: "600px" }} />
//           </div>
//           <div style={{ maxWidth: "589px", width: "100%" }}>
//             <div className="gap-4 w-100 d-flex justify-content-between">
//               <div className="fs-19 fw-400 txt-fa">Step</div>
//               <div className="d-flex flex-column align-items-center ">
//                 <div
//                   className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5"
//                   style={{
//                     borderRadius: "100%",
//                     width: "40px",
//                     height: "40px",
//                     backgroundColor: "#FA0808",
//                   }}
//                 >
//                   1
//                 </div>
//                 <div
//                   style={{
//                     width: "0px",
//                     marginTop: "12px",
//                     height: "90px",
//                     border: "1px solid #FA0808",
//                     linearGradient: "90deg, #FA0808 52.11%, #FFFBFB 100%",
//                   }}
//                 ></div>
//               </div>
//               <div style={{ maxWidth: "425px" }}>
//                 <div className="fs-23 fw-500">Search or Pick a Location</div>
//                 <div className="fs-16 fw-400 mt-4">
//                   From restrooms to lecture halls — plus food joints, shortcuts,
//                   and hidden gems you didn’t know existed.
//                 </div>
//               </div>
//             </div>

//             <div className="gap-4 w-100 d-flex justify-content-between mt-3">
//               <div className="fs-19 fw-400 txt-73">Step</div>
//               <div className="d-flex flex-column align-items-center ">
//                 <div
//                   className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5"
//                   style={{
//                     borderRadius: "100%",
//                     width: "40px",
//                     height: "40px",
//                     backgroundColor: "#737373",
//                   }}
//                 >
//                   2
//                 </div>
//                 <div
//                   style={{
//                     width: "0px",
//                     marginTop: "12px",
//                     height: "90px",
//                     border: "1px solid #737373",
//                   }}
//                 ></div>
//               </div>
//               <div style={{ maxWidth: "425px" }}>
//                 <div className="fs-23 fw-500">See Real Photos</div>
//                 <div className="fs-16 fw-400 mt-4">
//                   Recognize the place before you arrive — no more
//                   second-guessing or awkward wrong turns.
//                 </div>
//               </div>
//             </div>

//             <div className="gap-4 w-100 d-flex justify-content-between mt-3">
//               <div className="fs-19 fw-400 txt-73">Step</div>
//               <div className="d-flex flex-column align-items-center ">
//                 <div
//                   className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5"
//                   style={{
//                     borderRadius: "100%",
//                     width: "40px",
//                     height: "40px",
//                     backgroundColor: "#737373",
//                   }}
//                 >
//                   3
//                 </div>
//                 <div
//                   style={{
//                     width: "0px",
//                     marginTop: "12px",
//                     height: "90px",
//                     border: "1px solid #737373",
//                   }}
//                 ></div>
//               </div>
//               <div style={{ maxWidth: "425px" }}>
//                 <div className="fs-23 fw-500">Follow Directions</div>
//                 <div className="fs-16 fw-400 mt-4">
//                   Step-by-step to your destination — with clear directions that
//                   keep you on track.
//                 </div>
//               </div>
//             </div>

//             <div className="gap-4 w-100 d-flex justify-content-between mt-3">
//               <div className="fs-19 fw-400 txt-73">Step</div>
//               <div className="d-flex flex-column align-items-center ">
//                 <div
//                   className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5"
//                   style={{
//                     borderRadius: "100%",
//                     width: "40px",
//                     height: "40px",
//                     backgroundColor: "#737373",
//                   }}
//                 >
//                   4
//                 </div>
//               </div>
//               <div style={{ maxWidth: "425px" }}>
//                 <div className="fs-23 fw-500">Arrive Without Stress</div>
//                 <div className="fs-16 fw-400 mt-4">
//                   Reach every destination with ease — know the way before you
//                   even leave, Or ping your friends to meet up.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="d-flex align-items-center justify-content-between">
//             <div className="fs-32 fw-600" style={{ maxWidth: "438px" }}>
//               What Students Are Saying — Real Voices. Real Experiences.
//             </div>
//             <div className="gap-3 d-flex ">
//               <div
//                 className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5 cursor"
//                 style={{
//                   borderRadius: "100%",
//                   width: "50px",
//                   height: "50px",
//                   backgroundColor: "#737373",
//                 }}
//               >
//                 <BsArrowLeft size={25} />
//               </div>
//               <div
//                 className="fs-19 fw-400 d-flex align-items-center justify-content-center txt-f5 cursor"
//                 style={{
//                   borderRadius: "100%",
//                   width: "50px",
//                   height: "50px",
//                   backgroundColor: "#FA0808",
//                 }}
//               >
//                 <BsArrowRight size={25} />
//               </div>
//             </div>
//           </div>
//           <div className="mt-5 d-flex gap-3"> //add the scrollable feature here
//             <div
//               className="d-flex"
//               style={{
//                 maxWidth: "487px",
//                 borderRadius: "15px",
//                 background: "#FFFBFB",
//                 padding: "30px",
//               }}
//             >
//               <div>
//                 <img src={quotation} />
//               </div>
//               <div className="align-self-end ms-2">
//                 <div style={{ height: "50px" }}></div>
//                 <div className="fs-16 fw-500">
//                   I found a POS right behind my faculty I never knew was there —
//                   no more running to the other side of campus for cash.
//                 </div>
//                 <div className="d-flex mt-4">
//                   <img src={testimonial1} />
//                   <div className="ms-3">
//                     <div className="fs-13 fw-500">Alicia James</div>
//                     <div className="fw-400 fs-11">200 level student</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="d-flex"
//               style={{
//                 maxWidth: "487px",
//                 borderRadius: "15px",
//                 background: "#FFFBFB",
//                 padding: "30px",
//               }}
//             >
//               <div>
//                 <img src={quotation} />
//               </div>
//               <div className="align-self-end ms-2">
//                 <div style={{ height: "50px" }}></div>
//                 <div className="fs-16 fw-500">
//                   I found a POS right behind my faculty I never knew was there —
//                   no more running to the other side of campus for cash.
//                 </div>
//                 <div className="d-flex mt-4">
//                   <img src={testimonial2} />
//                   <div className="ms-3">
//                     <div className="fs-13 fw-500">Jude Akpan</div>
//                     <div className="fw-400 fs-11">200 level student</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="d-flex"
//               style={{
//                 maxWidth: "487px",
//                 borderRadius: "15px",
//                 background: "#FFFBFB",
//                 padding: "30px",
//               }}
//             >
//               <div>
//                 <img src={quotation} />
//               </div>
//               <div className="align-self-end ms-2">
//                 <div style={{ height: "50px" }}></div>
//                 <div className="fs-16 fw-500">
//                   Freshers need this app. I wish I had it last year — finding
//                   classes and hangout spots would’ve been so much easier.
//                 </div>
//                 <div className="d-flex mt-4">
//                   <img src={testimonial3} />
//                   <div className="ms-3">
//                     <div className="fs-13 fw-500">Jude Akpan</div>
//                     <div className="fw-400 fs-11">200 level student</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="d-flex"
//               style={{
//                 maxWidth: "487px",
//                 borderRadius: "15px",
//                 background: "#FFFBFB",
//                 padding: "30px",
//               }}
//             >
//               <div>
//                 <img src={quotation} />
//               </div>
//               <div className="align-self-end ms-2">
//                 <div style={{ height: "50px" }}></div>
//                 <div className="fs-16 fw-500">
//                   It’s easier to meet up with friends now. The ping feature is
//                   mad — no more endless calls or ‘where are you?’ texts.
//                 </div>
//                 <div className="d-flex mt-4">
//                   <img src={testimonial1} />
//                   <div className="ms-3">
//                     <div className="fs-13 fw-500">kennedy Effiong</div>
//                     <div className="fw-400 fs-11">300 level student</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HowItWorks;
