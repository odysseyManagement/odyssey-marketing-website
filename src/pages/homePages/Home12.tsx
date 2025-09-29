import { Helmet } from "react-helmet-async";
import AccordionV1 from "../../components/accordion/AccordionV1";
import DarkClass from "../../components/classes/DarkClass";
import HeaderV1 from "../../components/header/HeaderV1";

const Home12 = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Home 12</title>
            </Helmet>

            <HeaderV1 />
            <AccordionV1 />
            <DarkClass />

        </>
    );
};

export default Home12;