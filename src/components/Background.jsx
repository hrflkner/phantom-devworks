import { motion, useViewportScroll, useTransform } from 'framer-motion';
import mainBackgroundOne from '../images/phantom-dev-works-main3.png';
import mainBackgroundTwo from '../images/phantom-dev-works-secondary.webp';

function Background({ children }) {
    const { scrollYProgress } = useViewportScroll();
    const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const offsetX = useTransform(scrollYProgress, [0.4, 0.5], [100, 0]);
    const offsetY = useTransform(scrollYProgress, [0.4, 0.5], [300, 0]);

    return (
        <>
            <motion.section
                // className="background-block"
                // variants={variants}
                // animate={inView ? 'visible' : 'hidden'}
                // transition={{ duration: 2, ease: 'easeOut' }}
                // ref={ref}
                style={{ opacity: opacity, x: offsetX, y: offsetY }}
            >
                <img
                    className="main-background-1"
                    src={mainBackgroundOne}
                    alt="Main Background 1"
                />
            </motion.section>
            <section>{children}</section>
            <img
                className="main-background-2"
                src={mainBackgroundTwo}
                alt="Main Background 2"
            />
        </>
    );
}

export default Background;
