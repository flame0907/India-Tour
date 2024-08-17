import React ,{useEffect}from 'react'

import img1 from '../../Assests/maha/Riagad.jpg' 
import img2 from '../../Assests/maha/sinhagad.webp' 
import img3 from '../../Assests/maha/pratapgad.webp' 
import img4 from '../../Assests/maha/Rajgad.jpg' 
import img5 from '../../Assests/maha/lohgad.jpg' 
import img6 from '../../Assests/maha/shivneri.jpg' 
import img7 from '../../Assests/maha/torana.jpg' 
import img8 from '../../Assests/maha/sindhudurg.webp' 
import img9 from '../../Assests/maha/vijaydurg.jpg' 
import Aos from 'aos';
import 'aos/dist/aos.css'


import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';

const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Raigad',
    location:'Raigad',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Raigad Fort was the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj. He was crowned here in 1674. It features the remains of palaces, public offices, and the famous "Takmak Tok," a cliff used for executing criminals.'

  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Sinhagad',
    location:'Pune',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Originally known as Kondhana, Sinhagad Fort is famous for the Battle of Sinhagad in 1670, where Shivajis general, Tanaji Malusare, played a pivotal role. After his death in the battle, Shivaji remarked, "Gad ala, pan Sinha gela" . '

   },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Pratapgad ',
    location:'Satara',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:' Built in 1656 by Shivaji Maharaj, Pratapgad is best known for the Battle of Pratapgad in 1659, where Shivaji defeated the Bijapur general, Afzal Khan. The fort has a statue of Shivaji Maharaj and offers panoramic views of the surrounding valleys.'

  },

  {
    id:4,
    imgSrc:img4,
    destTitle:'Rajgad',
    location:'Pune',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Rajgad was the first capital of the Maratha Empire and remained the residence of Shivaji Maharaj for over 25 years. The fort is known for its unique architecture, which includes the "Padmavati Machi," "Sanjeevani Machi," and "Suvela Machi," offering strong defensive positions and spectacular views.'

  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'Lohagad',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Lohagad, meaning "Iron Fort," was a key fort in Shivaji Maharajs empire. It was used to house his treasury. The fort is also known for its distinctive "Vinchu Kata" or scorpion tail-like structure. It has changed hands several times between the Marathas and the Mughals.'

  },

  {
    id:6,
    imgSrc:img6,
    destTitle:'Shivneri',
    location:'Pune',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Shivneri Fort is the birthplace of Chhatrapati Shivaji Maharaj, born here on February 19, 1630. The fort has a large stone structure and several water cisterns, making it self-sufficient during sieges. The fort also features a temple dedicated to Goddess Shivai, after whom Shivaji was named.'

  },

  {
    id:7,
    imgSrc:img7,
    destTitle:'Torana',
    location:'Pune',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Torna Fort was the first fort captured by Shivaji Maharaj in 1643, marking the beginning of his empire-building efforts. The fort is known for its vast size and the beautiful "Bini Darwaja" and "Kothi Darwaja" gates.A Menghai Devi temple is situated near the entrance of the fort.'

  },

  {
    id:8,
    imgSrc:img8,
    destTitle:'Sindhudurg',
    location:'Sindhudurg',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Built by Shivaji Maharaj in 1664–1667, Sindhudurg Fort is a sea fort located on an islet in the Arabian Sea. The fort was strategically constructed to protect the coastline from enemy ships. It has several hidden passageways and is known for its strong fortifications.'

  },

  {
    id:9,
    imgSrc:img9,
    destTitle:'Vijaydurg',
    location:'Sindhudurg',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Vijaydurg Fort was one of the strongest marine forts on the west coast of India. Built by the Yadavas and later strengthened by Shivaji Maharaj, it was known for its invincibility. The fort has a unique triple-layer fortification system and an underwater tunnel that connected it to the mainland.'

  }
]

const Maharashtra = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className="main container section">
    <div className="secTitle">
      <h3 data-aos="fade-right"
      className="title">
        Royal-Maharashtra
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

export default Maharashtra
