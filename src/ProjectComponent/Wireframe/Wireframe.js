import './Wireframe.css';
import XD from "../../assets/icon/xd-logo.png";

function Wireframe() {
    return (
      <div className="WireframeContainer">
        <div className='Wireframe'>
          <img src="/wireframe/webApp.png" alt="wireframe"/>
          <div className='WireframeDetail'>
            <img src={XD} alt="XD"/>
          </div>
        </div>
    </div>
    );
  }
  
export default Wireframe;