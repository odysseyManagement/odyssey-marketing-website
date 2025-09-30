import { Autoplay, Keyboard, Pagination, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialV3Data from "../../../src/assets/jsonData/testimonial/TestimonialV3Data.json";
import SingleTestimonialV3 from "./SingleTestimonialV3";
import shape14 from "/assets/img/shape/14.png";

interface DataType { sectionClass?: string }

const TestimonialV3 = ({ sectionClass }: DataType) => {
  const useVirtual = TestimonialV3Data.length > 30;

  return (
    <>
      <div className={`testimonial-style-three-area default-padding ${sectionClass ?? ""}`}>
        <div className="shape-style-one">
          <img className="upDownScrol" src={shape14} alt="Image Not Found" loading="lazy" />
        </div>

        <div className="container mt-30" />
        <div className="container">
          <div className="testimonial-heading">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-large-gradient pb-4 pb-30">Talent Showcase</h2>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                className="testimonial-style-three-carousel"
                style={{ willChange: 'transform' }}
                // Performance-friendly defaults on phones
                slidesPerView={3}
                spaceBetween={16}
                speed={500}
                loop={false}
                watchSlidesProgress
                preloadImages={false}
                lazy={{ checkInView: true }}

                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}

                // Use built-in UI (no DOM queries)
                pagination={{ clickable: true }}
                keyboard={{ enabled: true, onlyInViewport: true }}

                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 4, spaceBetween: 30, loop: true }
                }}

                // Smooth with many items
                virtual={useVirtual}
                modules={[Pagination, Keyboard, Autoplay, Virtual]}
              >
                {/* No custom .swiper-wrapper here */}
                {TestimonialV3Data.map((t, idx) => (
                  <SwiperSlide key={t.id ?? idx} virtualIndex={idx}>
                    <SingleTestimonialV3 testimonial={t} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialV3;
