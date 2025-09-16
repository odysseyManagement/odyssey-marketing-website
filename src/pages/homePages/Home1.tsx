import { Helmet } from "react-helmet-async";
import AboutV7 from "../../components/about/AboutV7";
import CursorEffect from "../../components/animation/CursorEffect";
import BannerV10 from "../../components/banner/BannerV10";
import CityShowcase from "../../components/CityShowcase";
import DarkClass from "../../components/classes/DarkClass";
import QuickContact from "../../components/contact/QuickContact";
import FooterV4 from "../../components/footer/FooterV4";
import HeaderV6 from "../../components/header/HeaderV6";
import ServicesV2 from "../../components/services/ServicesV2";
import ThemeDark from "../../components/switcher/ThemeDark";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";
import TrioImageGrid from "../../components/TrioImageColumnsSwiper";

const Home6 = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Home 6</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV6 />
                <BannerV10 />
                <AboutV7 sectionClass='bg-gray' />
                <CityShowcase />
                <TrioImageGrid/>
                {/* <PartnerV2 /> */}
                <ServicesV2 sectionClass='default-padding-top bg-gray' hasTitle={true} />
                <TestimonialV3 />
                <QuickContact sectionClass='bg-gray' />
              {/*   <PortfolioV2 sectionClass='default-padding' hasTitle={true} />
                <TestimonialV2 sectionClass='bg-gray' />
                <FunFactV1 sectionClass='default-padding' /> */}
             {/*    <BlogV1 sectionClass='bg-gray' /> */}
                <CursorEffect />
                <FooterV4 />
                <DarkClass />
                <ThemeDark />
            </div>
        </>
    );
};

export default Home6;