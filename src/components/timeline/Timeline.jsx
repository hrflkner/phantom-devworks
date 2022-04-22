import React from 'react';
import { Timeline, Events, TextEvent, themes } from '@merc/react-timeline';
import CodingScreen from '../../images/timeline-devscreen.webp';

export default function TimeLine() {
    return (
        <Timeline theme={themes.roli} opts={{ layout: 'alt-evts-inline-date' }}>
            <Events>
                <TextEvent date="Step 1" text="">
                    <h3 className="timeline-block-header">
                        &#128203; First Meeting
                    </h3>
                    <p>
                        Let's determine{' '}
                        <span className="highlight">
                            how best to promote your business
                        </span>{' '}
                        on the web.
                    </p>
                    <p>
                        Our first goal is to{' '}
                        <span className="highlight">
                            work out the most suitable development package{' '}
                        </span>{' '}
                        that meets your business' needs!
                    </p>
                </TextEvent>

                <TextEvent date="Step 2" text="">
                    <h3 className="timeline-block-header">
                        &#128172; Project Quote
                    </h3>
                    <h5 className="timeline-block-subheader">
                        Some Pricing Considerations:
                    </h5>
                    <ul className="timeline-block-list">
                        <li>Development Time / Project Size</li>
                        <li>Design Process</li>
                        <li>Static vs. Dynamic Content</li>
                        <li>Content Management Systems</li>
                    </ul>
                    <a
                        className="sample-quote"
                        href="documents/Phantom.DevWorks_QuoteTemplate_4-2022v3.pdf"
                        target="_blank"
                    >
                        Here's a Sample Quote
                    </a>
                </TextEvent>

                <TextEvent date="Step 3" text="">
                    <h3 className="timeline-block-header">
                        &#128220; The Contract
                    </h3>
                    <p className="timeline-block-subheader">
                        I will send a contract covering all details of the
                        agreement.
                    </p>
                    <h5 className="timeline-block-subheader">
                        Key Considerations &amp; Requirements:
                    </h5>
                    <ul className="timeline-block-list">
                        <li>50% Deposit Due Up-front</li>
                        <li>Code is Licensed in Perpituity</li>
                        <li>Maintenance not Included</li>
                        <li>Final 50% Due Prior to Deployment</li>
                    </ul>
                </TextEvent>

                <TextEvent date="Step 4" text="">
                    <h3 className="timeline-block-header">
                        &#128296; Development
                    </h3>
                    <img
                        className="code-img"
                        src={CodingScreen}
                        alt="Coding Screen"
                    />
                    <p>
                        The duration of the build will vary depending on the
                        complexity and size of the project.
                    </p>

                    <p>
                        Expect development to range between 3 - 6 weeks for
                        mid-sized websites that are optimized and reactive!
                    </p>
                </TextEvent>

                <TextEvent date="Step 5" text="">
                    <h3 className="timeline-block-header">
                        &#128242; Deployment
                    </h3>
                    <h5 className="timeline-block-subheader">
                        The Final Steps:
                    </h5>
                    <ul className="timeline-block-list">
                        <li>Approve Final Design</li>
                        <li>Finalize all Written Content</li>
                        <li>Check SEO / Social Sharing Features</li>
                        <li>Deploy to the Web! 🎊🎉</li>
                    </ul>
                </TextEvent>
            </Events>
        </Timeline>
    );
}
