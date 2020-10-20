import React, { useState } from 'react';
import './theme.css';
import './index.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import FooterFun from './components/Footer';

function App() {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

  const [currentTab, setCurrentTab] =useState(tabs[0]);

  const renderPage = React.useCallback(() => {
    switch (currentTab) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <ContactForm />;
      default:
        return <About />
    }
  }, [currentTab])


  return (
    <div>
      <Nav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className="main">
        {renderPage()}
      </main>
      <FooterFun />
    </div>
  );
}

export default App;
