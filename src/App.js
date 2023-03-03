import Capatalize from "./components/TextUtils";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // }

  const [darkText, setDarkText] = useState("Enable");

  const onChange = (event) => {
    if (event.target.checked === true) {
      setDarkText("Disable");
      document.body.className = "dark-theme";
      document.getElementById("textar").style.backgroundColor = "#07224e";
      document.getElementById("textar").style.color = "#ffffff";
      showAlert("Darkmode Enabled", "success");
    } else {
      setDarkText("Enable");

      document.body.className = "light-theme";
      document.getElementById("textar").style.backgroundColor = "#ffffff";
      document.getElementById("textar").style.color = "#000000";
      showAlert("Darkmode Disabled", "success");
    }
  };

  return (
    <>
      <NavBar toggleOnChange={onChange} darkText={darkText} showAlert={showAlert} />
      <Alert message={alert} type={alert} />

      <Capatalize showAlert={showAlert} />
    </>
  );
}

export default App;
