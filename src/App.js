import React, {useState} from 'react';
import './App.scss';
import{BrowserRouter as Router,Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Resume from './contents/Resume';
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./components/theme/DarkMode"
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/theme/Theme"
import Toggle from "./components/theme/Toggler"
import Sidebar from './components/Sidebar';
function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
     setIsOpen(!isOpen); 
  }
  
    return (
      <ThemeProvider theme={themeMode}>
      <Router>
        <GlobalStyles />
        <div className="App">
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle} />
        

        <Toggle theme={theme} toggleTheme={themeToggler} />
        {/* Route for Home.js contents */}
        <Route path="/">
          <Home />
        </Route>
        {/* Route for About.js contents */}
        <Route path="/about">
          <About />
        </Route>
        {/* Route for Education.js contents */}
        <Route path="/education">
          <Education />
        </Route>
        {/* Route for Skills.js contents */}
        <Route path="/skills">
          <Skills />
        </Route>
        {/* Route for Contact.js contents */}
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path = "/resume">
          <Resume />
        </Route>
        </div>
        </Router>
        </ThemeProvider>
      );
    }
    


export default App;
