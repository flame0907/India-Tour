import React ,{useEffect}from 'react'
import './main.scss';
import img1 from '../../Assests/food.webp' 
import img2 from '../../Assests/yoga.webp' 
import img3 from '../../Assests/spirtuality.webp' 
import img4 from '../../Assests/ayurveda.webp' 
import img5 from '../../Assests/languages.webp' 
import img6 from '../../Assests/dance.webp' 
import img7 from '../../Assests/diversity.jpg' 
import img8 from '../../Assests/music.webp' 
import img9 from '../../Assests/bollywood.webp' 
import Aos from 'aos';
import 'aos/dist/aos.css'


import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';

const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Food',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Indian food is a vibrant and diverse tapestry of flavors, reflecting the countrys rich cultural and regional variations. From the hearty, dairy-rich dishes of North India, such as butter chicken and naan bread, to the rice-based, coconut-infused cuisine of South India featuring dosa and sambar, each region offers a unique culinary experience. West Indian cuisine ranges from spicy seafood curries in Goa to the street food staples like pav bhaji, while East India is known for its subtle, fresh flavors with dishes like macher jhol and rasgulla. Indian street food, renowned for its bold, tangy flavors, includes popular snacks like chaat and samosas. Throughout, the use of diverse spices and herbs—such as cumin, coriander, and garam masala—creates complex and memorable dishes, making Indian cuisine a celebrated and integral part of the country’s cultural identity.'

  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Yoga',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Yoga, a profound and ancient practice originating in India, is deeply intertwined with the countrys spiritual and cultural heritage. Rooted in the Vedic traditions and mentioned in texts like the Bhagavad Gita and the Yoga Sutras of Patanjali, yoga encompasses a range of physical postures (asanas), breathing techniques (pranayama), and meditation practices aimed at achieving mental, physical, and spiritual well-being. Traditionally, yoga was taught in ashrams and gurukuls, where it was practiced as a holistic approach to life. Today, it is celebrated globally for its benefits in promoting health, flexibility, and inner peace. In India, yoga continues to thrive as both a spiritual discipline and a popular practice, with numerous schools and retreats offering various styles and teachings, from classical Hatha and Kundalini to modern Vinyasa and Ashtanga.'

   },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Spirituality',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'In India, spirituality is a deeply ingrained aspect of life, influencing its culture, traditions, and daily practices. The country is a spiritual haven with its diverse religious landscape, including Hinduism, Buddhism, Sikhism, Jainism, and Islam. Spiritual practices in India often involve rituals, meditation, and devotion, aiming to connect individuals with a higher reality or inner self. Sacred sites such as Varanasi, Rishikesh, and Bodh Gaya attract seekers from around the world, while ancient philosophies and teachings, like those of the Bhagavad Gita, the Upanishads, and the teachings of various saints and gurus, guide spiritual journeys. Festivals and ceremonies are central to spiritual life, celebrating deities, cosmic events, and spiritual milestones. This rich spiritual heritage is not only a reflection of Indias historical depth but also a living tradition that continues to shape and inspire millions.'

  },

  {
    id:4,
    imgSrc:img4,
    destTitle:'Ayurveda',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Ayurveda, an ancient system of medicine originating in India, is a holistic approach to health and wellness that emphasizes balance and harmony between the body, mind, and spirit. Rooted in ancient Vedic texts, Ayurveda focuses on maintaining health through a personalized approach that considers an individuals unique constitution (dosha) and current imbalances. It employs a range of practices, including dietary guidelines, herbal treatments, detoxification processes (panchakarma), and lifestyle recommendations to restore and maintain equilibrium. Ayurveda not only addresses physical ailments but also emphasizes mental and emotional well-being, advocating for a balanced lifestyle, mindfulness, and natural therapies. Its principles and practices continue to be relevant today, offering a complementary approach to modern medicine and contributing to global wellness trends.'

  },

  {
    id:5,
    imgSrc:img5,
    destTitle:'Languages',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'India is a linguistically diverse country with a rich tapestry of languages that reflect its cultural complexity. The Constitution of India recognizes 22 official languages under the Eighth Schedule, including Hindi and English, which are used for official and administrative purposes. Hindi, spoken predominantly in northern India, is the most widely spoken language, while English serves as an associate official language and a major medium for business and education. Each region has its own array of regional languages and dialects, such as Bengali in West Bengal, Tamil in Tamil Nadu, Telugu in Andhra Pradesh, and Punjabi in Punjab. Additionally, languages like Marathi, Gujarati, Urdu, Kannada, and Malayalam contribute to the countrys vast linguistic landscape. This multilingualism is a testament to India’s rich cultural diversity and plays a crucial role in its social and cultural identity, with languages serving as a key medium for preserving traditions, literature, and regional heritage.'

  },

  {
    id:6,
    imgSrc:img6,
    destTitle:'Dance',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Dance in India is a vibrant and integral part of its cultural heritage, with each region offering its own unique styles and traditions. Classical dance forms, such as Bharatanatyam from Tamil Nadu, Kathak from Uttar Pradesh, Kathakali from Kerala, Odissi from Odisha, Manipuri from Manipur, and Kuchipudi from Andhra Pradesh, are deeply rooted in ancient traditions and often narrate mythological stories through intricate movements, expressive gestures, and elaborate costumes. These classical styles are characterized by their specific techniques, rhythms, and symbolic expressions. In addition to classical dance, India is renowned for its folk dances, which vary widely across regions and communities. Examples include Garba and Dandiya from Gujarat, Bhangra from Punjab, and Lavani from Maharashtra. These folk dances are typically performed during festivals and celebrations and reflect local customs, traditions, and joyous expressions. '

  },

  {
    id:7,
    imgSrc:img7,
    destTitle:'Geographical Diversity',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Indias geographical diversity is remarkable, encompassing a wide range of landscapes, climates, and natural features that shape the countrys environmental and cultural richness. The northern region is dominated by the towering Himalayas, which not only provide stunning natural beauty but also influence the climate and weather patterns of the subcontinent. Moving south, the Indo-Gangetic Plain stretches across fertile river valleys, supporting  agriculture. The western part of India features the Thar Desert, characterized by arid conditions and sand dunes, while the eastern region is known for its lush forests and diverse wildlife in the Eastern Ghats and the Sundarbans mangroves. The southern tip of India is marked by the Western and Eastern Ghats, which are rich in biodiversity and home to numerous hill stations. Coastal areas along the Arabian Sea and the Bay of Bengal offer tropical climates and scenic beaches.Indias geographical diversity not only contributes to its varied natural beauty but also plays a  role in its climate'

  },

  {
    id:8,
    imgSrc:img8,
    destTitle:'Music',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Music in India is a deeply ingrained part of its cultural heritage, characterized by a rich variety of traditional and contemporary forms that span classical, folk, and popular genres. Indian classical music is divided into two main traditions: Hindustani, prevalent in the north, and Carnatic, dominant in the south. Hindustani music is known for its intricate ragas and improvisational elements, while Carnatic music emphasizes complex rhythms and devotional themes. Both traditions include vocal and instrumental performances and are performed in various settings from temples to concert halls. In addition to classical music, India boasts a diverse array of folk traditions, each reflecting regional cultures and celebrations. Popular music in India is heavily influenced by Bollywood, contributing to a dynamic and evolving musical landscape. Contemporary genres, including pop, rock, and fusion, continue to thrive, often incorporating traditional elements to create unique and innovative sounds.'

  },

  {
    id:9,
    imgSrc:img9,
    destTitle:'Bollywood',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Bollywood, the informal term for the Hindi-language film industry based in Mumbai, India, is a dynamic and influential force in global cinema. Known for its vibrant and colorful films, Bollywood blends dramatic storytelling with elaborate musical sequences, intricate dance numbers, and melodious soundtracks. Since its emergence in the early 20th century, Bollywood has evolved into a major entertainment powerhouse, producing a significant number of films annually that cater to diverse audiences. The industry is renowned for its star-studded cast, engaging narratives, and fusion of various musical genres, often reflecting contemporary social issues and romantic themes. Bollywood films are characterized by their larger-than-life production values, which include grand sets, elaborate costumes, and energetic choreography. The global appeal of Bollywood has grown significantly, with its movies reaching audiences far beyond India and influencing film industries worldwide. '

  }
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className="main container section">
    <div className="secTitle">
      <h3 data-aos="fade-right"
      className="title">
       About India
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

export default Main
