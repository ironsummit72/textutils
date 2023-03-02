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
       <input type="checkbox"  onChange={props.toggleOnChange}/>
        <label htmlFor="darkmode" className="darkmode-label text-white" >{props.darkText} DarkMode</label>
       </div>
      </li>
      </ul>
      </nav>
    </>
  );
}
