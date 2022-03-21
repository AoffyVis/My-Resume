import './About.css';
import ProfileImage from '../assets/profile-pic-1.jpg';
import CV from '../assets/CV/Resume-JirawatKaewmanee.pdf';

function About() {
  return (
    <div className="about" id='about'>
      <div className='about__me'>
        <div className='about_me_IMG'>
          <img src={ProfileImage} className="img-me" alt="about_me_IMG" />
        </div>
      </div>
      
      <div className="myDesc">
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
  );
}

export default About;
