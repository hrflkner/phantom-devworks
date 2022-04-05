import NavBar from './NavBar';
import LogoGhost from '../images/phantom-logo-clear.png';

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
