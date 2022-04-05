import React from 'react';
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
    themes,
} from '@merc/react-timeline';

export default function TimeLine() {
    return (
        <Timeline theme={themes.roli} opts={{ layout: 'alt-evts-inline-date' }}>
            <Events>
                <TextEvent date="Step 1" text="">
                    <h3 className="timeline-block-header">Project Quote</h3>
                    <h5 className="timeline-block-subheader">
                        Pricing Considerations:
                    </h5>
                    <ul className="timeline-block-list">
                        <li>Development Time / Project Size</li>
                        <li>Design Process</li>
                        <li>Static vs. Dynamic</li>
                        <li>Content Management</li>
                    </ul>
                </TextEvent>

                <ImageEvent
                    date="Step 2"
                    text="You can embed images..."
                    src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
                    alt="jellyfish swimming"
                    credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
                >
                    <div>
                        <UrlButton href="https://unsplash.com/search/photos/undersea">
                            View more undersea photos
                        </UrlButton>
                    </div>
                </ImageEvent>

                <YouTubeEvent
                    date="Step 3"
                    id="6UnRHtwHGSE"
                    name="General Tso's Chicken recipe"
                    text="... and YouTube videos!"
                />
            </Events>
        </Timeline>
    );
}
