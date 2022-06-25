import '../Styles/Footer.css';
import {Link} from 'react-router-dom';
export default function Footer (){
    return (
<footer>
<div className='bottom-bar'>
        <div className='bottom-nav'>
            <Link to={'/'} className='bottom-nav-link bottom-active'>
            <i className='material-icons'>home</i>
            </Link>

            <Link to={'/trending'} className='bottom-nav-link'>
            <i className='material-icons'>local_fire_department</i>
            </Link>

            <Link to={'/history'} className='bottom-nav-link'>
            <i className='material-icons'>history</i>
            </Link>

            <Link to={'/liked-videos'} className='bottom-nav-link'>
            <i className='material-icons'>favorite</i>
            </Link>

            <Link to={'/watch-later'} className='bottom-nav-link'>
            <i className='material-icons'>watch_later</i>
            </Link>

            <Link to={'/watch'} className='bottom-nav-link'>
            <i className='material-icons'>playlist_play</i>
            </Link>
            
        </div>
     
        </div>
        </footer>
    );
}
