import { NavLink, Outlet } from "react-router-dom";
import './index.css'

function NavBar() {
  return (
    <>
    <div className="nav-bar">
        <h2>React Assessment2</h2><hr></hr><br></br>
        <div className="navbar-links">
            <NavLink to="/ToggleVisibility">Toggle Visibility</NavLink>
            <NavLink to="/FormatDate">Format Date</NavLink>
            <NavLink to="/StringManipulation">String Manipulation</NavLink>
            <NavLink to="/temperatureConvert">Temperature Convert</NavLink>
            <NavLink to="/FormattingNumber"> Formatting number</NavLink>
            <NavLink to="/ArrayManipulation"> Array Manipulation</NavLink>
        
        </div>
    </div>
    <main>  
    <Outlet/>
    </main>
    
    </>
    
  );
}
export default NavBar;