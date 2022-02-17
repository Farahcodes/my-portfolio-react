import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './context';

//pages
import './index.css';
import App from './App'
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';


ReactDOM.render(
  <React.StrictMode>
  <AppProvider>
    <App />
  </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

