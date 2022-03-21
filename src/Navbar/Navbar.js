import "./Navbar.css";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          {/* <a href="#header">
            <CodeIcon /> Jirawat K.
          </a> */}
          <Link to="header" spy={true} smooth={true} offset={100} duration={500}><CodeIcon /> Jirawat K.</Link>
        </div>
        <div id={click ? "mainListDiv" : "mobile-menu"} className="main_list">
          <ul className="navlinks">
            <li className="link">
              {/* <a href="#header">Home</a> */}
              <Link to="header" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            </li>
            <li className="link">
              {/* <a href="#aboutMe">About</a> */}
              <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
            </li>
            <li className="link">
              {/* <a href="#skillsContainer">Skills</a> */}
              <Link to="skillsContainer" spy={true} smooth={true} offset={-150} duration={500}>Skills</Link>
            </li>
            <li className="link">
              {/* <a href="#projectContainer">Projects</a> */}
              <Link to="projectContainer" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
            </li>
            <li className="link">
              {/* <a href="#FooterContainer">Contact</a> */}
              <Link to="FooterContainer" spy={true} smooth={true} offset={100} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mobile-menu">
          <div onClick={() => setClick(!click)}>
            {!click ? <MenuIcon /> : <CloseIcon />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
