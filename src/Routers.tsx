import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";
import Home2 from "./pages/homePages/Home2";
import Home3 from "./pages/homePages/Home3";
import Home4 from "./pages/homePages/Home4";
import Home5 from "./pages/homePages/Home5";
import Home6 from "./pages/homePages/Home6";
import Home7 from "./pages/homePages/Home7";
import Home8 from "./pages/homePages/Home8";
import Home9 from "./pages/homePages/Home9";

// Home Light
import Home1Light from "./pages/homePages/Home1Light";
import Home2Light from "./pages/homePages/Home2Light";
import Home3Light from "./pages/homePages/Home3Light";
import Home4Light from "./pages/homePages/Home4Light";
import Home5Light from "./pages/homePages/Home5Light";
import Home6Light from "./pages/homePages/Home6Light";
import Home7Light from "./pages/homePages/Home7Light";
import Home8Light from "./pages/homePages/Home8Light";
import Home9Light from "./pages/homePages/Home9Light";

// Inner Pages
import About2Page from "./pages/innerPages/About2Page";
import AboutUsPage from "./pages/innerPages/AboutUsPage";
import ContactUsPage from "./pages/innerPages/ContactUsPage";
import FaqPage from "./pages/innerPages/FaqPage";
import Project2Page from "./pages/innerPages/Project2Page";
import Project3Page from "./pages/innerPages/Project3Page";
import ProjectDetailsPage from "./pages/innerPages/ProjectDetailsPage";
import ProjectPage from "./pages/innerPages/ProjectPage";
import Team2Page from "./pages/innerPages/Team2Page";
import TeamDetailsPage from "./pages/innerPages/TeamDetailsPage";
import TeamPage from "./pages/innerPages/TeamPage";

// Inner Light

// Services Page
import ServiceDetailsPage from "./pages/servicesPages/ServiceDetailsPage";
import ServicesPage from "./pages/servicesPages/ServicesPage";

// Services Light

// Blog Pages
import Blog2ColumnPage from "./pages/blogPages/Blog2ColumnPage";
import Blog3ColumnPage from "./pages/blogPages/Blog3ColumnPage";
import BlogSingleWithSidebarPage from "./pages/blogPages/BlogSingleWithSidebarPage";
import BlogStandardPage from "./pages/blogPages/BlogStandardPage";
import BlogWithSidebarPage from "./pages/blogPages/BlogWithSidebarPage";

// Blog Light
import Blog2ColumnLightPage from "./pages/blogPages/Blog2ColumnLightPage";
import Blog3ColumnLightPage from "./pages/blogPages/Blog3ColumnLightPage";
import BlogSingleLightPage from "./pages/blogPages/BlogSingleLightPage";
import BlogSingleWithSidebarLightPage from "./pages/blogPages/BlogSingleWithSidebarLightPage";
import BlogStandardLightPage from "./pages/blogPages/BlogStandardLightPage";
import BlogWithSidebarLightPage from "./pages/blogPages/BlogWithSidebarLightPage";

import Home10 from "./pages/homePages/Home10";
import Home10Light from "./pages/homePages/Home10Light";
import Home11 from "./pages/homePages/Home11";
import Home11Light from "./pages/homePages/Home11Light";
import Home12 from "./pages/homePages/Home12";
import Home12Light from "./pages/homePages/Home12Light";
import Home13 from "./pages/homePages/Home13";
import Home13Light from "./pages/homePages/Home13Light";
import NotFoundPage from "./pages/innerPages/NotFoundPage";
import PrivacyPolicy from "./pages/innerPages/PrivacyPolicy";
import TermsAndConditions from "./pages/innerPages/TermsAndConditions";

const Routers = () => {
    return (
        <>
            <Routes>

                <Route path='/' element={<Home1 />}></Route>
                <Route path='/home-2' element={<Home2 />}></Route>
                <Route path='/home-3' element={<Home3 />}></Route>
                <Route path='/home-4' element={<Home4 />}></Route>
                <Route path='/home-5' element={<Home5 />}></Route>
                <Route path='/home-6' element={<Home6 />}></Route>
                <Route path='/home-7' element={<Home7 />}></Route>
                <Route path='/home-8' element={<Home8 />}></Route>
                <Route path='/home-9' element={<Home9 />}></Route>
                <Route path='/home-10' element={<Home10 />}></Route>
                <Route path='/home-11' element={<Home11 />}></Route>
                <Route path='/home-12' element={<Home12 />}></Route>
                <Route path='/home-13' element={<Home13 />}></Route>

                {/* Home Light  */}
                <Route path='/home-1-light' element={<Home1Light />}></Route>
                <Route path='/home-2-light' element={<Home2Light />}></Route>
                <Route path='/home-3-light' element={<Home3Light />}></Route>
                <Route path='/home-4-light' element={<Home4Light />}></Route>
                <Route path='/home-5-light' element={<Home5Light />}></Route>
                <Route path='/home-6-light' element={<Home6Light />}></Route>
                <Route path='/home-7-light' element={<Home7Light />}></Route>
                <Route path='/home-8-light' element={<Home8Light />}></Route>
                <Route path='/home-9-light' element={<Home9Light />}></Route>
                <Route path='/home-10-light' element={<Home10Light />}></Route>
                <Route path='/home-11-light' element={<Home11Light />}></Route>
                <Route path='/home-12-light' element={<Home12Light />}></Route>
                <Route path='/home-13-light' element={<Home13Light />}></Route>

                {/* Inner Pages */}
                <Route path='/about-us' element={<AboutUsPage />}></Route>
                <Route path='/about-2' element={<About2Page />}></Route>
                <Route path='/team' element={<TeamPage />}></Route>
                <Route path='/team-2' element={<Team2Page />}></Route>
                <Route path='/team-details/:id' element={<TeamDetailsPage />}></Route>
                <Route path='/project' element={<ProjectPage />}></Route>
                <Route path='/project-2' element={<Project2Page />}></Route>
                <Route path='/project-3' element={<Project3Page />}></Route>
                <Route path='/project-details/:id' element={<ProjectDetailsPage />}></Route>
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
                <Route path='/blog/:id' element={<BlogSingleWithSidebarPage />}></Route>

                {/* Services Page */}
                <Route path='/services' element={<ServicesPage />}></Route>
                <Route path='/services/:slug' element={<ServiceDetailsPage />}></Route>



                <Route path='/blog-2-column' element={<Blog2ColumnPage />}></Route>
                <Route path='/blog-2-column?:page?' element={<Blog2ColumnPage />}></Route>
                <Route path='/blog-3-column' element={<Blog3ColumnPage />}></Route>
                <Route path='/blog-3-column?:page?' element={<Blog3ColumnPage />}></Route>

                {/* Blog Light */}
                <Route path='/blog-standard-light' element={<BlogStandardLightPage />}></Route>
                <Route path='/blog-standard-light?:page?' element={<BlogStandardPage />}></Route>
                <Route path='/blog-with-sidebar-light' element={<BlogWithSidebarLightPage />}></Route>
                <Route path='/blog-with-sidebar-light?:page?' element={<BlogWithSidebarPage />}></Route>
                <Route path='/blog-2-column-light' element={<Blog2ColumnLightPage />}></Route>
                <Route path='/blog-2-column-light?:page?' element={<Blog2ColumnPage />}></Route>
                <Route path='/blog-3-column-light' element={<Blog3ColumnLightPage />}></Route>
                <Route path='/blog-3-column-light?:page?' element={<Blog3ColumnPage />}></Route>
                <Route path='/blog-single-light/:id' element={<BlogSingleLightPage />}></Route>
                <Route path='/blog-single-with-sidebar-light/:id' element={<BlogSingleWithSidebarLightPage />}></Route>

                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;