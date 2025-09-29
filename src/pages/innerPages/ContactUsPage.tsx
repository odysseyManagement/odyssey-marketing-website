import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import CityShowcase from "../../components/CityShowcase";
import DarkClass from "../../components/classes/DarkClass";
import ContactV1 from "../../components/contact/ContactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";

const ContactUsPage = () => {
    return (
        <>
<meta name="description" content="Get in touch with Odyssey Management Group for professional OnlyFans management and social media growth support. Contact our team today to start building your success." />

            <Helmet>
                <title>Odyssey Management Group - Contact Us</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Join Us' breadCrumb='contact-us' />
                <ContactV1 />
                <CityShowcase />
                <DarkClass />

            </LayoutV1>
        </>
    );
};

export default ContactUsPage;