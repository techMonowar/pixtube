import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import History from './Pages/History';
import LikedVideos from './Pages/LikedVideos';
import Trending from './Pages/Trending';
import Watch from './Pages/Watch';
import WatchLater from './Pages/WatchLater';
import Channel from './Pages/Channel';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/watch' element={<Watch/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/liked-videos' element={<LikedVideos/>}/>
      <Route path='/watch-later' element={<WatchLater/>}/>
      <Route path='/channel' element={<Channel/>}/>
    </Routes>
   </Router>
  );
}

export default App;
