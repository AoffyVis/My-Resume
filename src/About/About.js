import './About.css';
import ProfileImage from '../assets/profile-pic-1.jpg';
import CV from '../assets/CV/Resume-JirawatKaewmanee.pdf';
import TimeIcon from '../assets/icon/chronometer.png';
import PCIcon from '../assets/icon/pc.png';
import SchoolIcon from '../assets/icon/education.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {

  useEffect(() => {
    Aos.init({ 
        duration: 1500,
        disable: function () {
            var maxWidth = 600;
            return window.innerWidth < maxWidth;
        }
    });
  }, []);

  return (
    <div className="about" id='about'>
      <div className='about__me__section'>
        <div className='about__me'>
          <div className='about_me_IMG'>
            <img src={ProfileImage} className="img-me" alt="about_me_IMG" />
          </div>
        </div>
        
        <div className="myDesc" data-aos="zoom-in" data-aos-offset="200" data-aos-anchor-placement="top-bottom">
          <h2>
            What does I do?
          </h2>
          <p>I'm currently working Front-end Developer.
              I obsess over the minor details in HTML/CSS/JAVASCRIPT and am passionate in getting computers to more
              effectively work
              on your side by freeing you of the burdens of carrying out repetitive tasks through automative
              processes. <br /><br />
              For the front-end I usually work with Javascript, either standalone or including popular frameworks like
              ReactJS, EJS. I also make the web pretty by using CSS preprocessors and, any of their
              friends.
              <br /><br />
              For the back-end I also work with Javascript (NodeJS, ExpressJS). But, of course,
              I also have knowledge of computer programming languages such as PHP, MSSQL, and hardware engineering
          </p>
          <div className='btn'>
            <a href={CV} download className='btn-primary'> Download CV</a>
          </div>
        </div>
      </div>

      <div className='about__portfolio__section'>
        <div className='portfolio__item' data-aos="fade-up" data-aos-delay="0" data-aos-offset="0" data-aos-anchor-placement="top-bottom">
          <img src={TimeIcon} className='icon' alt='icon'/>
          <p>Experience</p>
          <span>2+ Years Working</span>
        </div>
        <div className='portfolio__item' data-aos="fade-up" data-aos-delay="50" data-aos-offset="25" data-aos-anchor-placement="center-bottom">
          <img src={PCIcon} className='icon' alt='icon'/>
          <p>Projects</p>
          <span>10+ Project</span>
        </div>
        <div className='portfolio__item' data-aos="fade-up" data-aos-delay="50" data-aos-offset="50" data-aos-anchor-placement="bottom-bottom">
          <img src={SchoolIcon} className='icon' alt='icon'/>
          <p>Graduated</p>
          <span>B.Sc Mahidol University</span>
        </div>
      </div>
    </div>
  );
}

export default About;
