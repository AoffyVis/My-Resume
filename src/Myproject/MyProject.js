import './MyProject.css';
import { useState } from 'react';
import WebApp from '../ProjectComponent/WebApp/WebApp'
import Dashboard from '../ProjectComponent/Dashboard/Dashboard'
import LandingPage from '../ProjectComponent/LandingPage/LandingPage'
import Wireframe from '../ProjectComponent/Wireframe/Wireframe'
import Button from '@mui/material/Button';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function MyProject() {
  const [isOpen, setIsOpen] = useState("")

  return (
    <div className="projectContainer" id='projectContainer'>
        <div>
            <h2>My Projects</h2>
        </div>

        <div className="gridProject">
            <div className="project">
                <img src="/Web-Application/custom-app-dev1.png" alt="WebApp"/>
                <Button variant="contained" endIcon={<ExpandCircleDownIcon/>} onClick={() => setIsOpen("WebApp")} >
                    <span>Web-Application</span>
                </Button>
            </div>
            <div className="project">
                <img 
                    src="/Dashboard/chartResize.png" alt="Dashboard"/>
                <Button variant="contained" endIcon={<ExpandCircleDownIcon />} onClick={() => setIsOpen("Dashboard")} >
                    <span>Dashboard</span>
                </Button>
            </div>
            <div className="project">
                <img src="/LandingPage/ChosenEnergy.png" alt="LandingPage"/>
                <Button variant="contained" endIcon={<ExpandCircleDownIcon />} onClick={() => setIsOpen("LandingPage")} >
                    <span>Landing Page</span>
                </Button>
            </div>
            <div className="project">
                <img src="/wireframe/webApp.png" alt="Wireframe"/>
                <Button variant="contained" endIcon={<ExpandCircleDownIcon />} onClick={() => setIsOpen("Wireframe")} >
                    <span>Wireframe</span>
                </Button>
            </div>
        </div>

        <div>
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
        </div>
    </div>
  );
}

export default MyProject;
