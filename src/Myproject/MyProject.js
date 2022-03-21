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
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            }
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
                    <div data-aos="fade-in" data-aos-offset="200">
                        <WebApp/>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="projectTopic">
                    <span>Dashboard</span>
                </div>
                <div className="projectDetail">
                    <div data-aos="fade-in" data-aos-offset="500">
                        <Dashboard />
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="projectTopic">
                    <span>Landing Page</span>
                </div>
                <div className="projectDetail">
                    <div data-aos="fade-in" data-aos-offset="500">
                        <LandingPage />
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="projectTopic">
                    <span>Wireframe</span>
                </div>
                <div className="projectDetail">
                    <div data-aos="fade-in" data-aos-offset="500">
                        <Wireframe />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MyProject;
