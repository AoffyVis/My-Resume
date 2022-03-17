import './LandingPage.css';

function LandingPage() {
    return (
      <div className="LandingPageContainer">
        <div className='LandingPageIMG'>
          <img src="/LandingPage/LandingPage.png" alt="LandingPage"/>
        </div>
        <div className='LandingPageDetail'>
          <img src="/htmlLogo.png" alt="html"/>
          <img src="/CssLogo.png" alt="css"/>
          <img src="/JSLogo.png" alt="js"/>
        </div>
    </div>
    );
  }
  
export default LandingPage;