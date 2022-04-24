import { Link } from 'react-router-dom';
import SocialLinksBar from './SocialLinksBar';

function Footer() {
    return (
        <footer>
            <section className="upper-footer">
                <section className="sitemap">
                    <h4 className="candyBlue">Sitemap</h4>
                    <section className="flex-span">
                        <ul className="footer-nav">
                            <li>
                                <Link className="footer-nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <span aria="hidden">&#8226;</span>
                            <li>
                                <a
                                    className="footer-nav-link"
                                    href="https://reactjs-portfolio-page.firebaseapp.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    About
                                </a>
                            </li>
                            <span aria="hidden">&#8226;</span>
                            <li>
                                <Link
                                    className="footer-nav-link"
                                    to="/timeline"
                                >
                                    Timeline
                                </Link>
                            </li>
                            <span aria="hidden">&#8226;</span>
                            <li>
                                <Link
                                    className="footer-nav-link"
                                    to="/portfolio"
                                >
                                    Portfolio
                                </Link>
                            </li>
                        </ul>
                    </section>
                </section>
                <section className="connect">
                    <h4 className="candyRed">Connect</h4>
                    <section className="nav-row2">
                        <SocialLinksBar />
                    </section>
                </section>
                <section className="company-title">
                    <h4>
                        <span className="candyBlue">Phantom</span>
                        <span className="highlighterYellow">.</span>
                        <span className="candyRed">devWorks</span>
                    </h4>
                    <span className="highlighterYellow blockspan">
                        Hunter Faulkner &amp; Jiayi Liao
                    </span>
                    <span className="highlighterYellow blockspan">
                        Copyright © 2022
                    </span>
                </section>
                <section className="company-info">
                    <span className="lightgrey blockspan">
                        Memphis, TN, USA
                    </span>
                    <span className="lightgrey blockspan">
                        Sydney, NSW, Australia
                    </span>
                    <span className="blockspan">emailaddress@emailme.com</span>
                </section>
            </section>
            <section className="lower-footer">
                <span>
                    This site was built by with React, Figma, Framer, and Styled
                    Components. It is owned by name name.
                </span>
            </section>
        </footer>
    );
}

export default Footer;
