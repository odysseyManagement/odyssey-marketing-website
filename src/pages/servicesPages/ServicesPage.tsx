import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import ClientsV1 from "../../components/clients/ClientsV1";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PriceV1 from "../../components/price/PriceV1";
import ServicesV1 from "../../components/services/ServicesV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";

const ServicesPage = () => {
    return (
        <>
                         <meta name="description" content="Odyssey Management Group provides professional OnlyFans management and social media growth services, offering creators influencer marketing strategies, brand support, and tools to maximize online success." />

            <Helmet>
                <title>Odyssey Management Group - Services</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Our Services' breadCrumb='services' />
                <ServicesV1 sectionClass='default-padding-bottom' />
                <FunFactV1 sectionClass='default-padding-bottom' />
                <ClientsV1 sectionClass='bg-gray' />
                <TestimonialV2 />
                <PriceV1 sectionClass='bg-gray' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default ServicesPage;