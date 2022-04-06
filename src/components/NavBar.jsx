import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    IoMail,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoGithub,
} from 'react-icons/io5';
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
                        {/*<a href="/">Home</a>*/}
                    </li>
                    <li>
                        <a
                            className="nav-link"
                            href="https://reactjs-portfolio-page.firebaseapp.com/"
                            target="_blank"
                            noreferrer
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
                    <ul>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                className="social-icon"
                                href="https://www.linkedin.com/in/hunter-faulkner-a67b70144/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IoLogoLinkedin />
                            </a>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                className="social-icon"
                                href="https://twitter.com/hrflkner"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IoLogoTwitter />
                            </a>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                className="social-icon"
                                href="https://github.com/hrflkner"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IoLogoGithub />
                            </a>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a className="social-icon" href="/" target="_blank">
                                <IoMail />
                            </a>
                        </motion.li>
                    </ul>
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
