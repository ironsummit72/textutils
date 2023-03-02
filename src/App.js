import Capatalize from "./components/TextUtils";
import NavBar from "./components/NavBar";





function App() {
  const onChange=(event)=>{
    if(event.target.checked===true)
    {
      document.body.className='dark-theme'
      document.getElementById('textar').style.backgroundColor='#07224e'
      document.getElementById('textar').style.color='#ffffff'
    }else{
      document.body.className='light-theme'
      document.getElementById('textar').style.backgroundColor='#ffffff'
      document.getElementById('textar').style.color='#000000'
    }

  }

  return (
    <>
      <NavBar toggleOnChange={onChange}/>

      <Capatalize />
    </>
  );
}


export default App;


