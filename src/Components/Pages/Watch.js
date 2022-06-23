import Nav from '../Nav';
import Sidebar from '../Sidebar';
import Video from '../Video';

export default function Home (){
    return(
        <>
        <Nav/>
        <main>
        <Sidebar/>
        <div style={ {width:"70%",padding:"10px", overflow:"scroll"} }>
        <iframe width="100%" height="90%" src="https://www.youtube.com/embed/T94PHkuydcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div style={ { overflow:"scroll"} }>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            
        </div>
        </main>
        </>
    );
}