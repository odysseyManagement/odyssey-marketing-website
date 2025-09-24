import CountUp from 'react-countup';
import SplitText from "../animation/SplitText.jsx";
import thumb9 from '/assets/img/ms/660152c8d1beb47e0cfac88b_home_market_jorney_img1-p-500.webp';
import { default as thumb14, default as thumb8 } from '/assets/img/ms/660152c8fbfbc91385880841_home_market_jorney_img2-p-500.webp';

const BannerV7 = () => {
    return (
        <>
            <div className="banner-style-seven-area bg-cover"
                style={{ backgroundImage: `url(/assets/img/shape/1.jpg)`}}>
                <div className="light-banner-active bg-light bg-cover" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                          <div className="banner-ten-content">
                                <h2>Elevate Your <strong>OnlyFans Journey</strong> with <strong>Odyssey</strong></h2>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-seven-bottom-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5">
                                <div className="banner-seven-thumb">
                                    <img src={thumb8} alt="Image Not Found" />
                                    <img className='regular-img' src={thumb9} alt="Image Not Found" />
                                    <img className="light-img" src={thumb14} alt="Image Not Found" />

                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="content">
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><CountUp end={4} enableScrollSpy /></div>
                                            <div className="operator">m+</div>
                                        </div>
                                        <span className="medium text-center">Monthly Revenue Generated</span>
                                    </div>
                                    <div className="info-right">

                                        <p className="split-text">
                                            <SplitText
                                                delay={5}
                                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                easing="easeOutCubic"
                                                threshold={0.2}
                                                rootMargin="-50px"
                                            >
                                                Ready to amplify your OnlyFans presence and profitability? Whether you're launching a new account or aiming to expand an established one, Odyssey Management is your gateway to increased followers and enhanced earnings.
                                            </SplitText>
                                             </p>
<p>
  <SplitText
                                                delay={5}
                                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                easing="easeOutCubic"
                                                threshold={0.2}
                                                rootMargin="-50px"
                                            >
                                            Our track record speaks volumes, with numerous influencers achieving substantial income in just their first month under our guidance. Curious about unlocking your earning potential on OnlyFans?
                                                </SplitText></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV7;