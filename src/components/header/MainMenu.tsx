/* eslint-disable no-unused-vars */
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

interface DataType {
  navbarPlacement?: string;
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ul
        className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`}
        data-in="fadeInDown"
        data-out="fadeOutUp"
      >
        <li className="dropdown">
          <Link
            to="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            About
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/global-branches">Global Branches</Link>
            </li>
            <li>
              <Link to="/our-values">Our Values</Link>
            </li>
            <li>
              <Link to="/our-team">Our Team</Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link
            to="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Our Services
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/services/account-audit">Account Audit</Link>
            </li>
            <li>
              <Link to="/services/market-research">Market Research</Link>
            </li>
            <li>
              <Link to="/services/elite-branding">Elite Branding</Link>
            </li>
            <li>
              <Link to="/services/growth-management">Growth Management</Link>
            </li>
            <li>
              <Link to="/services/coaching">Comprehensive Coaching</Link>
            </li>
            <li>
              <Link to="/services/support-ecosystem">Support Ecosystem</Link>
            </li>
            <li>
              <Link to="/services/networking">Premier Networking</Link>
            </li>
            <li>
              <Link to="/services/event-access">Exclusive Event Access</Link>
            </li>
            <li>
              <Link to="/services/chatting-profit-maximisation">
                Chatting Profit Maximisation
              </Link>
            </li>
            <li>
              <Link to="/services/ultimate-content-creation">
                Ultimate Content Creation
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/talent">Talent</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
          <li>
          <Link to="/contact-us">Contact</Link>
        </li>
      </ul>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="35mvh-2oII8"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default MainMenu;
