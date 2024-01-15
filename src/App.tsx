import React from "react";

import Email from "./assets/email.svg";
import Linkedin from "./assets/linkedin.svg";

import ListItem from "./components/list_item";
import { USERS as userData } from "./data/user_list";

import "./App.css";
import ChipSearch from "./components/chip_search";

function App() {
  return (
    <>
      <div className="container">
        <div className={"user-list"}>
          {userData.map((ele) => (
            <ListItem
              key={ele.userId}
              onClick={() => {}}
              avatar={ele.avatar}
              title={ele.username}
              email={ele.email}
            />
          ))}
        </div>

        <ChipSearch />
      </div>
      <footer>
        <p>&#10084; Developed by Nishanth S</p>
        <a
          href="https://www.linkedin.com/in/s-nishanth/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="linkedin" />
        </a>
        <a
          href="mailto:nishanthsundaraj@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Email} alt="email" />
        </a>
      </footer>
    </>
  );
}

export default App;
