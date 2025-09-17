import CountUp from 'react-countup';

const AchievementAward = () => {
    return (
        <>
            <div className="achivement-award-area default-padding overflow-hidden bg-gray">
                <div className="container overflow-hidden">
<div className="row align-center">
  <div className="col-xl-5">
    <div className="site-title">
      <h4 className="sub-title">Our Journey</h4>
      <h2 className="title">Awards & Recognitions</h2>
    </div>
    <p>
      Odyssey Management Group has become one of the most trusted names in
      influencer and OnlyFans management. Our reputation is built on results —
      scaling creators into global brands, securing international recognition,
      and delivering consistent growth for our talent worldwide.
    </p>
    <div className="achivement-fact">
      <div className="fun-fact">
        <div className="counter">
          <div className="timer"><CountUp end={40} enableScrollSpy /></div>
          <div className="operator">+</div>
        </div>
        <span className="medium">Industry Awards</span>
      </div>
      <div className="fun-fact">
        <div className="counter">
          <div className="timer"><CountUp end={5000} enableScrollSpy /></div>
          <div className="operator">+</div>
        </div>
        <span className="medium">Creators Empowered</span>
      </div>
    </div>
  </div>

  <div className="col-xl-6 offset-xl-1">
    <div className="choose-us-style-two">
      <div className="award-grid">
        <div className="award-item">
          <i className="fas fa-globe" />
          <h4>Global Reach</h4>
          <span>Operating across 7+ international hubs</span>
        </div>
      </div>
      <div className="award-grid">
        <div className="award-item">
          <i className="fas fa-star" />
          <h4>Talent Growth</h4>
          <span>Creators achieving 6–7 figure incomes</span>
        </div>
        <div className="award-item">
          <i className="fas fa-users" />
          <h4>Trusted Partner</h4>
          <span>Recognized as a leading OnlyFans agency</span>
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

export default AchievementAward;