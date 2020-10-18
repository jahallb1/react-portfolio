import React, { useEffect } from 'react';

function NavTabs({currentTab, tabs, setCurrentTab }) {
  useEffect(() => {
    document.title = currentTab;
  }, [currentTab]);
  return (
  <header>
    <h1>Josh Hall<br/>Full Stack Developer</h1>
    <ul className="flex-end space-between">
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