import Nav from '../Nav';
import Footer from '../footer';
import Sidebar from '../Sidebar';

export default function Home (){
    return(
        <>
        <Nav/>
        <main>
        <Sidebar/>
<h1>Trending</h1>
        </main>
        <Footer/>
        </>
    );
}