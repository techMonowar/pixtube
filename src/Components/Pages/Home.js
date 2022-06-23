import Nav from '../Nav';
import Sidebar from '../Sidebar';
import Content from '../Content';

export default function Home (){
    return(
        <>
        <Nav/>
        <main>
        <Sidebar/>
        <Content/>
        </main>
        </>
    );
}