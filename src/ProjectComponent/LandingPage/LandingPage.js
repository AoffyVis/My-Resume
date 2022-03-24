import './LandingPage.css';
import HTML from "../../assets/icon/htmlLogo.png";
import CSS from "../../assets/icon/CssLogo.png";
import JS from "../../assets/icon/JSLogo.png";

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
        </div>
    </div>
    );
  }
  
export default LandingPage;