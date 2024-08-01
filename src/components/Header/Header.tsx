import "./Header.scss"
import banner from "../../assets/images/cleaning-logo-banner.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__link">
                <img 
                    className="header__logo"
                    src={banner}
                    alt="E D and R cleaning company logo"
                />
            </Link>
        </header>
    )
}

export default Header;