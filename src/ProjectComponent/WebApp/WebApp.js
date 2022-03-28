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
          <div className="Content__Hover">
            <div className="Content__Header">
              <p>Web Application</p>
            </div>
            <div className="Content__detail">
              <p>Build Client-Side Web Apps, Responsive, Real-time Data, and Real-time rendering chart, that working with SQL Server, and APIs</p>
              <p>For example,
                <li>Projects working with SQL to store and retrieve data.</li>
                <li>Web Application interact with device hardware (EV Charger). </li>
                <li>Web Application working with Google Maps API, Google Sheets.</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default WebApp;