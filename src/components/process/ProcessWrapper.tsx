import ProcessV1 from "./ProcessV1";
import SplitText from "../animation/SplitText.jsx"

const ProcessWrapper = () => {
    return (
        <>
            <div className="process-area overflow-hidden text-center default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="site-heading text-center">
                                <h2 className="title split-text">
                                     <div className="banner-ten-content">
                                <h2>Not Just OnlyFans. <strong> Only Legends.</strong></h2>
                                </div>
                                    <SplitText
                                        delay={100}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >

                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ProcessV1 />
                </div>
            </div>
        </>
    );
};

export default ProcessWrapper;