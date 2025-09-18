import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import QuickContact from "../../components/contact/QuickContact";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServiceDetailsContent from "../../components/services/ServiceDetailsContent";
import ThemeDark from "../../components/switcher/ThemeDark";

const ServiceDetailsPage = () => {
    const { slug } = useParams();
    const data = ServicesV1Data.find((service) => service.slug === slug);

    if (!data) {
    return (
      <LayoutV1>
        <Breadcrumb title="Service Not Found" breadCrumb="service-details" />
        <p>Sorry, that service doesn’t exist.</p>
      </LayoutV1>
    );
  }
    return (
      <>
<meta name="description" content="Grow your OnlyFans and social platforms with Odyssey Management Group. We offer creators tailored influencer management, brand growth solutions, and dedicated support." />
            <Helmet>
                <title>Odyssey Management Group - Services</title>
            </Helmet>
            <Helmet>
                <title>Odyssey | {data.title}</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title={data.title} breadCrumb='service-details' />
                {data && <ServiceDetailsContent pageData={data} sectionClass='default-padding-bottom' />}

                  <QuickContact sectionClass="bg-gray" />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default ServiceDetailsPage;