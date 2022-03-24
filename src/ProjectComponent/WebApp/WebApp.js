import './WebApp.css';
import CSS from "../../assets/icon/CssLogo.png";
import JS from "../../assets/icon/JSLogo.png";
import exJS from "../../assets/icon/expressJS.png";
import nodeJS from "../../assets/icon/nodeLogo.png";
import SQL from "../../assets/icon/sqlLogo.png";

function WebApp() {
    return (
      <div className="WebAppContainer">
        <div className='WebApp'>
          <img src="/Web-Application/AllWebApp.png" alt="WebApp"/>
          <div className='WebAppDetail'>
            <img src={exJS} alt="ejs"/>
            <img src={nodeJS} alt="node"/>
            <img src={CSS} alt="css"/>
            <img src={SQL} alt="sql"/>
            <img src={JS} alt="js"/>
          </div>
        </div>
      </div>
    );
  }
  
export default WebApp;