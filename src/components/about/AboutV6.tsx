import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceListData from "../../../src/assets/jsonData/services/ServiceListData.json";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import ServiceList from "../services/ServiceList";
import thumb2 from "/assets/img/65febde90e8860067f47eaa4_home_center-journey_imgcopy.webp";
import arrowIcon from "/assets/img/icon/arrow.png";

interface DataType {
    sectionClass?: string;
}

const AboutV6 = ({ sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();

    const [activeServiceId, setActiveServiceId] = useState(ServiceListData[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`about-style-six-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="thumb-style-four">
                                <img src={thumb2} alt="Image Not Found"
                                style={{
                                    width: "1000px"
                                }}/>
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-1 col-lg-7">
                            <div className="about-style-six-info text-scroll-animation" ref={containerRef}>
                                <div className="info">
                                    <div className="d-flex">
                                        <Link to="/about-us"><img src={arrowIcon} alt="Image Not Found" /></Link>
                                        <h2 className="title text">Elevating Your Journey</h2>
                                    </div>
                                    <p className="text">At Odyssey, we turn ambition into influence. Our mission is simple: to take creators and transform them into brands that grow, incomes that last, and lifestyles that feel limitless.</p>
                                    <p className="text">We’ve built the system that opens doors — from global opportunities to financial freedom — so you can focus on what you do best: creating. With us behind the scenes, the path to growth isn’t a gamble, it’s a guarantee.</p>
                                </div>

                            </div>
                        </div>

                          <ul className="service-list">
                                    {ServiceListData.map(service =>
                                        <li
                                            key={service.id}
                                            onMouseEnter={() => handleMouseEnter(service.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <Link to="/services" className={`${activeServiceId === service.id ? 'active' : ''}`}>
                                                <ServiceList service={service} />
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV6;