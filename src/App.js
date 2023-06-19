import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Learning } from './components/Learning';
import { Work } from './components/Work';
import { InfoModal } from './components/InfoModal';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Socials } from './components/Socials';

// Initialize AOS
AOS.init();

function App() {
  return (
    <div className="App">
      <InfoModal />
      <Socials />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Learning />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
