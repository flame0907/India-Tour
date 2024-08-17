import React ,{useEffect}from 'react'

import img1 from '../../Assests/karnataka/bang.jpg' 
import img2 from '../../Assests/karnataka/chito.webp' 
import img3 from '../../Assests/karnataka/bidar.webp' 

import Aos from 'aos';
import 'aos/dist/aos.css'


import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';

const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Banglore Fort',
    location:'Banglore',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Originally built in 1537 by Kempe Gowda I, the founder of Bengaluru, as a mud fort, it was later converted into a stone fort by Hyder Ali, the ruler of Mysore, in the late 18th century. The fort played a significant role during the Anglo-Mysore Wars between the British and the Kingdom of Mysore. Although much of the fort has been dismantled, the remnants, including the Delhi Gate and some bastions, still stand as a testament to its historical significance.The Ganapathi Temple inside the fort is a major attraction.'

  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Chitradurga Fort',
    location:'Chitradurga ',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Chitradurga Fort, also known as the "Fort of Seven Rounds" or "Kallina Kote" (Stone Fortress), was built between the 10th and 18th centuries by various dynasties, including the Rashtrakutas, Chalukyas, and Nayakas of Chitradurga. The fort was later expanded by Hyder Ali and Tipu Sultan. The fort is famous for its seven concentric walls, strategically placed to provide defense. It also played a key role during the wars against the British.The fort is renowned for its massive stone structures, secret passages, water reservoirs, and temples.'

   },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Bidar Fort',
    location:'Bidar ',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Bidar Fort was constructed in the 15th century by Sultan Ahmad Shah Bahmani of the Bahmani Sultanate when he shifted his capital from Gulbarga to Bidar. The fort is a prime example of Persian influence on Deccan architecture. It later became a part of the Bijapur Sultanate and then the Mughal Empire. The fort served as a stronghold for the Nizams of Hyderabad until it became part of the Indian Union.The fort complex includes several palaces, mosques, gardens, and a unique underground structure called the "Tarkash Mahal." '

  },

 
]

const Karnataka = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className="main container section">
    <div className="secTitle">
      <h3 data-aos="fade-right"
      className="title">
       Royal-Karnataka
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

export default Karnataka
