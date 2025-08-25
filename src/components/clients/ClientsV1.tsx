import team10 from '/assets/img/team/10.jpg';
import team11 from '/assets/img/team/11.jpg';
import team12 from '/assets/img/team/12.jpg';
import team13 from '/assets/img/team/13.jpg';
import brand10 from "/assets/img/brand/10.png";
import brand2 from "/assets/img/brand/2.png";
import brand3 from "/assets/img/brand/3.png";
import brand4 from "/assets/img/brand/4.png";
import brand8 from "/assets/img/brand/8.png";
import brand6 from "/assets/img/brand/6.png";
import brand7 from "/assets/img/brand/7.png";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import SplitText from "../animation/SplitText.jsx"

interface DataType {
    sectionClass?: string
}

const ClientsV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`clients-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 mb-md-50">
                            <div className="brand-info">
                                <h4 className="sub-title">Clients</h4>

                                <h2 className="title split-text">
                                    <SplitText
                                        delay={100}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Worked with largest brands
                                    </SplitText>
                                </h2>

                                <p className="split-text">
                                    <SplitText
                                        delay={5}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Give lady of they such they sure it. Me contained explained my education. Vulgar as
                                        hearts by garret perceived as perfection.
                                    </SplitText>
                                </p>

                                <div className="clients-card mt-10">
                                    <img src={team10} alt="Image Not Found" />
                                    <img src={team11} alt="Image Not Found" />
                                    <img src={team12} alt="Image Not Found" />
                                    <img src={team13} alt="Image Not Found" />
                                    <Link to="#">
                                        <i className="fas fa-plus" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 offset-xl-1 col-lg-7">
                            <div className="client-style-one-items">
                                <div className="client-style-one-item">
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="count-num"><CountUp end={45} enableScrollSpy /></div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Active Clients</span>
                                    </div>
                                </div>
                                <div className="client-style-one-item">
                                    <img src={brand10} alt="Image Not Found" />
                                </div>
                                <div className="client-style-one-item">
                                    <img src={brand2} alt="Image Not Found" />
                                </div>
                                <div className="client-style-one-item">
                                    <img src={brand3} alt="Image Not Found" />
                                </div>
                                <div className="client-style-one-item">
                                    <img src={brand4} alt="Image Not Found" />
                                </div>
                                <div className="client-style-one-item">
                                    <img src={brand8} alt="Image Not Found" />
                                </div>
                                <div className="client-style-one-item">
                                    <img src={brand6} alt="Image Not Found" />
                                </div>
                                <div className="client-style-one-item">
                                    <img src={brand7} alt="Image Not Found" />
                                </div>
                                <div className="client-style-one-item">
                                    <Link to="#" onClick={handleSmoothScroll}>View All</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientsV1;