
import './App.css';
import { BrandHero } from './components/BrandHero';
import { Features } from './components/Features';
import { MobileReady } from './components/MobileReady';
import { Navbar } from './components/Navbar';
import { Themes } from './components/Themes';
import { WhySimpleSite } from './components/WhySimpleSite';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">

      <Navbar />
      <BrandHero />
      <Themes />
      <WhySimpleSite />
      <MobileReady />
      <Features />
      <Footer />

      
      

    </div>
  );
}

export default App;
