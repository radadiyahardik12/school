import logo from './logo.svg';
import './App.css';
import Navbar from './School/Navbar';
import Hero from './School/Hero';
import Service from './School/Service';
import About from './School/About';
import One from './School/One';
import Two from './School/Two';
import Studies from './School/Studies';
import Softwer from './School/Softwer';
import Devloper from './School/Devloper';
import Work from './School/Work';
import Footer from './School/Footer';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <Service />
      <About />
      <One />
      <Two />
      <Studies />
      <Softwer />
      <Devloper />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
