import { Link } from "react-router-dom";
import useSidebarInfo from '../../hooks/useSidebarInfo';
import useSidebarMenu from '../../hooks/useSidebarMenu';
import useStickyMenu from '../../hooks/useStickyMenu';
import MainMenu from "./MainMenu";
import { default as logo, default as logoLight } from "/assets/img/logo.webp";

const HeaderV2 = () => {

    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const isMenuSticky = useStickyMenu();
    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();

    return (
        <>
            <header>
                {/* Start Navigation */}
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs nav-full-width navbar-fixed ${isMenuSticky ? "sticked" : ""} ${isOpen ? "pause-sticked" : ""}`}>
                    <div className="container-full d-flex justify-content-between align-items-center">

                        <div className="col-xl-2 col-lg-3">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/">
                                        <img src={logoLight} className="logo" alt="Logo" />
                                        <img src={logo} className="logo-dark" alt="Logo" />

                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                                <div className="left-info">
                            <MainMenu  navbarPlacement='navbar-center' />
                                </div>
                            </div>
                        </div>
                        <div className="attr-right"  style={{ minWidth: "500px" }}>
                            <div className="attr-nav flex">
                                <ul>
                                    <li className="button" style={{ minWidth: "200px" }}>
                                        <Link to="/contact-us">Become A Model</Link>
                                    </li><li className="button">
                                        <Link to="/contact-us">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} />
                </nav>
            </header>
        </>
    );
};

export default HeaderV2;