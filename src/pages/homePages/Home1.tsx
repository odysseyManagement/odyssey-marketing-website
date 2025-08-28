import { Helmet } from "react-helmet-async";
import AboutV6 from "../../components/about/AboutV6";
import BannerV8 from "../../components/banner/BannerV8";
import BlogV2 from "../../components/blog/BlogV2";
import DarkClass from "../../components/classes/DarkClass";
import ClientsV1 from "../../components/clients/ClientsV1";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV2 from "../../components/header/HeaderV2";
import MultiSection from "../../components/multi/MultiSection";
import ProjectV1 from "../../components/project/ProjectV1";
import ServicesV1 from "../../components/services/ServicesV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import TeamV1 from "../../components/team/TeamV1";
import TestimonialV3 from "../../components/testimonial/TestimonialV3";

const Home1 = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Creative Digital Agency</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV8 />
                <AboutV6 sectionClass="default-padding" />
                <ServicesV1 sectionClass='bg-gray default-padding' hasTitle={true} />
                <ProjectV1 />
                <TeamV1 sectionClass='bg-gray' hasTitle={true} />
                <TestimonialV3 />
                <ClientsV1 sectionClass='bg-gray' />
                <MultiSection />
                <BlogV2 sectionClass='bg-gray' />
                <FooterV1 />
                <DarkClass />
                <ThemeDark />
            </div>
        </>
    );
};

export default Home1;