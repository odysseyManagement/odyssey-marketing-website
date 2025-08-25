import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ClientsV1 from "../../components/clients/ClientsV1";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PriceV1 from "../../components/price/PriceV1";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import ThemeLight from "../../components/switcher/ThemeLight";
import ServicesV3 from "../../components/services/ServicesV3";

const Services3LightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Services 3 Light</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Our Services' breadCrumb='services-3-light' />
                <ServicesV3 sectionClass='default-padding bg-gray' />
                <FunFactV1 sectionClass='default-padding' />
                <PriceV1 sectionClass='bg-gray' />
                <ClientsV1 />
                <TestimonialV2 sectionClass='bg-gray' />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default Services3LightPage;