import '../Styles/App.css';
import '../Styles/Nav.css';
import Sidebar from './Sidebar'
import logo from '../img/PixTube.png';
export default function Nav (){
    return(
        <>
        <header className='header'>
            <div className='logo left'>
                <i id='menu' className='material-icons'>menu</i>
                <a href='/'><img src={logo} alt='PixTube Logo' /></a>
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
       
        <Sidebar/>
        </>
    );
}