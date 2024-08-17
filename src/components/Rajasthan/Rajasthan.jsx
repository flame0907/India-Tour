import React ,{useEffect}from 'react'

import img1 from '../../Assests/Raj/mehar.webp' 
import img2 from '../../Assests/Raj/amber.webp' 
import img3 from '../../Assests/Raj/chitoh.webp' 
import Aos from 'aos';
import 'aos/dist/aos.css'


import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';

const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Mehrangarh',
    location:'Jodhpur',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Built in 1459 by Rao Jodha, the founder of Jodhpur, Mehrangarh Fort is one of the largest and most impressive forts in India. Perched on a 410-foot-high hill, the fort is enclosed by massive walls and offers breathtaking views of the blue city of Jodhpur. The fort houses several palaces known for their intricate carvings and expansive courtyards, including the Moti Mahal (Pearl Palace) and Phool Mahal (Flower Palace). Mehrangarh also has a museum that displays a rich collection of artifacts from Rajasthans royal past, including weapons, paintings, and textiles.The Taj Mahal is an iconic white marble mausoleum located in Agra, India. '

  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Amber Fort',
    location:'Jaipur',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:' Also known as Amer Fort, Amber Fort was built in 1592 by Raja Man Singh and later expanded by his successors. This majestic fort is known for its artistic Hindu-style elements, including its large ramparts, series of gates, and cobbled paths. The fort overlooks Maota Lake, which adds to its picturesque beauty. Key attractions within the fort include the Sheesh Mahal (Mirror Palace), Diwan-i-Aam (Hall of Public Audience), and Diwan-i-Khas (Hall of Private Audience).The forts strategic location and robust construction made it a key military outpost, but it is also known for its artistic and architectural brilliance. '

   },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Chittorgarh',
    location:'Chittorgarh',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Chittorgarh Fort is one of the largest forts in India and is known for its heroic history of Rajput bravery, sacrifice, and honor. The fort covers 700 acres and was the capital of Mewar. It was initially built by the Maurya dynasty in the 7th century and was later developed by successive rulers. The fort has witnessed many sieges and battles, particularly against the Mughal and Sultanate forces. Some of the most notable structures within the fort are the Vijay Stambha (Tower of Victory), Kirti Stambha (Tower of Fame), Rana Kumbha Palace, and the Padmini Palace. The fort is also a UNESCO World Heritage Site'

  },

  
]

const Rajasthan = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className="main container section">
    <div className="secTitle">
      <h3 data-aos="fade-right"
      className="title">
        Royal-Rajasthan
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

export default Rajasthan
