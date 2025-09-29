import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import TeamV1 from "../../components/team/TeamV1";

const OurTeam = () => {
    return (
        <>
            <meta name="description" content="Odyssey Management Group provides professional OnlyFans management and social media growth services, offering creators influencer marketing strategies, brand support, and tools to maximize online success." />
            <Helmet>
                <title>Odyssey Management Group - Services</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Our Team' breadCrumb='services' />
                               <TeamV1 sectionClass='bg-gray' hasTitle={true} />

                <DarkClass />

            </LayoutV1>
        </>
    );
};

export default OurTeam;