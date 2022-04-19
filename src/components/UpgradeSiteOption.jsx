import ResponsiveIcon from '../images/responsive-icon.svg.svg';
import AccessibleIcon from '../images/accessible-icon.svg';
import SearchableIcon from '../images/searchable-icon.svg';
import Background from './Background';
import WebDesignPlan from '../images/website-designplan.jpg';

function UpgradeSiteOption() {
    return (
        <>
            <section className="upgrade-openingcall">
                <h2 className="fadeInRight">
                    <span className=" candy-animation">Upgrade</span> your site
                    with modern design practices
                </h2>
                <section className="upgrade-infoblock fadeIn">
                    <h4>Today's must-haves:</h4>
                    <dl>
                        <dt className="fadeInRight">Responsiveness</dt>
                        <dd className="fadeInLeft">
                            Designs that look great on{' '}
                            <span className="highlight">all devices</span>!
                            Users on{' '}
                            <span className="highlight">
                                mobile, tablet, or desktop
                            </span>{' '}
                            should have no trouble interacting with your site to
                            get to know your business.
                        </dd>
                        <img
                            src={ResponsiveIcon}
                            alt="Responsiveness Icon"
                            className="deflist-icons fadeInLeft"
                        ></img>
                        <dt className="fadeInRight">Accessibility</dt>
                        <dd className="fadeInLeft">
                            Offer user friendly experiences that are considerate
                            of those{' '}
                            <span className="highlight">
                                requiring special accomodations
                            </span>{' '}
                            such as screenreaders.
                        </dd>
                        <img
                            src={AccessibleIcon}
                            alt="Accessible Icon"
                            className="deflist-icons fadeInLeft"
                        ></img>
                        <dt className="fadeInRight">Searchability</dt>
                        <dd className="fadeInLeft">
                            Engineering your site to be{' '}
                            <span className="highlight">
                                shareable on social media
                            </span>{' '}
                            and{' '}
                            <span className="highlight">
                                discoverable in search engines
                            </span>{' '}
                            contributes to higher visibility online. This helps
                            to allow more people to find your service or product
                            at the top of the search results!
                        </dd>
                        <img
                            src={SearchableIcon}
                            alt="Searchable Icon"
                            className="deflist-icons fadeInLeft"
                        ></img>
                    </dl>
                </section>
            </section>
            <Background>
                <section className="upgrade-secondary">
                    <h3>Update your design and content</h3>
                    <p>
                        We can upgrade your existing site and build on it any
                        way that you like!
                    </p>
                    <section className="upgrade-secondary-imgblock">
                        <img
                            className="webdesign-plan-img"
                            src={WebDesignPlan}
                            alt="Website Design Plan"
                        />
                        <p>
                            It's necessary to refresh the design and text
                            content of a website as markets change. Its
                            important to keep the codebase up to date as well.
                            Though the technologies behind the web are changing
                            fast, we keep up to date with the latest standards
                            of development.
                        </p>
                    </section>
                </section>
            </Background>
        </>
    );
}

export default UpgradeSiteOption;
