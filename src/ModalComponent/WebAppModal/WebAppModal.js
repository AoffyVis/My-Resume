import './WebAppModal.css';
import CloseIcon from '@mui/icons-material/Close';

function WebAppModal( {showModal, setShowModal} ) {
    return (
    <>
    { showModal ?
      <div className="WebAppModalContainer">
        <div className='WebAppModal'>
            <div className='Modal-Image'>
                <img src="/Web-Application/AllWebApp.png" alt="WebApp"/>
            </div>
            <div className='Modal-Detail'>
                <p>Web Application Modal</p>
            </div>
        </div>
        <CloseIcon className='Close-Icon' onClick={ () => 
          setShowModal (prev => !prev)} />
      </div>
      : null}
    </>
    );
  }
  
export default WebAppModal;