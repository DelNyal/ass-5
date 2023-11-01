import React, { useMemo, useState, useCallback } from "react";
import "./App.css";
import TodoComponent from "./component/TodoComponent";
import Formcomponent from "./component/Formcomponent";
import TemperatureComponent from "./component/TempeartureComponent";
import { useAppContext } from "./context/AppContext";
const App = () => {
  const {isDarkTheme,toggleTheme,selectedContent,setSelectedContent} = useAppContext();
  return (
    
    <div className={`App ${isDarkTheme ? "dark-body" : "light-body"}`}>
      <header className={isDarkTheme ? "dark-header" : "light-header"}>
        <nav>
          <div className="logo">
            Assignment
          </div>
          <div className="nav-links">
            <span className={`nav-link ${
                selectedContent === "Todo" ? "active" : ""}`}
              onClick={() => setSelectedContent("Todo")}
            >
              Todo
            </span>
            <span className={`nav-link ${ selectedContent === "Form" ? "active" : ""}`}onClick={() => setSelectedContent("Form")}>
              Registration
            </span>
            <span className={`nav-link ${selectedContent === "Temperature" ? "active" : ""}`}
              onClick={() => setSelectedContent("Temperature")}>
              Temperature
            </span>
          </div>
          <div className="theme-switcher">
            <label className="switch">
              <input type="checkbox" onChange={toggleTheme} />
              <span className="slider round">
                <img  src={isDarkTheme?"https://cdn-icons-png.flaticon.com/128/2387/2387889.png":"https://cdn-icons-png.flaticon.com/128/11457/11457488.png"}/>
              </span>
            </label>
          </div>
        </nav>
      </header>
      <main>
        {/* Main content based on the selected link */}
        {
          <>
            {selectedContent === "Todo" && <TodoComponent/>}
            {selectedContent === "Form" && <Formcomponent/>}
            {selectedContent === "Temperature" && <TemperatureComponent/>}
          </>
        }
      </main>
    </div>
    
  );
};

export default App;
