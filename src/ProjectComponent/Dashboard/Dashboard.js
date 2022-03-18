import './Dashboard.css';

function Dashboard() {
    return (
      <div className="DashboardContainer">
        <div className='Dashboard'>
          <img src="/Dashboard/Dashboard.png" alt="Dashboard"/>
          <div className='DashboardDetail'>
            <img src="/express-logo-2.png" alt="ejs"/>
            <img src="/nodeLogo.png" alt="node"/>
            <img src="/CssLogo.png" alt="css"/>
            <img src="/sqlLogo.png" alt="sql"/>
            <img src="/JSLogo.png" alt="JS"/>
            <img src="/chartJS-1.jpg" alt="chartJS"/>
          </div>
        </div>
      </div>
    );
  }
  
export default Dashboard;