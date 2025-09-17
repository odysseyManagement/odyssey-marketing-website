import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import TeamV1Data from "../../../src/assets/jsonData/testimonial/TestimonialV3Data.json";
import AchievementAward from "../../components/awards/AchievementAward";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import QuickContact from "../../components/contact/QuickContact";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import TeamDetails from "../../components/team/TeamDetails";

const TeamDetailsPage = () => {

    const { id } = useParams();
    const data = TeamV1Data.find(team => team.id === parseInt(id || '0'));

    return (
        <>
            <Helmet>
                <title>Dixor - Team Details</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title={data.name} breadCrumb='team-details' />
                {data && <TeamDetails teamInfo={data} sectionClass='default-padding-bottom' />}
                <AchievementAward />
                <QuickContact  />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default TeamDetailsPage;