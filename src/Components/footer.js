import '../Styles/Footer.css';
export default function Footer (){
    return (
<footer>
<div className='bottom-bar'>
        <div className='bottom-nav'>
            <a href='/' className='bottom-nav-link bottom-active'>
            <i className='material-icons'>home</i>
            </a>

            <a href='/trending' className='bottom-nav-link'>
            <i className='material-icons'>local_fire_department</i>
            </a>

            <a href='/history' className='bottom-nav-link'>
            <i className='material-icons'>history</i>
            </a>

            <a href='/history' className='bottom-nav-link'>
            <i className='material-icons'>favorite</i>
            </a>

            <a href='/history' className='bottom-nav-link'>
            <i className='material-icons'>watch_later</i>
            </a>

            <a href='/history' className='bottom-nav-link'>
            <i className='material-icons'>playlist_play</i>
            </a>
            
        </div>
     
        </div>
        </footer>
    );
}
