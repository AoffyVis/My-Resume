import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FormComponent from './FormComponent/FormComponent';
import { Link } from "react-scroll";
import { useState } from 'react'


function Footer() {

  const [contactLists, setContactLists] = useState([])

  const onAddNewContact = (newContact) => {
    setContactLists((prevContactData) => {
      return [newContact, ...prevContactData]
    })

    // console.log("This data from FormComponent = " , newContact)
  }

  return (
    
    <div className='FooterContainer' id="FooterContainer">
        <div className='footerTitle'>
            <h2>Plaese,don't hesitate to contact me</h2>
        </div>
        <div className="gridContact">
            <div className="contact">
                <h2>Contact me</h2>
                <FormComponent onAddContact={onAddNewContact}/>
            </div>
            <div className="contact">
                <h2 id="snsContact">
                    <a href="https://www.facebook.com/jirawat.kaewmanee/"><FacebookIcon className='facebookIcon'/></a>
                    <a href="https://twitter.com/AoffyGaze"><TwitterIcon className='twitterIcon'/></a>
                    <a href="https://www.instagram.com/aof_.jirawat/"><InstagramIcon className='igIcon'/></a>
                </h2>
            </div>
            <div className="contact">
                <h2>Quick Navigation</h2>
                <div className="quickNav">
                    <Link to="header" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                    <Link to="skillsContainer" spy={true} smooth={true} offset={-150} duration={500}>Skills</Link>
                    <Link to="projectContainer" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
                    <Link to="FooterContainer" spy={true} smooth={true} offset={100} duration={500}>Contact</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
