import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import CityShowcase from "../../components/CityShowcase";
import DarkClass from "../../components/classes/DarkClass";
import ContactV1 from "../../components/contact/ContactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";

const ContactUsPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Contact Us</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Get In Touch' breadCrumb='contact-us' />
                <ContactV1 />
                <CityShowcase />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default ContactUsPage;