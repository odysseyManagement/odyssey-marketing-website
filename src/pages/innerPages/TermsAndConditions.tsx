import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

const TermsAndConditions = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Faq</title>
            </Helmet>

         <LayoutV1>
        <Breadcrumb title="Terms And Conditions" breadCrumb="faq" />

        <div className='container'>
  <div className='row'>
    <div className='col-12 mb-5'>
      <h1 className="mb-4">Terms and Conditions</h1>
      <p><strong>Effective Date:</strong> 17th September 2025</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the services of <strong>Odyssey Management Group</strong> (“Company,” “we,” “our,” or “us”), you agree to comply with and be bound by these Terms and Conditions.
        If you do not agree, please do not use our services.
      </p>

      <h2>2. Use of Services</h2>
      <ul>
        <li>You agree to use our services only for lawful purposes.</li>
        <li>You must not use our services in any manner that could damage, disable, or interfere with the operation of our website or business.</li>
        <li>You are responsible for maintaining the confidentiality of any account credentials.</li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <p>
        All content, trademarks, logos, and materials on our website or provided through our services are the property of Odysses Management Group or its licensors.
        You may not reproduce, distribute, or create derivative works without our prior written consent.
      </p>

      <h2>4. Payment and Fees</h2>
      <p>
        Any fees for services provided must be paid in accordance with agreed terms.
        Failure to pay may result in suspension or termination of services.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Odysses Management Group shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
        Our total liability is limited to the amount paid by you for the services in question.
      </p>

      <h2>6. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to our services at any time, without prior notice, if you violate these Terms and Conditions.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction].
        Any disputes shall be resolved in the courts of [Insert Jurisdiction].
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We may update these Terms and Conditions from time to time.
        Updates will be posted on our website with a revised “Effective Date.”
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have questions about these Terms and Conditions, please contact us at:
      </p>
      <p>
        <strong>Odyssey Management Group</strong><br />

      </p>
    </div>
  </div>
</div>

        <DarkClass />

      </LayoutV1>
        </>
    );
};

export default TermsAndConditions;