import React, { useState } from "react";

import Settings from './Settings.js'
import Contacts from './Contacts.js';


const Tabs = props => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = props.children[activeTabIndex];
  return (
    <div>
      <div className="tabs">
        {props.children.map((tab, i) => (
          <button
            className="tab-btn"
            onClick={() => {
              setActiveTabIndex(i);
            }}
            key={i}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="tab-indicator-container">
        <div
          className="tab-indicator"
          style={{
            width: 100 / props.children.length + "%",
            transform: `translateX(${activeTabIndex * 100}%)`
          }}
        />
      </div>
      <div className="tab-content">{activeTab.props.children}</div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      
      <Tabs>
        <div title="Contacts">
          <div><Contacts /></div> {" "}
          
        </div>
        <div title="Location History">
          <div><Contacts /></div> {" "}
          
        </div>
        
        <div title="Reminders">
          Add a new contact here {" "}
        </div>
        <div title="Lost Object">
          Add a new contact here {" "}
        </div>
        <div title="Settings">
          <div>
              <Settings />
          </div>
          {" "}
        </div>
      </Tabs>
    </div>
  );
}