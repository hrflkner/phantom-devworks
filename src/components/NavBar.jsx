import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialLinksBar from './SocialLinksBar';
import ContactPopUpForm from './quoteform/ContactPopUp';

function NavBar() {
    const [contactOpen, setContactOpen] = useState(false);
    const close = () => setContactOpen(false);
    const open = () => setContactOpen(true);

    return (
        <>
            <nav>
                <ul className="nav-row1">
                    <li>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>{' '}
                    </li>
                    <li>
                        <a
                            className="nav-link"
                            href="https://reactjs-portfolio-page.firebaseapp.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            About
                        </a>{' '}
                    </li>
                    <li>
                        <Link className="nav-link" to="/timeline">
                            Timeline
                        </Link>{' '}
                    </li>
                    <li>
                        <Link className="nav-link" to="/portfolio">
                            Portfolio
                        </Link>{' '}
                    </li>
                </ul>
                <section className="nav-row2">
                    <SocialLinksBar />
                    {contactOpen ? <ContactPopUpForm /> : ''}
                    <motion.button
                        className="btn quote-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => (contactOpen ? close() : open())}
                    >
                        Get a Free Quote!
                    </motion.button>
                    <AnimatePresence
                        initial={false}
                        exitBeforeEnter={true}
                        onExitComplete={() => null}
                    >
                        {contactOpen && (
                            <ContactPopUpForm
                                contactOpen={contactOpen}
                                closePopUp={close}
                            />
                        )}
                    </AnimatePresence>
                </section>
            </nav>
        </>
    );
}

export default NavBar;
