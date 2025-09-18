import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import CityShowcase from "../../components/CityShowcase";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";

const GlobalBranches = () => {
    return (
        <>
                         <meta name="description" content="Odyssey Management Group provides professional OnlyFans management and social media growth services, offering creators influencer marketing strategies, brand support, and tools to maximize online success." />

            <Helmet>
                <title>Odyssey Management Group - Services</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Global Branches' breadCrumb='services' />
                    <CityShowcase />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default GlobalBranches;