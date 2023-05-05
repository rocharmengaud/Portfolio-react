import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { Learning } from './components/Learning';
import { Work } from './components/Work';
import { InfoModal } from './components/InfoModal';

function App() {
  return (
    <div className="App">
      <InfoModal />
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
