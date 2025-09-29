import { Helmet } from "react-helmet-async";
import BannerV13 from "../../components/banner/BannerV13";
import DarkClass from "../../components/classes/DarkClass";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import PortfolioV7 from "../../components/portfolio/PortfolioV7";

const Home13 = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Home 12</title>
            </Helmet>

            <HeaderV1 />
            <BannerV13 />
            <PortfolioV7 />
            <FooterV1 />
            <DarkClass />

        </>
    );
};

export default Home13;