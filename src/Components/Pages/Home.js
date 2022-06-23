import Nav from '../Nav';
import Sidebar from '../Sidebar';
import Content from '../Content';
import Footer from '../footer';


export default function Home (){
    return(
        <>
        <Nav/>
        <main>
        <Sidebar/>
        <Content/>
        </main>
        <Footer/>
      
        </>
    );
}