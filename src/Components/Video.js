import Thumbnail from '../img/Thumbnail.jpg';
import Author from '../img/Author.png';
import '../Styles/Video.css';
export default function Video (){
    return (
    <div class="video">
       <div class="thumbnail">
          <img src={Thumbnail} alt="" />
        </div>

          <div class="details">
             <div class="author">
                <img src={Author} alt="Author" />
             </div>
             <div class="title">
                <h3>
                    Introverts & Content Creation | Sumudu Siriwardana
                 </h3>
                 <a href="/">
                        Francesco Ciulla
                  </a>
                  <span> 2M Views • 3 Months Ago </span>
             </div>
           </div>

         </div>
    );
}
