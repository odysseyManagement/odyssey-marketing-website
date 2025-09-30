import CountUp from 'react-countup';
import thumb4 from '/assets/img/model1.webp';

const BannerV10 = () => {
    return (
        <>
            <div className="banner-style-ten-area shadow dark-hard">

                {/* Background Video Section */}
                <div className="video-section">
                    <video loop muted autoPlay className="w-full h-auto object-cover">
                        <source src="/assets/video/sample.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Content Section */}
                <div className="light-banner-active bg-gray bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/7.jpg)' }} />

                <div className="container">
                    <div className="row align-center">
                      <div className="mt-10 d-block d-lg-none"></div>
<div className="mt-100 d-block d-lg-none"></div>
                        {/* Text Content */}
                        <div className="col-xl-8 col-lg-7 pl-60 pl-md-15 pl-xs-15 order-1 order-lg-0">
                            <div className="banner-ten-content text-center text-lg-start">
                                                      <div className="mt-100 d-block d-lg-none"></div>

                                <h2>
                                    Transforming your <strong>Brand</strong> into your own <strong>Empire</strong>
                                </h2>
                                <p>
                                    We take what you're already good at — creating — and turn it into a brand that grows,
                                    an income that lasts, and opportunities that change everything.
                                    We're behind some of the fastest-growing names in the space.
                                    We know what works, and we make it happen.
                                </p>
                            </div>
                        </div>

                        {/* Image + Counter */}
                        <div className="col-xl-4 col-lg-5 order-2 order-lg-1">                                <img src={thumb4} alt="Image Not Found" />

                            <div className="banner-style-ten-left-info text-center">
                                <div className="fun-fact-style-two text-center">
                                    <div className="counter text-center">
                                        <div className="timer text-center"><CountUp end={2000} enableScrollSpy /></div>
                                        <div className="operator">+</div>
                                    </div>
                                    <span className="medium">Models Currently Active</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV10;
