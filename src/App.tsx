import React,{useState,useEffect} from 'react';
import 'primeicons/primeicons.css';

import {Header,SmallHeader} from './components/Header'
import Info from './components/Info'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './App.css';

function App() {
  const [item,setItem] = useState<string>("")
  useEffect(() => {
      if(item === "home") window.scrollTo(0, 0);
      else if(item === "about") window.scrollTo(0, 650);
      else if(item === "skills") window.scrollTo(0, 1600);
      else if(item === "projects") window.scrollTo(0, 2600);
      else if(item === "contacts") window.scrollTo(0, 3300);
      setItem("")
  }, [item])
  
  
  return (
    <div className="App">
      <Header setItem={setItem} />
      <SmallHeader setItem={setItem} />
      <Info setItem={setItem} />
      <About setItem={setItem} />
      <Skills />
      <Projects />
      <Contacts />
      <Footer setItem={setItem} />
    </div>
  );
}

export default App;
