// import {
//     ScrollContainer,
//     ScrollPage,
//     Animator,
//     FadeIn,
//     MoveIn,
//     batch,
// } from 'react-scroll-motion';
// import { useRef } from 'react';
//import ghost3 from '../images/body-ghost-1.png';

// import { useInView } from 'react-intersection-observer';

import { motion, useViewportScroll, useTransform } from 'framer-motion';
import mainBackgroundOne from '../images/phantom-design-works-main2.png';
import mainBackgroundTwo from '../images/phantom-dev-works-background-2.png';

function Background() {
    const { scrollYProgress } = useViewportScroll();
    const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const offsetX = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);
    const offsetY = useTransform(scrollYProgress, [0.2, 0.4], [300, 0]);

    // const { ref, inView, entry } = useInView();
    // const variants = {
    //     hidden: {
    //         x: 100,
    //         y: 500,
    //     },
    //     visible: {
    //         x: 0,
    //         y: 0,
    //     },
    // };

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
            <img
                className="main-background-2"
                src={mainBackgroundTwo}
                alt="Main Background 2"
            />
        </>

        // <ScrollContainer>
        //     <ScrollPage page={1}>
        //         <Animator animation={batch(FadeIn(), MoveIn(50, 500))}>
        //             <section className="background-block">
        //                 <img
        //                     className="main-background-1"
        //                     src={mainBackgroundOne}
        //                     alt="Main Background 1"
        //                 />
        //                 <img
        //                     className="main-background-2"
        //                     src={mainBackgroundTwo}
        //                     alt="Main Background 2"
        //                 />
        //             </section>
        //         </Animator>
        //     </ScrollPage>
        // </ScrollContainer>
    );
}

export default Background;
