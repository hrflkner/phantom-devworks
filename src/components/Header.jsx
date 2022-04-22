import NavBar from './NavBar';
import LogoGhost from '../images/phantom-logo.webp';

function Header() {
    return (
        <>
            <header>
                <section className="logo-block fadeIn">
                    {/* <img
                        className="logo-ghost"
                        src={LogoGhost}
                        alt="Logo Ghost"
                    />
                    <h1 className="logo">phantom devWorks</h1> */}
                    <img
                        className="logo-ghost"
                        height="130"
                        width="318"
                        src={LogoGhost}
                        alt="Logo Ghost"
                    />
                </section>
                <NavBar />
            </header>
        </>
    );
}

export default Header;
