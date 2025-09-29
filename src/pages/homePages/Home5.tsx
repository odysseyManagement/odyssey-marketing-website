import { Helmet } from "react-helmet-async";
import BannerV4 from "../../components/banner/BannerV4";
import DarkClass from "../../components/classes/DarkClass";
import DarkClassV3 from "../../components/classes/DarkClassV3";
import HeaderV5 from "../../components/header/HeaderV5";

const Home5 = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Home 5</title>
            </Helmet>

            <HeaderV5 />
            <BannerV4 />
            <DarkClassV3 />
            <DarkClass />

        </>
    );
};

export default Home5;