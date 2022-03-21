import './Header.css';
import Typewriter from 'typewriter-effect';
import { Link } from "react-scroll";
import MyImage from '../assets/me.jpg';

function Header() {
  return (
    <div className="App-header" id='header'>
      <div className='header__detail'>
        <p>Hello, I'm</p>
        <h2>
          Jirawat Kaewmanee
        </h2>
        <div className="typeWritter">
          <Typewriter
            options={{
              strings: ["<strong>I'm Front End Developer</strong>"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Link to="about" spy={true} smooth={true} offset={-20} duration={500}><span className="downArrow">⮋</span></Link>
      </div>
      <div className='header__img'>
        <div className='header__img__box'>
          <img src={MyImage} className="my__image" alt="about_me_IMG" />
        </div>
      </div>
    </div>
  );
}

export default Header;
