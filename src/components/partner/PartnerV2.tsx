import SplitText from "../animation/SplitText.jsx";
import disrupt from "/assets/img/ms/65f84a2dc994a55209ad8ce9_vendor2.svg";
import newyork from "/assets/img/ms/65f84a2dfb15a263461da74d_vendor3.svg";
import forbes from "/assets/img/ms/forbes.svg";
import thumb15 from "/assets/img/ms/xing-management-model-agency-china-chengdu-female-mode-modern.jpg";

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
                                <h4 className="sub-title">About Us</h4>
                                <h2 className="title">
                                    <SplitText
                                        delay={100}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Your Trusted Partner.
                                    </SplitText>
                                </h2>
                                <p>
We specialise in helping models grow their online presence, build loyal fanbases, and maximize earnings through OnlyFans and other social platforms. Our mission is to empower creators with the tools, strategies, and support they need to take their brand to the next level.                                </p>

                                <div className="container my-4">
                                     <h2 className="h5 text-uppercase text-center text-white mb-3 letter-spacing-1">
          As Featured In
        </h2>
  <div className="row text-center">
    <div className="col-6 col-md-4 mb-4">
      <img src={forbes} alt="Forbes" className="img-fluid" style={{ width: "200px" }} />
    </div>
    <div className="col-6 col-md-4 mb-4">
      <img src={newyork} alt="New York" className="img-fluid" style={{ width: "200px" }} />
    </div>
    <div className="col-6 col-md-4 mb-4">
      <img src={disrupt} alt="Disrupt" className="img-fluid" style={{ width: "200px" }} />
    </div>
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

export default PartnerV2;