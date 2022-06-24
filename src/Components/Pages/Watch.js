import Nav from '../Nav';
import Footer from '../footer';
import Sidebar from '../Sidebar';
import Videodetails from '../Videodetails';

export default function Home (){
    return(
        <>
        <Nav/>
        <main>
        <Sidebar/>
        <Videodetails/>
        </main>
        
        <Footer/>
        </>
    );
}