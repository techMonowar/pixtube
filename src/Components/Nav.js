import '../Styles/App.css';
import '../Styles/Nav.css';
import logo from '../img/PixTube.png';
import { Link } from 'react-router-dom';
export default function Nav (){
    return(
        <>
        <header className='header'>
            <div className='logo left'>
                <Link to={'/'}><img src={logo} alt='PixTube Logo' /></Link>
            </div>

            <div className='search center'>
                <form >
                    <input type='text' placeholder='Search'/>
                    <button><i id='search' className='material-icons'>search</i></button>

                </form>
            </div>
            <div className='account'>
<i id='account' className='material-icons'>account_circle</i>
            </div>
        </header>
       
        </>
    );
}