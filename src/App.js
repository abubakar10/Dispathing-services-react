
import './App.css';
import About from './Components/About Page/About';
import Footer from './Components/LandingPage/Footer/Footer';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/about' Component={About} />
      </Routes>
      {/* <Footer/> */}
         </>
  );
}

export default App;
