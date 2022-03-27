import './About.css';
import CV from '../assets/CV/Resume-JirawatKaewmanee.pdf';
import TimeIcon from '../assets/icon/chronometer.png';
import PCIcon from '../assets/icon/pc.png';
import SchoolIcon from '../assets/icon/education.png';
import Mahidol from '../assets/icon/logo-MU_Color.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {

  useEffect(() => {
    Aos.init({ 
        duration: 1500,
        disable: function () {
            var maxWidth = 1024;
            return window.innerWidth < maxWidth;
        }
    });
  }, []);

  return (
    <div className="about" id='about'>
      <div className='about__me__section'>
        
        <div className="about__me" data-aos="zoom-in" data-aos-offset="200" data-aos-anchor-placement="top-bottom">
          <div className='about_me_content'>
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
          <div className='portfolio__item' data-aos="fade-left" data-aos-offset="0" data-aos-anchor-placement="top-bottom">
            <div className='portfolio__item__front'>
              <div className='portfolio__item__header'>
                <img src={TimeIcon} className='icon' alt='icon'/>
                <p>Experience</p>
              </div>
              <div className='portfolio__item__content'>
                <p>3+ Years : IT-related field</p>
                <p>5+ Years : Business Management</p>
              </div>
            </div>
            <div className='portfolio__item__back'>
              <p>2+ years : Front End Developer</p>
              <p>5 years : Run my own family business</p>
              <p>1 year : IT Help Desk</p>
            </div>
          </div>
          <div className='portfolio__item' data-aos="fade-left" data-aos-offset="50" data-aos-anchor-placement="center-bottom">
            <div className='portfolio__item__front'>
              <div className='portfolio__item__header'>
                <img src={PCIcon} className='icon' alt='icon'/>
                <p>10+ Projects</p>
              </div>
              <div className='portfolio__item__content'>
                <p>Web Application</p>
                <p>Landing Page</p>
                <p>Web Dashboard</p>
                <p>UX/UI Design</p>
              </div>
            </div>
            <div className='portfolio__item__back'>
              <p>Responsive</p>
              <p>Customizable</p>
              <p>Consistent</p>
              <p>Design as imagined</p>
            </div>
          </div>
          <div className='portfolio__item' data-aos="fade-left" data-aos-offset="60" data-aos-anchor-placement="bottom-bottom">
            <div className='portfolio__item__front'>
              <div className='portfolio__item__header'>
                <img src={SchoolIcon} className='icon' alt='icon'/>
                <p>Graduated</p>
              </div>
              <div className='portfolio__item__content'>
                <p>B.Sc Mahidol University, 2012</p>
              </div>
            </div>
            <div className='portfolio__item__back'>
              <img src={Mahidol} alt='Mahidol'/>
              <p>Mahidol University</p>
              <p>Faculty of ICT</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
