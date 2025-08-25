import { Swiper, SwiperSlide } from 'swiper/react';
import thumb15 from "/assets/img/thumb/15.jpg";
import PartnerV2Data from "../../../src/assets/jsonData/partner/PartnerV2Data.json"
import SinglePartnerV2 from "./SinglePartnerV2";
import { Keyboard } from 'swiper/modules';
import SplitText from "../animation/SplitText.jsx"

interface DataType {
    sectionClass?: string
}

const PartnerV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`partner-style-two-area default-padding overflow-hidden blurry-shape-right ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-110 pr-md-15 pr-xs-15">
                            <div className="partner-two-thumb">
                                <img src={thumb15} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="brand-style-two-items">
                                <h4 className="sub-title">Our Partner</h4>
                                <h2 className="title">
                                    <SplitText
                                        delay={100}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Our Trusted Partner.
                                    </SplitText>
                                </h2>
                                <p>
                                    Perceived determine departure explained no forfeite. Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an
                                </p>
                                <Swiper className="brand-two-carousel swiper mt-60"
                                    loop={true}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    autoplay={false}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 2
                                        },
                                        992: {
                                            slidesPerView: 3
                                        },
                                        1400: {
                                            slidesPerView: 3
                                        },
                                    }}
                                    modules={[Keyboard]}
                                >
                                    <div className="swiper-wrapper">
                                        {PartnerV2Data.map(partner =>
                                            <SwiperSlide key={partner.id}>
                                                <SinglePartnerV2 partner={partner} />
                                            </SwiperSlide>
                                        )}
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerV2;