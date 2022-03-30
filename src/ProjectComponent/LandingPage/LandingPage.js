import './LandingPage.css';
import HTML from "../../assets/icon/htmlLogo.png";
import CSS from "../../assets/icon/CssLogo.png";
import JS from "../../assets/icon/JSLogo.png";
import { FaPlus } from "react-icons/fa";

function LandingPage() {
    return (
      <div className="LandingPageContainer">
        <div className='LandingPage'>
          <img src="/LandingPage/LandingPage.png" alt="LandingPage"/>
          <div className='LandingPageDetail'>
            <img src={HTML} alt="html"/>
            <img src={CSS} alt="css"/>
            <img src={JS} alt="js"/>
          </div>
          <div className="Content__Hover">
            <div className="Content__Header">
              <p>Landing Page</p>
            </div>
            <div className="Content__detail">
              <p>Build Single Page Website, Responsive, Animation, Motion, and designed to increase customer's conversion rate and improve usability.</p>
            </div>
          </div>
          <div className="icon__corner">
            <FaPlus className="plus__icon"/>
          </div>
        </div>
    </div>
    );
  }
  
export default LandingPage;