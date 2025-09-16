import CountUp from 'react-countup';
import thumb4 from '/assets/img/model1.webp';

const BannerV10 = () => {

    return (
        <>
            <div className="banner-style-ten-area shadow dark-hard">

                {/* Background Video  */}
                <video loop muted autoPlay>
                    <source src="/assets/video/sample.mp4" type="video/mp4" />
                </video>

                <div className="light-banner-active bg-gray bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/7.jpg)' }} />


                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-8 col-lg-7 pl-60 pl-md-15 pl-xs-15 order-lg-last">
                            <div className="banner-ten-content">
                                <h2>Transforming your <strong>Brand</strong> into your own <strong>Empire</strong></h2>
                                <p>
We take what you're already good at — creating — and turn it into a brand that grows, an income that lasts, and opportunities that change everything.
We're behind some of the fastest-growing names in the space. We know what works, and we make it happen. </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="banner-style-ten-left-info">
                                <img src={thumb4} alt="Image Not Found" />
                                <div className="fun-fact-style-two">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={100} enableScrollSpy /></div>
                                        <div className="operator">K</div>
                                    </div>
                                    <span className="medium">Models Worked With</span>
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