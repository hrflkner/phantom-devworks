import {
    ScrollContainer,
    ScrollPage,
    Animator,
    FadeIn,
    MoveIn,
    batch,
} from 'react-scroll-motion';
import mainBackgroundOne from '../images/phantom-design-works-main2.png';
//import ghost3 from '../images/body-ghost-1.png';
import mainBackgroundTwo from '../images/phantom-dev-works-background-2.png';

function Background() {
    return (
        <ScrollContainer>
            <ScrollPage page={1}>
                <Animator animation={batch(FadeIn(), MoveIn(50, 500))}>
                    <img
                        className="main-background-1"
                        src={mainBackgroundOne}
                        alt="Main Background 1"
                    />
                    <img
                        className="main-background-2"
                        src={mainBackgroundTwo}
                        alt="Main Background 2"
                    />
                </Animator>
            </ScrollPage>
        </ScrollContainer>
        // <>
        //     <section>
        //         <ScrollContainer>
        //             <ScrollPage>
        //                 <Animator animation={batch(FadeIn(), MoveIn(0, -200))}>
        //                     <img
        //                         className="main-background-1 slideInUp"
        //                         src={mainBackgroundOne}
        //                         alt="Main Background 1"
        //                     />
        //                 </Animator>
        //             </ScrollPage>
        //         </ScrollContainer>
        //         <img className="ghost-three" src={ghost3} alt="Ghost 3" />
        //         <img
        //             className="main-background-2"
        //             src={mainBackgroundTwo}
        //             alt="Main Background 2"
        //         />
        //     </section>
        // </>
    );
}

export default Background;
