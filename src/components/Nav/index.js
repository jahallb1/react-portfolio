import React, { useEffect } from 'react';

function NavTabs({currentTab, tabs, setCurrentTab }) {
  useEffect(() => {
    document.title = currentTab;
  }, [currentTab]);
  return (
  <header className="nav-tabs">
    <h1>Josh Hall</h1>
    <ul className="nav-list">
      {tabs.map((tab, index) => (
        <li key={index}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => setCurrentTab(tab)}
            className={
              currentTab === tab ? 'active' : ''
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  
    </header>
  );
}

export default NavTabs;