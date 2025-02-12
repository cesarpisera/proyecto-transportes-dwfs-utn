import { NavLink } from "react-router-dom";
import "./../../styles/Nav.css";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul className="holder">
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined}>Home</NavLink></li>
                    <li><NavLink to="/NosotrosPage" className={({isActive}) => isActive ? "activo" : undefined}>Nosotros</NavLink></li>
                    <li><NavLink to="/NovedadesPage" className={({isActive}) => isActive ? "activo" : undefined}>Novedades</NavLink></li>
                    <li><NavLink to="/ContactoPage" className={({isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>                    
                </ul>
            </div>
        </nav>
    )
}

export default Nav;