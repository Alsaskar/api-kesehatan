import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Footer = () =>{
    return (
        <footer className="bg-dark p-3 text-white grad-bg text-center">
            <p>Copyright &copy; 2022  | Build with  <FontAwesomeIcon icon={faHeart} className="icon-red" /> by VAM - Tech</p>
        </footer>
    );
}
export default Footer;