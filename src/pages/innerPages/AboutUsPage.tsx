import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import QuickContact from "../../components/contact/QuickContact";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PartnerV2 from "../../components/partner/PartnerV2";
import ThemeDark from "../../components/switcher/ThemeDark";
import TeamV1 from "../../components/team/TeamV1";

const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - About Us</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='About Odyssey Management' breadCrumb='About' />
                <PartnerV2 />
                <TeamV1 sectionClass='bg-gray' hasTitle={true} />
                    <QuickContact />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default AboutUsPage;