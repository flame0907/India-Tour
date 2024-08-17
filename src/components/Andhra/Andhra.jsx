import React ,{useEffect}from 'react'

import img1 from '../../Assests/andhra/golkonda.webp' 
import img2 from '../../Assests/andhra/kondapalli.jpg' 
import img3 from '../../Assests/andhra/gandikota.jpg' 
 
import Aos from 'aos';
import 'aos/dist/aos.css'


import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';

const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Golkonda Fort',
    location:'Hyderbad',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Originally a mud fort, Golkonda was constructed in the 12th century by the Kakatiya dynasty. It was later fortified by the Qutb Shahi dynasty in the 16th century and became a thriving center for diamond trade, famous for the Koh-i-Noor and Hope diamonds. The fort was the seat of power for the Qutb Shahi rulers before falling to Mughal Emperor Aurangzeb in 1687.The fort is renowned for its advanced acoustics, grand architecture'

  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Kondapalli Fort',
    location:'Kondapalli ',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Built in the 14th century by Prolaya Vema Reddy of the Reddy dynasty, Kondapalli Fort served as a military fortification. It later came under the control of the Gajapatis of Odisha and then the Qutb Shahis. The British East India Company used the fort as a military training base in the 18th century. The fort is also known for the famous Kondapalli toys, which are handcrafted wooden toys made by local artisans. '

   },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Gandikota Fort',
    location:'Kadapa',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Gandikota Fort was constructed in the 13th century by the Pemmasani Nayakas, who served as feudatories of the Vijayanagara Empire. The fort is strategically located on the banks of the Penna River and is surrounded by natural gorges, often referred to as the "Grand Canyon of India." The fort was later taken over by the Qutb Shahis and the Marathas.The Ranganatha Swamy Temple and Jamia Masjid are notable structures within the fort. '

  },

 
]

const Andhra = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className="main container section">
    <div className="secTitle">
      <h3 data-aos="fade-right"
      className="title">
        Royal-AndhraPradesh
      </h3>
    </div>

    <div className="secContent grid">
    {
      Data.map(({id,imgSrc, destTitle, location, grade, fees,description})=>{
        return(
          <div key={id}
          data-aos="fade-up"
          className="singleDestination">

            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>
           
           <div className="cardInfo">
            <h4 className="destTitle">{destTitle}</h4>
            <span className="continent flex">
              <HiOutlineLocationMarker className='icon'/>
              <span className="name">{location}</span>
            </span>

            <div className="fees flex">
              <div className="grade">
                <span>{grade}<small>+1</small></span>
              </div>

              <div className="price">
                <h5>{fees}</h5>
              </div>
            </div>

            <div className="desc">
              <p>{description}</p>
            </div>

            <button className='btn flex'>
              DETAILS
              <HiOutlineClipboardCheck className='icon'/>
            </button>
           </div>

          </div>
        )
      })
    }
    </div>
   </section>
  )
}

export default Andhra
