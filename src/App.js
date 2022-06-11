import logo from './logo.svg';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Experiance from './components/Experiance/Experiance.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div >
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experiance></Experiance>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
