import '../Styles/Sidebar.css';
import { Link } from 'react-router-dom';

export default function Nav (){
    return(
        <>
        
        <div className='sidebar'>
        <div className='nav'>
            <Link to={'/'} className='nav-link active'>
            <i className='material-icons'>home</i>
            <span>Home</span>
            </Link>

            <Link to={'/trending'} className='nav-link'>
            <i className='material-icons'>local_fire_department</i>
            <span>Trending</span>
            </Link>

            <Link to={'/history'} className='nav-link'>
            <i className='material-icons'>history</i>
            <span>History</span>
            </Link>

            <Link to={'/liked-videos'} className='nav-link'>
            <i className='material-icons'>favorite</i>
            <span>Liked Videos</span>
            </Link>

            <Link to={'/watch-later'} className='nav-link'>
            <i className='material-icons'>watch_later</i>
            <span>Watch Later</span>
            </Link>

            <Link to={'/watch'} className='nav-link'>
            <i className='material-icons'>playlist_play</i>
            <span>Watch</span>
            </Link>

            <a href='https://linkedin.com/in/techmonowar' target="_blank" rel='noreferrer' className='copyright'>
            {/* <i className='material-icons'>copyright</i> */}
            <span>Design and Developed by - Monowar Hussain</span>
            </a>

            
            
        </div>
     
        </div>

        

</>

    );
}