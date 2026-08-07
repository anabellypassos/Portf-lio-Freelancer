import NavBar from './components/nav-bar/nav-bar';
import Hero from './components/hero/hero.jsx';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio'; 
import WorkProcess from './components/Work/WorkProcess.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'; 

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Portfolio/>
      <WorkProcess/>
      <AboutMe/>
      <Testimonials/>
      <Footer/>
      
     
    </>
  );
}


export default App;