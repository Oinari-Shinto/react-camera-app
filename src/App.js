import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import DropDown from './components/DropDown';
import { Route, Switch } from 'react-router';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import Catalog from './pages/catalog';

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
      </Switch>
      <Footer />
    </>
  );
}

export default App;
