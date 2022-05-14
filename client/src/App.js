import React, {useEffect} from 'react';
import './assets/style.css';
import logoDinkes from './assets/logo-dinkes.png';
import logoKotaManado from './assets/logo-kotaManado.png';
import {Button, Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hero from './components/Hero.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import AOS from 'aos';

function App() {
  useEffect(() => {

    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <Hero />
    <Main />
    <Footer />
    </>
    
  );

}

export default App;
