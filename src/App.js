import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gudsulu from './Components/Gudsulu';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import LoginPage from './Components/Login'; 
import SplashCursor from './Components/SplashCursor';


function App() {
  return (
    <BrowserRouter>
      <SplashCursor />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Gudsulu />} />
          {/* <Route path="" element={<Gudsulu />+} /> */}
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
