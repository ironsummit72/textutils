import { useState } from "react";
import "../App.css";

export default function NavBar() {
  let localStorageDarkMode = localStorage.getItem("localDark");
  const [darkMode, setdarkMode] = useState("light-theme");
  
 

  console.log(darkMode);
  document.body.className = localStorageDarkMode;
  const onchange = (e) => {

    if (e.target.checked === true) {
        setdarkMode("dark-theme");
        localStorage.setItem("localDark", "dark-theme");
        document.getElementById('darklabel').innerText="Disable DarkMode"
    } else if(e.target.checked===false) {
        setdarkMode("light-theme");
        localStorage.setItem("localDark", "light-theme");
        document.getElementById('darklabel').innerText="Enable DarkMode"
    }
   
    
  };


  return (
    <>
      <nav className="navbar navbar-expand lg navbar-dark ">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <div className="form-check form-switch"></div>
            <div className="container">
    
        <input
          type="checkbox"
          id="toggledarkmode"
          className="darkm"
          onChange={onchange}
        />
        <label id="darklabel" htmlFor="darkmode">Enable DarkMode</label>
      </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
