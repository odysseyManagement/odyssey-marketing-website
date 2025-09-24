import CountUp from "react-countup";

const WhyChooseV3 = () => {
  return (
    <>
      <div className="choose-us-style-three-area default-padding">
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-4 offset-xl-1 order-xl-last">
              <div className="choose-us-style-three">
                <div className="fun-fact">
                  <div className="counter">
                    <div className="timer">
                      <CountUp end={40} enableScrollSpy />
                    </div>
                    <div className="operator">+</div>
                  </div>
                  <h3>
                    Odyssey Management Group has helped 40+ creators grow their
                    platforms and maximize earnings.
                  </h3>
                </div>
                <ul className="list-style-three">
                  <li>
                    <h4>Creator First</h4>
                    <p>
                      We handle strategy, growth, and management so you can
                      focus on your content.
                    </p>
                  </li>
                  <li>
                    <h4>Proven Growth</h4>
                    <p>
                      With years of experience, we know how to scale accounts
                      and boost engagement.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="award-items-style-two">
                <div className="award-item-two">
                  <i className="fas fa-star" />
                  <div className="center">
                    <h4>Global Influencer Marketing Agency </h4>
                    <p>
                      Recognized for helping creators hit record monthly
                      earnings
                    </p>
                  </div>
                  <h2>2024</h2>
                </div>
                <div className="award-item-two">
                  <i className="fas fa-bullhorn" />
                  <div className="center">
                    <h4>Boutique Influencer Marketing Agency </h4>
                    <p>
                      Proven strategies to grow audiences and increase
                      visibility
                    </p>
                  </div>
                  <h2>2024</h2>
                </div>
                <div className="award-item-two">
                  <i className="fas fa-rocket" />
                  <div className="center">
                    <h4>Great British Entrepreneurship Awards</h4>
                    <p>
                      Trusted for driving long-term growth and sustainable
                      success
                    </p>
                  </div>
                  <h2>2024</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseV3;
