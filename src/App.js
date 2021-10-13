import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import DropDown from './components/DropDown';
import { Route, Switch } from 'react-router';
import Home from './pages';
import About from './pages/about';
import Catalog from './pages/catalog';
import Contact from './pages/contact';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resaize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <>
      <NavBar toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/contact" exact component={Contact} />
        
      </Switch>
      <Footer />
    </>
  );
}

export default App;
