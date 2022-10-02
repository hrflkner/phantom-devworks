import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactPopUpForm from '../quoteform/ContactPopUp';

const spring = {
    type: 'spring',
    bounce: 0.4,
    velocity: 2,
};

function MobileNavBar() {
    const [open, setOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const closePopup = () => setContactOpen(false);
    const openPopup = () => setContactOpen(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="mobile-header-grid">
            <div className="mobile-nav">
                <div
                    className={
                        open ? ' hamburger is-active' : 'hamburger not-active'
                    }
                    onClick={() => handleClick()}
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <AnimatePresence exitBeforeEnter>
                    {open && (
                        <motion.div
                            className="nav-container"
                            transition={spring}
                            initial={{ x: '200px' }}
                            animate={{ x: '0' }}
                            exit={{ x: '200px' }}
                        >
                            <nav>
                                <ul>
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
                                        <Link
                                            className="nav-link"
                                            to="/timeline"
                                        >
                                            Timeline
                                        </Link>{' '}
                                    </li>
                                    <li>
                                        <Link
                                            className="nav-link"
                                            to="/portfolio"
                                        >
                                            Portfolio
                                        </Link>{' '}
                                    </li>
                                </ul>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <section>
                {contactOpen ? <ContactPopUpForm /> : ''}
                <motion.button
                    className="btn quote-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (contactOpen ? closePopup() : openPopup())}
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
                            closePopUp={closePopup}
                        />
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
}

export default MobileNavBar;
