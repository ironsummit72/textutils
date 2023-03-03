import "../App.css";

export default function NavBar(props) {
  const onDarkPurple=()=>
  {
    darkColorPalletsProperties('darkpurple',"#2e0065",'#c74eff','DarkMode Enabled (DarkPurple)');
  }
  const onDarkBlue=()=>{
    darkColorPalletsProperties('darkblue','#040477','#4c7ff6','DarkMode Enabled (DarkBlue)');
  }
  const onDarkGreen=()=>{
    darkColorPalletsProperties('darkgreen','#004d00','#00e200','DarkMode Enabled (DarkGreen)');
  }
  const onDarkPink=()=>{
    darkColorPalletsProperties('darkpink','#570044','#c1009a','DarkMode Enabled (DarkPink)');
}

  const darkColorPalletsProperties=(className,bgc,c,message)=>{
    document.body.className=className;
    document.getElementById("textar").style.backgroundColor = bgc;
    document.getElementById("textar").style.color = c;
    document.getElementById('darkcheck').checked=true;
    document.getElementById('darklabel').innerText="Disable DarkMode";
    props.showAlert(message,'success');
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
        <a class="navbar-brand text-white" href="/">
          TextUtils
        </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <div className="darkmodetoggle">
              <input type="checkbox" id="darkcheck" onChange={props.toggleOnChange} />
              <label htmlFor="darkmode" id="darklabel" className="darkmode-label text-white">
                {props.darkText} DarkMode
              </label>
            </div>
          </li>
          <li>
            <div className="colorpalettes">
              <button className="colorbtns darkpurple" onClick={onDarkPurple} style={{backgroundColor:"#2e0065",color:'#984eff'}}>DP</button>
              <button className="colorbtns darkblue" onClick={onDarkBlue}  style={{backgroundColor:"#040477",color:'#4f39f7'}}>DB</button>
              <button className="colorbtns darkgreen" onClick={onDarkGreen}  style={{backgroundColor:"#004d00",color:'#00e200'}}>DG</button>
              <button className="colorbtns darkpink" onClick={onDarkPink} style={{backgroundColor:"#79005e",color:'#f86cdc'}}>DP</button>


            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
