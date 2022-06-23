import Thumbnail from '../img/Thumbnail.jpg';
import Author from '../img/Author.png';
import '../Styles/Video.css';
import { Link } from 'react-router-dom';
export default function Video (){
    return (
      <>
    <div class="video">
<Link to={'/watch'}>

       <div class="thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        </Link>

          <div class="details">
          
             <div class="title">
             
               
<Link to={'/watch'}>

                <h3>
                    Introverts & Content Creation | Sumudu Siriwardana
                 </h3>
        </Link>
        
        <div className='information'>
<Link to={'/channel'}>

        <div class="author">
                <img src={Author} alt="Author" />
             </div>
</Link>
                
               <div className='channel'>
               <Link to={'/channel'}>

                        Francesco Ciulla
                        </Link>

                  <span> 2M Views • 3 Months Ago </span>
                  </div>
        </div>
        </div>

           </div>

         </div>

         </>
    );
}
