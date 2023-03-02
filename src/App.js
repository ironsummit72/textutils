import Capatalize from "./components/TextUtils";
import NavBar from "./components/NavBar";
import { useState } from "react";





function App() {
const [darkText,setDarkText]=useState('Enable')
  const onChange=(event)=>{
    if(event.target.checked===true)
    {
 setDarkText('Disable')
 document.body.className='dark-theme'
 document.getElementById('textar').style.backgroundColor='#07224e'
 document.getElementById('textar').style.color='#ffffff'
}else{
      setDarkText('Enable')
  
      document.body.className='light-theme'
      document.getElementById('textar').style.backgroundColor='#ffffff'
      document.getElementById('textar').style.color='#000000'
    }

  }

  return (
    <>
      <NavBar toggleOnChange={onChange} darkText={darkText}/>

      <Capatalize />
    </>
  );
}


export default App;


