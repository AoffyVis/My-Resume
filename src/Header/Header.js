import './Header.css';
import Typewriter from 'typewriter-effect';
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="App-header" id='header'>
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
        {/* <h4> I'm Front End Developer</h4> */}
        {/* <a
        className="App-link"
        href="#aboutMe"
        >
        <span className="downArrow">⮋</span>
        </a> */}
        <Link to="aboutMe" spy={true} smooth={true} offset={100} duration={500}><span className="downArrow">⮋</span></Link>
    </div>
  );
}

export default Header;
