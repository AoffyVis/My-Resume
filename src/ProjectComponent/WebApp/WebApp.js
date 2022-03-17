import './WebApp.css';

function WebApp() {
    return (
      <div className="WebAppContainer">
        <div className='WebAppIMG'>
          <img src="/Web-Application/AllWebApp.png" alt="WebApp"/>
        </div>
        <div className='WebAppDetail'>
          <img src="/express-logo.png" alt="ejs"/>
          <img src="/nodeLogo.png" alt="node"/>
          <img src="/CssLogo.png" alt="css"/>
          <img src="/sqlLogo.png" alt="sql"/>
          <img src="/JSLogo.png" alt="js"/>
        </div>
      </div>
    );
  }
  
export default WebApp;