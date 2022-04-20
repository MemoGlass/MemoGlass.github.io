import React, { useState } from "react";
import Settings from './Settings.js'
import Contacts from './Contacts.js';
import Reminder from './reminders.js';
import Location from './location.js';
import locationfound from './located.js';
import Objects from './objects.js'


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
      <div className="content">
        <Tabs>
          <div title="Contacts">
            <div><Contacts /></div> {" "}

          </div>
          <div title="Location">
            <div><Location /> <locationfound /></div> {" "}

          </div>
          <div title="Location">
            <div><Objects /> <locationfound /></div> {" "}

          </div>


          <div title="Reminders">
            <Reminder /> {" "}
          </div>

          <div title="Settings">
            <div>
              <Settings /> {" "}
            </div> 
          </div>
        </Tabs>
      </div>
    </div>
  );
}