import React from "react";
import "./css/pure-min.css";
import "./css/side-menu.css";

function App() {
  return (
    <div id="layout">
      {/* <!-- Menu toggle --> */}
      <a href="#menu" id="menuLink" className="menu-link">
        {/* <!-- Hamburger icon --> */}
        <span></span>
      </a>

      <div id="menu">
        <div className="pure-menu">
          <a className="pure-menu-heading" href="#a">
            Company
          </a>

          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <a href="#a" className="pure-menu-link">
                Home
              </a>
            </li>
            <li className="pure-menu-item">
              <a href="#a" className="pure-menu-link">
                About
              </a>
            </li>

            <li className="pure-menu-item menu-item-divided pure-menu-selected">
              <a href="#a" className="pure-menu-link">
                Services
              </a>
            </li>

            <li className="pure-menu-item">
              <a href="#a" className="pure-menu-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="main">
        <div className="header">
          <h1>Autor</h1>
        </div>

        <div className="content">
      
        </div>
      </div>
    </div>
  );
}

export default App;
