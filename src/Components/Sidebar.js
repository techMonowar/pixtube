import '../Styles/Sidebar.css';
import Content from './Content'
import Footer from './footer'

export default function Nav (){
    return(
       <>
        <main>
        <div className='sidebar'>
        <div className='nav'>
            <a href='/' className='nav-link active'>
            <i className='material-icons'>home</i>
            <span>Home</span>
            </a>

            <a href='/trending' className='nav-link'>
            <i className='material-icons'>local_fire_department</i>
            <span>Trending</span>
            </a>

            <a href='/history' className='nav-link'>
            <i className='material-icons'>history</i>
            <span>History</span>
            </a>

            <a href='/history' className='nav-link'>
            <i className='material-icons'>favorite</i>
            <span>Liked Videos</span>
            </a>

            <a href='/history' className='nav-link'>
            <i className='material-icons'>watch_later</i>
            <span>Watch Later</span>
            </a>

            <a href='/history' className='nav-link'>
            <i className='material-icons'>playlist_play</i>
            <span>Play List</span>
            </a>

            <a href='https://linkedin.com/in/techmonowar' target="_blank" rel='noreferrer' className='copyright'>
            {/* <i className='material-icons'>copyright</i> */}
            <span>Design and Developed by - Monowar Hussain</span>
            </a>

            
            
        </div>
     
        </div>

        <Content/>
        </main>
        <Footer/>
        </>
    );
}