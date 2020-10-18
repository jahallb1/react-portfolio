import React, { useEffect } from 'react';

function NavTabs({currentTab, tabs, setCurrentTab }) {
  useEffect(() => {
    document.title = currentTab;
  }, [currentTab]);
  return (
  <header>
    <ul className="">
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