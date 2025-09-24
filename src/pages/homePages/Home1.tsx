import { Helmet } from "react-helmet-async";
import AboutV7 from "../../components/about/AboutV7";
import BannerV10 from "../../components/banner/BannerV10";
import BannerV7 from "../../components/banner/BannerV7";
import CityShowcase from "../../components/CityShowcase";
import DarkClass from "../../components/classes/DarkClass";
import QuickContact from "../../components/contact/QuickContact";
import FaqV1 from "../../components/faq/FaqV1";
import FooterV4 from "../../components/footer/FooterV4";
import HeaderV6 from "../../components/header/HeaderV6";
import ServicesV5 from "../../components/services/ServicesV5";
import ThemeDark from "../../components/switcher/ThemeDark";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";
import TrioImageGrid from "../../components/TrioImageColumnsSwiper";
import WhyChooseV3 from "../../components/whyChoose/WhyChooseV3";
import MultiSection from "../../components/multi/MultiSection";
import ProcessWrapper from "../../components/process/ProcessWrapper";

const Home6 = () => {
  return (
    <>
       <meta name="description" content="Odyssey Management Group helps creators grow their OnlyFans and social platforms with elite influencer management strategies and full support." />
      <Helmet>
        <title>Odyssssey Management Group | Elite OnlyFans & Influencer Management Agency</title>
      </Helmet>

      <div className="smooth-scroll-container">
        <HeaderV6 />
        <BannerV10 />
        <AboutV7 sectionClass="bg-gray" />
 <ProcessWrapper />

        <CityShowcase />

        <TrioImageGrid />
        {/* <PartnerV2 /> */}
        {/*    <ServicesV2 sectionClass='default-padding-top bg-gray' hasTitle={true} /> */}
        <TestimonialV3 />
        <BannerV7 />
        <ServicesV5 sectionClass="bg-gray" />
        <WhyChooseV3 />
<FaqV1 sectionClass="default-padding" />
        <QuickContact sectionClass="bg-gray" />
        {/*   <PortfolioV2 sectionClass='default-padding' hasTitle={true} />
                <TestimonialV2 sectionClass='bg-gray' />
                <FunFactV1 sectionClass='default-padding' /> */}
        {/*    <BlogV1 sectionClass='bg-gray' /> */}
        <FooterV4 />
        <DarkClass />
        <ThemeDark />
      </div>
    </>
  );
};

export default Home6;
