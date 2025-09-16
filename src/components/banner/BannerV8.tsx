import CountUp from 'react-countup';
import { Link } from "react-router-dom";
import SplitText from "../animation/SplitText.jsx";
import BrandV2 from '../brand/BrandV2.js';
import illustration1 from '/assets/img/model1.webp';
const BannerV8 = () => {
    return (
        <>
          <div className="banner-style-eight-area relative overflow-hidden mt-5">
 <video
    className="video-bg mt-20"
    src="/assets/video/sample.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  {/* Optional overlay shape layer */}
  <div
    className="light-banner-active bg-gray bg-cover absolute inset-0"
    style={{ backgroundImage: 'url(/assets/img/shape/4.jpg)' }}
  />

  {/* Foreground content */}
  <div className="container relative z-10">
    <div className="row">
      <div className="col-xl-12">
        <div className="banner-style-eight-heading">
      <div className="banner-title flex justify-between items-center w-full">
  <h2 className="title-left split-text">
    <SplitText
      className="split-text"
      firstWordStyle={{ color: '#f4b31c', fontWeight: 'bold' }}
      delay={150}
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
    >
      Your Brand.
    </SplitText>
  </h2>

                                      <h2 className="title-right split-text">
    <SplitText
      className="split-text"
      firstWordStyle={{ color: '#f4b31c', fontWeight: 'bold' }}
      delay={250}
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
    >
     Your Empire.
    </SplitText>
  </h2>

</div>

        </div>
      </div>

      <div className="col-xl-4">
        <div className="">
     {/*     <img src={illustration1} alt="Image Not Found" /> */}
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-xl-7">
        <div className="d-grid">
          <h4>Elite Influencer <br></br> & Brand Management</h4>
          <div className="right">
            <p>
            The lifestyle you want — freedom, travel, money, recognition — isn't a dream. It's a system. And we've built it.</p>

<p>Most creators burn out trying to do it all alone. At Odyssey, you don't have to. We take what you're already good at — creating — and turn it into a brand that grows, an income that lasts, and opportunities that change everything.</p>

<p>We're behind some of the fastest-growing names in the space. We know what works, and we make it happen.
</p>

            <Link className="btn-animation mt-10" to="/about-2">
              <i className="fas fa-arrow-right" /> <span>Know More</span>
            </Link>
          </div>
        </div>
                        </div>


      <div className="col-xl-4 offset-xl-1">
                <div className="card-style-one">
                                                                     <img src={illustration1} alt="Image Not Found" />

                  <div className="bottom">

                    <div className="fun-fact">


              <div className="counter">
                <div className="timer">
                  <CountUp end={31} enableScrollSpy />
                </div>
                <div className="operator">M</div>
              </div>
              <span className="medium">Followers Generated</span>
            </div>
            <Link to="/project">
              <i className="fas fa-long-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
            </div>

                                    <BrandV2></BrandV2>


        </>
    );
};

export default BannerV8;