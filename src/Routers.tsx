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
import AboutUsPage from "./pages/innerPages/AboutUsPage";
import About2Page from "./pages/innerPages/About2Page";
import TeamPage from "./pages/innerPages/TeamPage";
import Team2Page from "./pages/innerPages/Team2Page";
import TeamDetailsPage from "./pages/innerPages/TeamDetailsPage";
import ProjectPage from "./pages/innerPages/ProjectPage";
import Project2Page from "./pages/innerPages/Project2Page";
import Project3Page from "./pages/innerPages/Project3Page";
import ProjectDetailsPage from "./pages/innerPages/ProjectDetailsPage";
import ContactUsPage from "./pages/innerPages/ContactUsPage";
import FaqPage from "./pages/innerPages/FaqPage";

// Inner Light
import AboutUsLightPage from "./pages/innerPages/AboutUsLightPage";
import About2LightPage from "./pages/innerPages/About2LightPage";
import TeamLightPage from "./pages/innerPages/TeamLightPage";
import Team2LightPage from "./pages/innerPages/Team2LightPage";
import TeamDetailsLightPage from "./pages/innerPages/TeamDetailsLightPage";
import ProjectLightPage from "./pages/innerPages/ProjectLightPage";
import Project2LightPage from "./pages/innerPages/Project2LightPage";
import Project3LightPage from "./pages/innerPages/Project3LightPage";
import ProjectDetailsLightPage from "./pages/innerPages/ProjectDetailsLightPage";
import ContactUsLightPage from "./pages/innerPages/ContactUsLightPage";
import FaqLightPage from "./pages/innerPages/FaqLightPage";

// Services Page
import ServicesPage from "./pages/servicesPages/ServicesPage";
import Services2Page from "./pages/servicesPages/Services2Page";
import Services3Page from "./pages/servicesPages/Services3Page";
import Services4Page from "./pages/servicesPages/Services4Page";
import ServiceDetailsPage from "./pages/servicesPages/ServiceDetailsPage";

// Services Light
import ServicesLightPage from "./pages/servicesPages/ServicesLightPage";
import Services2LightPage from "./pages/servicesPages/Services2LightPage";
import Services3LightPage from "./pages/servicesPages/Services3LightPage";
import ServiceDetailsLightPage from "./pages/servicesPages/ServiceDetailsLightPage";
import Services4LightPage from "./pages/servicesPages/Services4LightPage";

// Blog Pages
import BlogStandardPage from "./pages/blogPages/BlogStandardPage";
import BlogWithSidebarPage from "./pages/blogPages/BlogWithSidebarPage";
import Blog2ColumnPage from "./pages/blogPages/Blog2ColumnPage";
import Blog3ColumnPage from "./pages/blogPages/Blog3ColumnPage";
import BlogSinglePage from "./pages/blogPages/BlogSinglePage";
import BlogSingleWithSidebarPage from "./pages/blogPages/BlogSingleWithSidebarPage";

// Blog Light
import BlogStandardLightPage from "./pages/blogPages/BlogStandardLightPage";
import BlogWithSidebarLightPage from "./pages/blogPages/BlogWithSidebarLightPage";
import Blog2ColumnLightPage from "./pages/blogPages/Blog2ColumnLightPage";
import Blog3ColumnLightPage from "./pages/blogPages/Blog3ColumnLightPage";
import BlogSingleLightPage from "./pages/blogPages/BlogSingleLightPage";
import BlogSingleWithSidebarLightPage from "./pages/blogPages/BlogSingleWithSidebarLightPage";

import NotFoundPage from "./pages/innerPages/NotFoundPage";
import Home10 from "./pages/homePages/Home10";
import Home11 from "./pages/homePages/Home11";
import Home12 from "./pages/homePages/Home12";
import Home13 from "./pages/homePages/Home13";
import Home10Light from "./pages/homePages/Home10Light";
import Home11Light from "./pages/homePages/Home11Light";
import Home12Light from "./pages/homePages/Home12Light";
import Home13Light from "./pages/homePages/Home13Light";

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

                {/* Inner Light  */}
                <Route path='/about-us-light' element={<AboutUsLightPage />}></Route>
                <Route path='/about-2-light' element={<About2LightPage />}></Route>
                <Route path='/team-light' element={<TeamLightPage />}></Route>
                <Route path='/team-2-light' element={<Team2LightPage />}></Route>
                <Route path='/team-details-light/:id' element={<TeamDetailsLightPage />}></Route>
                <Route path='/project-light' element={<ProjectLightPage />}></Route>
                <Route path='/project-2-light' element={<Project2LightPage />}></Route>
                <Route path='/project-3-light' element={<Project3LightPage />}></Route>
                <Route path='/project-details-light/:id' element={<ProjectDetailsLightPage />}></Route>
                <Route path='/contact-us-light' element={<ContactUsLightPage />}></Route>
                <Route path='/faq-light' element={<FaqLightPage />}></Route>

                {/* Services Page */}
                <Route path='/services' element={<ServicesPage />}></Route>
                <Route path='/services-2' element={<Services2Page />}></Route>
                <Route path='/services-3' element={<Services3Page />}></Route>
                <Route path='/services-4' element={<Services4Page />}></Route>
                <Route path='/service-details/:id' element={<ServiceDetailsPage />}></Route>

                {/* Services Light */}
                <Route path='/services-light' element={<ServicesLightPage />}></Route>
                <Route path='/services-2-light' element={<Services2LightPage />}></Route>
                <Route path='/services-3-light' element={<Services3LightPage />}></Route>
                <Route path='/services-4-light' element={<Services4LightPage />}></Route>
                <Route path='/service-details-light/:id' element={<ServiceDetailsLightPage />}></Route>

                {/* Blog Pages */}
                <Route path='/blog-standard' element={<BlogStandardPage />}></Route>
                <Route path='/blog-standard?:page?' element={<BlogStandardPage />}></Route>
                <Route path='/blog-with-sidebar' element={<BlogWithSidebarPage />}></Route>
                <Route path='/blog-with-sidebar?:page?' element={<BlogWithSidebarPage />}></Route>
                <Route path='/blog-2-column' element={<Blog2ColumnPage />}></Route>
                <Route path='/blog-2-column?:page?' element={<Blog2ColumnPage />}></Route>
                <Route path='/blog-3-column' element={<Blog3ColumnPage />}></Route>
                <Route path='/blog-3-column?:page?' element={<Blog3ColumnPage />}></Route>
                <Route path='/blog-single/:id' element={<BlogSinglePage />}></Route>
                <Route path='/blog-single-with-sidebar/:id' element={<BlogSingleWithSidebarPage />}></Route>

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