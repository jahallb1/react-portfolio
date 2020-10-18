import React from 'react';
import './App.css';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import FooterFun from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
       <Nav></Nav>
      </header>
      <main>
        <div>
          <ContactForm></ContactForm>
          <Resume></Resume>
        </div>
      </main>
      <footer>
        <FooterFun></FooterFun>
      </footer>
    </div>
  );
}

export default App;
