import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Dixor - Faq</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Privacy Policy" breadCrumb="faq" />
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <p>
                <strong>Effective Date:</strong> 17 September 2025
              </p>

              <h2>1. Information We Collect</h2>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email, phone
                  number, mailing address, and other identifiers you provide.
                </li>
                <li>
                  <strong>Business Information:</strong> Company name, job
                  title, and professional details when engaging in business with
                  us.
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address, browser
                  type, device details, cookies, and usage data.
                </li>
                <li>
                  <strong>Financial Information:</strong> Payment details
                  (processed securely via third-party providers).
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>To provide, manage, and improve our services</li>
                <li>
                  To communicate with you regarding inquiries, updates, and
                  promotions
                </li>
                <li>To process payments and manage transactions</li>
                <li>
                  To comply with legal obligations and enforce our agreements
                </li>
                <li>
                  To personalize user experiences and enhance website
                  functionality
                </li>
              </ul>

              <h2>3. Sharing of Information</h2>
              <p>
                We do not sell your personal information. We may share it only
                in these cases:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> With trusted vendors who
                  assist us (e.g., IT, payment processors).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  regulation.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of a merger,
                  acquisition, or asset sale.
                </li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement safeguards to protect your information, but no
                system is 100% secure.
              </p>

              <h2>5. Your Privacy Rights</h2>
              <p>You may have rights depending on your location, such as:</p>
              <ul>
                <li>Accessing the information we hold about you</li>
                <li>Requesting corrections or updates</li>
                <li>Requesting deletion of your data</li>
                <li>Opting out of marketing communications</li>
              </ul>
              <p>Contact us to exercise these rights.</p>

              <h2>6. Cookies & Tracking</h2>
              <p>
                We use cookies to enhance your experience. You can manage cookie
                settings in your browser.
              </p>

              <h2>7. Third-Party Links</h2>
              <p>
                Our site may link to external sites. We are not responsible for
                their privacy practices.
              </p>

              <h2>8. Children’s Privacy</h2>
              <p>
                Our services are not directed to individuals under 18, and we do
                not knowingly collect their data.
              </p>

              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy. Any changes will be posted
                with a revised “Effective Date.”
              </p>

              <h2>10. Contact Us</h2>
              <p>If you have questions, contact us at:</p>
              <p>
                <strong>Odyssey Management Group</strong>
                <br />
                Email: enquiries@odysseymanagementgroup.com
                <br />
                Phone: [Insert Phone Number]
                <br />
                Address: [Insert Company Address]
              </p>
            </div>
          </div>
        </div>
        <DarkClass />

      </LayoutV1>
    </>
  );
};

export default PrivacyPolicy;
