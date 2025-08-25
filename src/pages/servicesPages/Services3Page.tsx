import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import ClientsV1 from "../../components/clients/ClientsV1";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PriceV1 from "../../components/price/PriceV1";
import ServicesV3 from "../../components/services/ServicesV3";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import ThemeDark from "../../components/switcher/ThemeDark";

const Services3Page = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Services 3</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Our Services' breadCrumb='services-3' />
                <ServicesV3 sectionClass='default-padding bg-gray' />
                <FunFactV1 sectionClass='default-padding' />
                <ClientsV1 sectionClass='bg-gray' />
                <TestimonialV2 />
                <PriceV1 sectionClass='bg-gray' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Services3Page;