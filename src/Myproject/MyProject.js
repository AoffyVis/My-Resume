import './MyProject.css';
import { useState } from 'react';
import WebApp from '../ProjectComponent/WebApp/WebApp'
import Dashboard from '../ProjectComponent/Dashboard/Dashboard'
import LandingPage from '../ProjectComponent/LandingPage/LandingPage'
import Wireframe from '../ProjectComponent/Wireframe/Wireframe'

import WebAppModal from '../ModalComponent/WebAppModal/WebAppModal'

import Button from '@mui/material/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyProject() {
    useEffect(() => {
        Aos.init({ 
            duration: 2500,
            disable: function () {
                var maxWidth = 768;
                return window.innerWidth < maxWidth;
            }
        });
    }, []);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

  return (
    <>
    <div className="projectContainer" id='projectContainer'>
        <div>
            <h2>My Projects</h2>
        </div>
        <div className="gridProject">
            <div className="project">
                <div className="projectTopic">
                    <span>Web Application</span>
                    <Button variant="contained" onClick={openModal} >Preview</Button>
                </div>
                <div className="projectDetail">
                    <div data-aos="fade-in" data-aos-offset="50">
                        <WebApp/>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="projectTopic">
                    <span>Dashboard</span>
                    <Button variant="contained">Preview</Button>
                </div>
                <div className="projectDetail">
                    <div data-aos="fade-in" data-aos-offset="100">
                        <Dashboard />
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="projectTopic">
                    <span>Landing Page</span>
                    <Button variant="contained">Preview</Button>
                </div>
                <div className="projectDetail">
                    <div data-aos="fade-in" data-aos-offset="100">
                        <LandingPage />
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="projectTopic">
                    <span>Wireframe</span>
                    <Button variant="contained">Preview</Button>
                </div>
                <div className="projectDetail">
                    <div data-aos="fade-in" data-aos-offset="100">
                        <Wireframe />
                    </div>
                </div>
            </div>
            <WebAppModal showModal={showModal} setShowModal={setShowModal} />
        </div>
    </div>
    </>
  );
}

export default MyProject;
