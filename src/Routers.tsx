import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";

// Home Light

// Inner Pages
import AboutUsPage from "./pages/innerPages/AboutUsPage";
import ContactUsPage from "./pages/innerPages/ContactUsPage";
import FaqPage from "./pages/innerPages/FaqPage";
import Team2Page from "./pages/innerPages/Team2Page";
import TeamDetailsPage from "./pages/innerPages/TeamDetailsPage";

// Inner Light

// Services Page
import ServiceDetailsPage from "./pages/servicesPages/ServiceDetailsPage";
import ServicesPage from "./pages/servicesPages/ServicesPage";

// Services Light

// Blog Pages
import BlogSingleWithSidebarPage from "./pages/blogPages/BlogSingleWithSidebarPage";
import BlogWithSidebarPage from "./pages/blogPages/BlogWithSidebarPage";

// Blog Light

import NotFoundPage from "./pages/innerPages/NotFoundPage";
import PrivacyPolicy from "./pages/innerPages/PrivacyPolicy";
import TermsAndConditions from "./pages/innerPages/TermsAndConditions";

const Routers = () => {
    return (
        <>
            <Routes>

                <Route path='/' element={<Home1 />}></Route>

                {/* Inner Pages */}
                <Route path='/about-us' element={<AboutUsPage />}></Route>
                <Route path='/contact-us' element={<ContactUsPage />}></Route>
                <Route path='/faq' element={<FaqPage />}></Route>

                 <Route path='/global-branches' element={<ServicesPage />}></Route>
                 <Route path='/our-values' element={<ServicesPage />}></Route>
                 <Route path='/our-team' element={<ServicesPage />}></Route>
                 <Route path='/talent' element={<Team2Page />}></Route>
                <Route path='/talent/:id' element={<TeamDetailsPage />}></Route>

                <Route path='/terms-and-conditions' element={<TermsAndConditions />}></Route>
                <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>


                <Route path='/blog' element={<BlogWithSidebarPage />}></Route>
                <Route path='/blog?:page?' element={<BlogWithSidebarPage />}></Route>
                <Route path='/blog/:slug' element={<BlogSingleWithSidebarPage />}></Route>

                {/* Services Page */}
                <Route path='/services' element={<ServicesPage />}></Route>
                <Route path='/services/:slug' element={<ServiceDetailsPage />}></Route>

                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;