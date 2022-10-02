import LogoGhost from '../../images/phantom-logo.webp';
import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar';

function Header() {
    return (
        <>
            <header>
                <section className="logo-block">
                    <a href="/">
                        <img
                            className="logo-ghost"
                            height="130"
                            width="318"
                            src={LogoGhost}
                            alt="Logo Ghost"
                        />
                    </a>
                </section>
                <NavBar />
                <MobileNavBar />
            </header>
        </>
    );
}

export default Header;
