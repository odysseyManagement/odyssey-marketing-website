import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import QuickContact from "../../components/contact/QuickContact";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import TeamV3 from "../../components/team/TeamV3";

const Team2Page = () => {
    return (
        <>
                         <meta name="description" content="Odyssey Management Group provides professional OnlyFans management and social media growth services, offering creators influencer marketing strategies, brand support, and tools to maximize online success." />

              <Helmet>
                            <title>Odyssey Management Group - Talent</title>
                        </Helmet>
            <LayoutV1>
                <Breadcrumb title='Talent' breadCrumb='team-2' />
                <TeamV3 hasTitle={false} />
                <QuickContact sectionClass='bg-gray' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Team2Page;