import './Dashboard.css';
import CSS from "../../assets/icon/CssLogo.png";
import JS from "../../assets/icon/JSLogo.png";
import exJS from "../../assets/icon/expressJS.png";
import nodeJS from "../../assets/icon/nodeLogo.png";
import SQL from "../../assets/icon/sqlLogo.png";
import chartJS from "../../assets/icon/chartJS.png";
import { FaPlus } from "react-icons/fa";


function Dashboard() {
    return (
      <div className="DashboardContainer">
        <div className='Dashboard'>
          <img src="/Dashboard/Dashboard.png" alt="Dashboard"/>
          <div className='DashboardDetail'>
            <img src={exJS} alt="ejs"/>
            <img src={nodeJS} alt="node"/>
            <img src={CSS} alt="css"/>
            <img src={SQL} alt="sql"/>
            <img src={JS} alt="JS"/>
            <img src={chartJS} alt="chartJS"/>
          </div>
          <div className="Content__Hover">
            <div className="Content__Header">
              <p>Dashboard</p>
            </div>
            <div className="Content__detail">
              <p>Build Client-Side Web Apps, Responsive, Real-time Data, and Real-time rendering chart.</p>
            </div>
          </div>
          <div className="icon__corner">
            <FaPlus className="plus__icon"/>
          </div>
        </div>
      </div>
    );
  }
  
export default Dashboard;