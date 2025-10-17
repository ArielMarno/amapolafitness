import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import QuienSoy from './components/QuienSoy';
import Entrenamientos from './components/Entrenamientos';
import Formaciones from './components/Formaciones';
import Faq from './components/Faq';
import Inscripciones from './components/Inscripciones';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <QuienSoy />
      <Entrenamientos />
      <Formaciones />
      <Faq />
      <Inscripciones />
      <Footer />
    </>
  )
}

export default App
