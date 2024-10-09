import "./Footer.scss"
import instagram from "../../assets/images/instagram-logo.svg";
import facebook from "../../assets//images/facebook-logo.svg";

function Footer() {
    return (
        <footer className="footer">
            <section className="email">
                <p className="email__text">Please contact us via email here: <a className="email__link" href="mailto:ello.beautysalon@gmail.com">E D&R Cleaning Company</a></p>
            </section>
            <section className="socials">
                <p className="socials__text">Check out our socials!</p>
                <article className="socials__article">
                    <a className="socials__link" href="https://www.instagram.com/edandrcleaningcompany/" target="_blank"><img className="socials__image" src={instagram} alt="instagram logo"/></a>
                    <a className="socials__link" href="https://www.facebook.com/edandrcleaningcompany/" target="_blank"><img className="socials__image" src={facebook} alt="facebook logo"/></a>
                </article>
            </section>
        </footer>
    )
}

export default Footer;