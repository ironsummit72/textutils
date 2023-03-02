import "../App.css";

export default function NavBar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
        <a class="navbar-brand text-white" href="/">
          TextUtils
        </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <div className="darkmodetoggle">
              <input type="checkbox" onChange={props.toggleOnChange} />
              <label htmlFor="darkmode" className="darkmode-label text-white">
                {props.darkText} DarkMode
              </label>
            </div>
          </li>
          <li>
            <div className="colorpalettes">
              <button className="colorbtns darkpurple" style={{backgroundColor:"#2e0065",color:'#984eff'}}>DP</button>
              <button className="colorbtns darkblue"  style={{backgroundColor:"#040477",color:'#4f39f7'}}>DB</button>
              <button className="colorbtns darkgreen"style={{backgroundColor:"#004d00",color:'#00e200'}}>DG</button>
              <button className="colorbtns darkpink"style={{backgroundColor:"#79005e",color:'#f86cdc'}}>DP</button>


            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
