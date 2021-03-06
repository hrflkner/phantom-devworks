import { motion } from 'framer-motion';
import { items } from './portfoliodata';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Card({ id, title, category, demolink }) {
    return (
        <li className="card card-list-panel card-list-panel--focus">
            <a
                href={`${demolink}`}
                className="demolink"
                target="_blank"
                rel="noreferrer"
                aria-label="portfolio-entry"
            >
                <div className="card-content-container">
                    <motion.div
                        className="card-content"
                        layoutId={`card-container-${id}`}
                    >
                        <motion.div
                            className="card-image-container"
                            layoutId={`card-image-container-${id}`}
                        >
                            <LazyLoadImage
                                className="card-image"
                                src={`images/${id}.webp`}
                                alt={`${id}`}
                            />
                        </motion.div>
                        <motion.div
                            className="title-container"
                            layoutId={`title-container-${id}`}
                        >
                            <span className="category">{category}</span>
                            <h2>{title}</h2>
                        </motion.div>
                    </motion.div>
                </div>
            </a>
        </li>
    );
}

function PortfolioList({ selectedId }) {
    return (
        <section className="portfolio">
            <section className="portfolio-header">
                <h3 className="portfolio-title">Portfolio</h3>
                <span>Click any entry for a live demo!</span>
            </section>
            <ul className="card-list">
                {items.map((card) => (
                    <Card
                        key={card.id}
                        {...card}
                        isSelected={card.id === selectedId}
                    />
                ))}
                <div
                    className="card-list__focus-curtain"
                    aria-hidden="true"
                ></div>
            </ul>
        </section>
    );
}

export default PortfolioList;
