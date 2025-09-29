import { Helmet } from "react-helmet-async";
import CursorEffect from "../../components/animation/CursorEffect";
import BannerV3 from "../../components/banner/BannerV3";
import DarkClass from "../../components/classes/DarkClass";
import DarkClassV2 from "../../components/classes/DarkClassV2";
import HeaderV4 from "../../components/header/HeaderV4";

const Home4 = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Home 4</title>
            </Helmet>

            <HeaderV4 />
            <BannerV3 />
            <CursorEffect />
            <DarkClassV2 />
            <DarkClass />

        </>
    );
};

export default Home4;