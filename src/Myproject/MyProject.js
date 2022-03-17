import './MyProject.css';
// import { useState } from 'react';
import WebApp from '../ProjectComponent/WebApp/WebApp'
import Dashboard from '../ProjectComponent/Dashboard/Dashboard'
import LandingPage from '../ProjectComponent/LandingPage/LandingPage'
import Wireframe from '../ProjectComponent/Wireframe/Wireframe'
// import Button from '@mui/material/Button';
// import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function MyProject() {
//   const [isOpen, setIsOpen] = useState("")

  return (
    <div className="projectContainer" id='projectContainer'>
        <div>
            <h2>My Projects</h2>
        </div>
        <div className="gridProject">
            <div className="project">
                <div className="projectTopic">
                    <span>Web Application</span>
                </div>
                <div className="projectDetail">
                    <WebApp />
                </div>
            </div>
            <div className="project">
            <div className="projectDetail">
                    <Dashboard />
                </div>
                <div className="projectTopic">
                    <span>Dashboard</span>
                </div>
            </div>
            <div className="project">
                <div className="projectTopic">
                    <span>Landing Page</span>
                </div>
                <div className="projectDetail">
                    <LandingPage />
                </div>
            </div>
            <div className="project">
                
                <div className="projectDetail">
                    <Wireframe />
                </div>
                <div className="projectTopic">
                    <span>Wireframe</span>
                </div>
            </div>
        </div>
            {/* <div className="gridProject">
                <div className="project">
                    <img src="/Web-Application/custom-app-dev1.png" alt="WebApp"/>
                        <Button className='openBtn' variant="contained" endIcon={<ExpandCircleDownIcon/>} onClick={() => setIsOpen("WebApp")} >
                        <span>Web-Application</span>
                        </Button>
                    </div>
                    <div className="projectDetail">
                        <WebApp />
                    </div>
                </div>
                <div className="project">
                    <img 
                        src="/Dashboard/chartResize.png" alt="Dashboard"/>
                    <Button className='openBtn' variant="contained" endIcon={<ExpandCircleDownIcon />} onClick={() => setIsOpen("Dashboard")} >
                        <span>Dashboard</span>
                    </Button>
                </div>
                <div className="project">
                    <img src="/LandingPage/ChosenEnergyPage.png" alt="LandingPage"/>
                    <Button className='openBtn' variant="contained" endIcon={<ExpandCircleDownIcon />} onClick={() => setIsOpen("LandingPage")} >
                        <span>Landing Page</span>
                    </Button>
                </div>
                <div className="project">
                    <img src="/wireframe/webApp.png" alt="Wireframe"/>
                    <Button className='openBtn' variant="contained" endIcon={<ExpandCircleDownIcon />} onClick={() => setIsOpen("Wireframe")} >
                        <span>Wireframe</span>
                    </Button>
                </div>
            </div> */}
            {/* <div>
                {isOpen === "WebApp" && <div>
                    <WebApp />
                </div>}
                {isOpen === "Dashboard" && <div>
                    <Dashboard />
                </div>}
                {isOpen === "LandingPage" && <div>
                    <LandingPage />
                </div>}
                {isOpen === "Wireframe" && <div>
                    <Wireframe />
                </div>}
            </div> */}
    </div>
  );
}

export default MyProject;
