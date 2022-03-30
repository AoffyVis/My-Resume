import './Wireframe.css';
import XD from "../../assets/icon/xd-logo.png";
import { FaPlus } from "react-icons/fa";

function Wireframe() {
    return (
      <div className="WireframeContainer">
        <div className='Wireframe'>
          <img src="/wireframe/webApp.png" alt="wireframe"/>
          <div className='WireframeDetail'>
            <img src={XD} alt="XD"/>
          </div>
          <div className="Content__Hover">
            <div className="Content__Header">
              <p>UI Design</p>
            </div>
            <div className="Content__detail">
              <p>Build Illustrate design ideas using storyboards, process flows, and wireframe.
              Design graphic user interface elements, like menus, tabs and widgets.
              Build page navigation buttons and search fields and wireframe.
              </p>
            </div>
          </div>
          <div className="icon__corner">
            <FaPlus className="plus__icon"/>
          </div>
        </div>
    </div>
    );
  }
  
export default Wireframe;