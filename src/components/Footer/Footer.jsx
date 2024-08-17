import React from 'react'
import './footer.scss';
import video2 from '../../Assests/video2.mp4'
import { FiChevronRight,  FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { FaFortAwesome } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
       
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div  data-aos="fade-up" className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Explore with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up"
            type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up"
            className="btn flex" type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

      <div className="footerCard flex">
       <div className="footerIntro flex">
        <div className="logoDiv">
          <a href="#" className='logo flex'>
          <h1><FaFortAwesome className="icon" />
           Royal-India </h1>
          </a>
        </div>

        <div data-aos="fade-up"
        className="footerParagraph">
          India, a vast and diverse country located in South Asia, is renowned for its rich cultural heritage, historical significance, and geographical variety. It is the world's most populous democracy and is characterized by its incredible diversity in languages, religions, and traditions. We want to help people learn more about India and make India more influential in the world. The whole world should be aware of India. Royal India's main goal is to share knowledge about India on an international level. 

        </div>

        <div 
        data-aos="fade-up"
        className="footerSocials flex">
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <AiFillInstagram className='icon'/>
          <FaTripadvisor className='icon'/>
        </div>
        </div>  

        <div className="footerLinks grid">
          {/* group-one */}
          <div data-aos="fade-up"
          data-aos-duration="4000"
          className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Services
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Insurance
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Agency
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Tourism
            </li>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Payment
            </li>
          </div>
          {/* group-two */}
          <div data-aos="fade-up"
          data-aos-duration="4000"
          className="linkGroup">
            <span className="groupTitle">
              PARTNERS
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Bookings
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Rentcars
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              HotelWorld
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Trivago
            </li>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              TripAdvisor
            </li>
          </div>

          {/* group-three */}
          <div data-aos="fade-up"
          data-aos-duration="5000"
          className="linkGroup">
            <span className="groupTitle">
              LAST MINUTE
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
             Kerala
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
             Gujarat
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Goa
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
             Rajsthan
            </li>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Kokan
            </li>
          </div>
        </div>

        <div className="footerDiv flex">
        <small>Lets explore India</small>
      
        </div>
      </div>
      </div>
    </section>
  )
}

export default Footer
