import { Link } from "react-router-dom";
import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";

// --- types.ts ---
export interface ServicePageFAQItem {
  id: string;
  title: string;
  content: string;
  show?: boolean;
}

export interface ServicePageProcessStep {
  number: string;
  title: string;
  content: string;
}

export interface ServicePageData {
  title: string;
  heroImage: string; // e.g. "/assets/img/banner/6.jpg"
  intro: {
    leftColParagraphs: string[];  // col-lg-7
    rightColParagraphs: string[]; // col-lg-5
    featureList: string[];
  };
  process: ServicePageProcessStep[];
  galleryImages: string[]; // 2 images
  faq: {
    heading: string;
    items: ServicePageFAQItem[];
    parentId: string;
  };
  whatWeDo: {
    heading: string;
    paragraphs: string[];
  };
  popularServicesLimit?: number; // default 3
}

// --- props (LEAN!) ---
interface ServiceDetailsProps {
  serviceInfo?: { title?: string }; // optional legacy
  sectionClass?: string;
  pageData: ServicePageData;        // everything comes from here
}

const ServiceDetailsContent = ({ serviceInfo, sectionClass, pageData }: ServiceDetailsProps) => {
  const titleFromProp = serviceInfo?.title;
  const {
    title,
    heroImage,
    intro,
    process,
    galleryImages,
    faq,
    whatWeDo,
    popularServicesLimit = 3,
  } = pageData;

  const resolvedTitle = titleFromProp || title;

  return (
    <div className={`services-details-area ${sectionClass ? sectionClass : ""}`}>
      <div className="container">
        <div className="services-details-items">

          {/* Hero */}
          <div className="row">
            <div className="col-xl-12">
              <div className="service-single-thumb">
                <img src={heroImage} alt="Service Banner" />
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="row">
            <div className="col-lg-7">
              <h2>{resolvedTitle}</h2>
              {intro.leftColParagraphs.map((p, i) => (
                <p key={`left-${i}`}>{p}</p>
              ))}
            </div>
            <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
              {intro.rightColParagraphs.map((p, i) => (
                <p key={`right-${i}`}>{p}</p>
              ))}
              {!!intro.featureList?.length && (
                <ul className="feature-list-item">
                  {intro.featureList.map((item, i) => (
                    <li key={`feat-${i}`}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Process */}
          {!!process?.length && (
            <div className="mt-50 mt-xs-20">
              <div className="process-style-two">
                {process.map((step) => (
                  <div className="process-style-two-item" key={step.number}>
                    <span>{step.number}</span>
                    <h4>{step.title}</h4>
                    <p>{step.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {!!galleryImages?.length && (
            <div className="row mt-80 mt-xs-50 gallery-two-columns">
              {galleryImages.slice(0, 2).map((src, i) => (
                <div className="col-md-6" key={`gal-${i}`}>
                  <img src={src} alt={`Gallery ${i + 1}`} />
                </div>
              ))}
            </div>
          )}

          {/* FAQ + What we do */}
          <div className="d-grid colums-2 mt-50">
            <div className="item">
              <div className="faq-style-one faq-style-two">
                <h2 className="mb-30">{faq.heading}</h2>
                <div className="accordion" id={faq.parentId}>
                  {faq.items.map(({ id, title, content, show }) => (
                    <div className="accordion-item" key={id}>
                      <h2 className="accordion-header" id={`heading${id}`}>
                        <button
                          className={`accordion-button ${show ? "" : "collapsed"}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${id}`}
                          aria-expanded={show ? "true" : "false"}
                          aria-controls={`collapse${id}`}
                        >
                          {title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${id}`}
                        className={`accordion-collapse collapse ${show ? "show" : ""}`}
                        aria-labelledby={`heading${id}`}
                        data-bs-parent={`#${faq.parentId}`}
                      >
                        <div className="accordion-body">
                          <p>{content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="item">
              <h2>{whatWeDo.heading}</h2>
              {whatWeDo.paragraphs.map((p, i) => (
                <p key={`wwd-${i}`}>{p}</p>
              ))}
            </div>
          </div>

          {/* Popular Services */}
          <div className="services-more mt-100 mt-xs-30">
            <h2 className="mb-20">Most popular services</h2>
            <div className="row">
              {ServicesV1Data.slice(0, popularServicesLimit).map((service: any) => (
                <div className="col-lg-4 col-md-6" key={service.id}>
                  <div className="item">
                    <img
                      className="regular-img"
                      src={`/assets/img/icon/${service.icon}`}
                      alt={service.title}
                      width={75}
                      height={60}
                    />
                    <img
                      className="light-img"
                      src={`/assets/img/icon/${service.iconLight}`}
                      alt={`${service.title} (light)`}
                      width={75}
                      height={60}
                    />
                    {/* Use slug, not id, to match your route */}
                    <h4><Link to={`/service-details/${service.slug}`}>{service.title}</Link></h4>
                    <p>{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsContent;
