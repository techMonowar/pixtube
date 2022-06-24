import Video from './Video';
import '../Styles/Videodetails.css';
import '../Styles/Sidebar.css';
export default function Videodetails (){
    return (
        <div className='watch' >
            <div className='Videodetails'>
            <object className='video-stream' data='https://www.youtube.com/embed/T94PHkuydcw' 
        width='' height=''>
    </object>  
            <div className='actions'>
                <div>
               <i className='material-icons'>favorite</i>
               <span>2.5M</span>
               </div>
               <div>

               <i className='material-icons'>thumb_down</i>
               <span>DISLIKE</span>
               </div>
               <div>

               <i className='material-icons'>playlist_add</i>
               <span>Add to Playlist</span>
               </div>
               <div>

               <i className='material-icons'>watch_later</i>
               <span>Watch Later</span>
               </div>
               
            </div>
            </div>
            <div className='recomended-sidebar'>
<h3>Recomended Videos</h3>

            <div className='recomended-videos'>
             <Video/>
             <Video/>
             <Video/>
             <Video/>
             <Video/>
             <Video/>
             <Video/>
             <Video/>
            
            </div>
        </div>
        </div>
    );
}