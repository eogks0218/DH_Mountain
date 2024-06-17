import { Link } from "react-router-dom";
import "../../scss/Header.scss";

export default function Header(){
    return(
        <header className="Header-container">
            <div className="headerContainer">
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + '/image/logo.png'} alt="LOGO" className="header-logo"/>
                </Link>
                <nav className="headerNav">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <Link to="/SearchMountainPage" className="menu-link">Search</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/MountainListPage/1" className="menu-link">List</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" className="menu-link">Recommend</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}