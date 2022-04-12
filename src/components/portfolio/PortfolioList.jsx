import { motion } from 'framer-motion';
import { items } from './portfoliodata';

function Card({ id, title, category, demolink }) {
    return (
        <li className="card driveway-panel driveway-panel--focus">
            <a
                href={`${demolink}`}
                className="demolink"
                target="_blank"
                rel="noreferrer"
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
                            <img
                                className="card-image"
                                src={`images/${id}.webp`}
                                alt=""
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
        <>
            <section className="portfolio-header">
                <h3 className="portfolio-title">Portfolio</h3>
                <span>Click any entry for a live demo!</span>
            </section>
            <ul className="card-list driveway">
                {items.map((card) => (
                    <Card
                        key={card.id}
                        {...card}
                        isSelected={card.id === selectedId}
                    />
                ))}
                <div class="driveway__focus-curtain"></div>
            </ul>
        </>
    );
}

export default PortfolioList;
