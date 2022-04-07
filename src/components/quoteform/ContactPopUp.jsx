import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

const popIn = {
    hidden: {
        opacity: 0,
        scale: '10%',
    },
    visible: {
        opacity: 1,
        scale: '100%',
        transition: {
            duration: 0.2,
            type: 'spring',
            damping: 50,
            stiffness: 500,
        },
    },
    exit: {
        opacity: 0,
        scale: '10%',
    },
};

function ContactPopUpForm({ closePopUp }) {
    /* Handle Submit Due to Framer Motion */
    function handleSubmit() {
        document.getElementById('quoteform').submit();
    }
    return (
        <>
            <Backdrop onClick={closePopUp}>
                <motion.section
                    onClick={(e) => e.stopPropagation()}
                    className="contact-popup"
                    variants={popIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <section className="btn-block">
                        <motion.button
                            type="button"
                            className="btn close-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={closePopUp}
                        >
                            Close
                        </motion.button>
                    </section>
                    <p>
                        Send a message describing your website needs, and we
                        will get back to you with a quote ASAP!
                    </p>
                    <form
                        action="https://formsubmit.co/phantom.devworks@gmail.com"
                        method="POST"
                        id="quoteform"
                    >
                        <section className="input-block">
                            <input
                                type="hidden"
                                name="_subject"
                                value="Web Project Inquiry"
                            />
                            <span>First name:</span>
                            <input
                                type="text"
                                name="First Name"
                                placeholder="First name"
                                required
                            />
                        </section>
                        <section className="input-block">
                            <span>Last name:</span>
                            <input
                                type="text"
                                name="Last Name"
                                placeholder="Last name"
                                required
                            />
                        </section>
                        <section className="input-block">
                            <span>Email:</span>
                            <input
                                type="text"
                                name="Email"
                                placeholder="Email address"
                                required
                            />
                        </section>
                        <section className="input-block radio-input-block1">
                            <h3>Would you like a new site or an upgrade?</h3>
                            <section className="radio-section1">
                                <section className="radio-block">
                                    <input
                                        type="radio"
                                        id="service1"
                                        name="Upgrade Site"
                                        value="upgrade"
                                        required
                                    />
                                    <label htmlFor="service1">New Site</label>
                                </section>
                                <section className="radio-block">
                                    <input
                                        type="radio"
                                        id="service2"
                                        name="New Site"
                                        value="upgrade"
                                        required
                                    />
                                    <label htmlFor="service2">Upgrade</label>
                                </section>
                            </section>
                        </section>
                        <section className="input-block text-description-block">
                            <span>Description:</span>
                            <textarea
                                className="text-description"
                                type="text"
                                name="Description"
                                placeholder="Description (ex: Type of Business, Purpose for site, Design Ideas, etc...)"
                            />
                        </section>
                        <motion.button
                            className="btn submit-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                handleSubmit();
                                closePopUp();
                            }}
                        >
                            Submit
                        </motion.button>
                    </form>
                </motion.section>
            </Backdrop>
        </>
    );
}

export default ContactPopUpForm;
