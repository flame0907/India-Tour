import React ,{useEffect}from 'react'

import img1 from '../../Assests/madhya/gwaliar.webp' 
import img2 from '../../Assests/madhya/mandu.webp' 
import img3 from '../../Assests/madhya/asi.webp' 

import Aos from 'aos';
import 'aos/dist/aos.css'


import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';

const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Gwalior Fort',
    location:'Gwalior ',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:' Gwalior Fort is one of the most historically significant forts in India. Its origins date back to the 6th century, although it gained prominence under the rule of Tomar ruler Raja Man Singh Tomar in the 15th century. The fort has witnessed the reigns of several dynasties, including the Mughals, Marathas, and the British. The fort is known for its massive sandstone walls and impressive architecture. Within its premises lies the Teli Ka Mandir, dedicated to Vishnu, and the Man Singh Palace, known for its intricate blue tile work. The fort also houses the Gurjari Mahal, a palace built by Man Singh Tomar for his queen, Mrignayani, which now serves as an archaeological museum.'

  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Mandu Fort',
    location:'Dhar',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Mandu, also known as Mandavgarh, was a prominent city during the reign of the Parmar dynasty. The fort complex in Mandu is famous for its Afghan architecture and is spread over a large area. Mandu became the capital of the Malwa Sultanate under the rule of Hoshang Shah in the early 15th century. The fort is home to several remarkable structures, including the Jahaz Mahal (Ship Palace), Rani Roopmati Pavilion, and Hoshang Shah’s Tomb, which is said to have inspired the design of the Taj Mahal. Mandu Forts scenic beauty and the romantic legends of Rani Roopmati and Baz Bahadur add to its allure.Today, Mandu is recognized as a site of immense historical and architectural value. '

   },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Asirgarh Fort',
    location:'Burhanpur',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Asirgarh Fort, often referred to as the "Key to the Deccan," is strategically located in the Satpura Range and has served as a crucial stronghold in controlling access to southern India. The fort was originally built by the Ahirs, but it gained prominence under the Faruqi dynasty in the 15th century. It was later captured by the Mughal emperor Akbar in 1600, marking a significant point in the Mughal expansion into the Deccan. The fort is divided into three parts: Asirgarh, Kamargarh, and Malaygarh, each with its own distinct features. The forts formidable structure and its historical significance in the power struggles of medieval India make it a noteworthy site.'

  },

]

const Madhya = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className="main container section">
    <div className="secTitle">
      <h3 data-aos="fade-right"
      className="title">
         Royal-Madhyapradesh
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

export default Madhya
