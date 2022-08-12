import logo from './logo.svg';
import './App.css';

import {Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Profiles from './pages/Profiles';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profiles/:username' element={<Profiles/>}/>
    </Routes>
  );
}

export default App;
