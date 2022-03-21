import NavBar from './NavBar';

function Header() {
    return (
        <>
            <header>
                <section className="logo-block fadeIn">
                    <h1 className="logo">phantom devWorks</h1>
                </section>
                <NavBar />
            </header>
        </>
    );
}

export default Header;
