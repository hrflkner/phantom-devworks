import { useContext } from 'react';
import { motion } from 'framer-motion';
import { siteOptionContext } from '../helpers/Context';

function SubHeader() {
    const { displayOption, setDisplayOption } = useContext(siteOptionContext);

    return (
        <>
            {displayOption.menu ? (
                <section className="subheader">
                    <h2 className="">
                        How can we help build your{' '}
                        <span className="candy-animation">web presence</span>?
                    </h2>
                    <section className="subheader-optionblock">
                        <section className="option1">
                            <h4>Develop a new site</h4>
                            <p>
                                Get a{' '}
                                <span className="highlight">
                                    responsive, accessible
                                </span>{' '}
                                site that meets modern standards of{' '}
                                <span className="highlight">
                                    search engine optimization{' '}
                                </span>{' '}
                                so folks can discover your business more easily
                                on all devices!
                            </p>
                            <section className="option1-buttons">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn"
                                    onClick={() =>
                                        setDisplayOption({
                                            menu: false,
                                            newsite: true,
                                            upgradesite: false,
                                        })
                                    }
                                >
                                    Learn More
                                </motion.button>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn"
                                    href="/timeline"
                                >
                                    Production Timeline
                                </motion.a>
                            </section>
                        </section>
                        <section className="option2">
                            <h4>Upgrade an existing site</h4>
                            <p>
                                Today's{' '}
                                <span className="highlight">
                                    web standards are quite different{' '}
                                </span>
                                than they were a decade ago. Upgrade your site
                                now to{' '}
                                <span className="highlight">
                                    remain discoverable
                                </span>{' '}
                                and reliably indexed by search engines.
                            </p>
                            <section className="option2-buttons">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn"
                                    onClick={() => {
                                        setDisplayOption({
                                            menu: false,
                                            newsite: false,
                                            upgradesite: true,
                                        });
                                    }}
                                >
                                    Learn More
                                </motion.button>
                            </section>
                        </section>
                    </section>
                    <section className="option-footer">
                        <span className="portfolio-link">
                            Browse our portfolio{' '}
                            <a
                                href="/portfolio"
                                className="candy-animation strength"
                            >
                                here
                            </a>
                            !
                        </span>
                        <section className="copyright-block">
                            <span>
                                &#169; 2022 - Hunter Faulkner &amp; Jiayi Liao
                            </span>
                        </section>
                    </section>
                </section>
            ) : (
                <section className="return-btn">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn"
                        onClick={() => {
                            setDisplayOption({
                                menu: true,
                                newsite: false,
                                upgradesite: false,
                            });
                        }}
                    >
                        Return to Start
                    </motion.button>
                </section>
            )}
        </>
    );
}

export default SubHeader;
