import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import QuickContact from "../../components/contact/QuickContact";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PartnerV2 from "../../components/partner/PartnerV2";
import TeamV1 from "../../components/team/TeamV1";

const AboutUsPage = () => {
    return (
        <>
             <meta name="description" content="Odyssey Management Group provides professional OnlyFans management and social media growth services, offering creators influencer marketing strategies, brand support, and tools to maximize online success." />
<Helmet>
    <title>About Us | Odyssey Management Group</title>
</Helmet>


            <LayoutV1>
                <Breadcrumb title='About Odyssey Management' breadCrumb='About' />
                <PartnerV2 />
                <TeamV1 sectionClass='bg-gray' hasTitle={true} />
                    <QuickContact />
                <DarkClass />

            </LayoutV1>
        </>
    );
};

export default AboutUsPage;