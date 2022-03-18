import './MyProject.css';
// import { useState } from 'react';
import WebApp from '../ProjectComponent/WebApp/WebApp'
import Dashboard from '../ProjectComponent/Dashboard/Dashboard'
import LandingPage from '../ProjectComponent/LandingPage/LandingPage'
import Wireframe from '../ProjectComponent/Wireframe/Wireframe'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyProject() {
    useEffect(() => {
        Aos.init({ 
            duration: 2000,
        });
    }, []);

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
                    <div data-aos="slide-left" data-aos-offset="400">
                        <WebApp/>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="projectDetail">
                    <div data-aos="slide-right" data-aos-offset="400">
                        <Dashboard />
                    </div>
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
                    <div data-aos="slide-left" data-aos-offset="400">
                        <LandingPage />
                    </div>
                </div>
            </div>
            <div className="project">
                
                <div className="projectDetail">
                    <div data-aos="slide-right" data-aos-offset="400">
                        <Wireframe />
                    </div>
                </div>
                <div className="projectTopic">
                    <span>Wireframe</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MyProject;
