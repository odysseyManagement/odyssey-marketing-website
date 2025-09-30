import React, { useEffect, useMemo, useRef, useState } from "react";
import TestimonialV3Data from "../../assets/jsonData/testimonial/TestimonialV3Data.json";
import SingleTestimonialV3 from "./SingleTestimonialV3";
import shape14 from "/assets/img/shape/14.png";

interface DataType {
  sectionClass?: string;
  /** ms between slides */
  autoPlayDelay?: number;
  /** slide animation ms */
  transitionMs?: number;
}

const useSlidesPerView = () => {
  const [spv, setSpv] = useState<number>(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    if (w >= 1024) return 4;
    if (w >= 640) return 3;
    return 2;
  });

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setSpv(w >= 1024 ? 4 : w >= 640 ? 3 : 2);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return spv;
};

const TestimonialV4: React.FC<DataType> = ({
  sectionClass,
  autoPlayDelay = 3000,
  transitionMs = 500,
}) => {
  const data = TestimonialV3Data;
  const slidesPerView = useSlidesPerView();

  // Build an extended list for seamless infinite loop:
  const { extended, headCount, tailCount } = useMemo(() => {
    const head = data.slice(0, slidesPerView);
    const tail = data.slice(-slidesPerView);
    return {
      extended: [...tail, ...data, ...head],
      headCount: slidesPerView,
      tailCount: slidesPerView,
    };
    // re-compute if spv changes or data changes length
  }, [data, slidesPerView]);

  // We start on the first "real" page (after the prepended tail clones)
  const [index, setIndex] = useState<number>(tailCount);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const hoverRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  const total = data.length;
  const pageCount = Math.ceil(total / slidesPerView);
  const currentPage = Math.floor((index - tailCount) / slidesPerView) % pageCount;

  // Auto-play
  useEffect(() => {
    const el = hoverRef.current;
    let paused = false;

    const start = () => {
      stop();
      intervalRef.current = window.setInterval(() => {
        if (!paused) {
          next();
        }
      }, autoPlayDelay);
    };
    const stop = () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const onEnter = () => (paused = true);
    const onLeave = () => (paused = false);

    start();
    el?.addEventListener("mouseenter", onEnter);
    el?.addEventListener("mouseleave", onLeave);

    return () => {
      stop();
      el?.removeEventListener("mouseenter", onEnter);
      el?.removeEventListener("mouseleave", onLeave);
    };
  }, [autoPlayDelay, slidesPerView, total]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Handle the "teleport" when we cross clone boundaries
  const onTransitionEnd = () => {
    const firstReal = tailCount;
    const lastReal = tailCount + total - 1;

    if (index > lastReal) {
      // jumped past end → reset to equivalent real index
      setIsAnimating(false);
      setIndex(firstReal + ((index - firstReal) % total));
    } else if (index < firstReal) {
      // jumped past start → reset to end slice
      setIsAnimating(false);
      setIndex(lastReal - ((firstReal - index - 1) % total));
    }
  };

  // Re-enable animation after a teleport frame
  useEffect(() => {
    if (!isAnimating) {
      // next tick turn animations back on
      const t = window.setTimeout(() => setIsAnimating(true), 20);
      return () => window.clearTimeout(t);
    }
  }, [isAnimating]);

  const next = () => setIndex((i) => i + slidesPerView);
  const prev = () => setIndex((i) => i - slidesPerView);
  const goToPage = (p: number) => {
    // page -> target absolute index in extended
    const target = tailCount + p * slidesPerView;
    setIndex(target);
  };

  // Drag / swipe support (basic)
  const drag = useRef<{ startX: number; delta: number; dragging: boolean }>({
    startX: 0,
    delta: 0,
    dragging: false,
  });

  const onPointerDown: React.PointerEventHandler = (e) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = { startX: e.clientX, delta: 0, dragging: true };
    setIsAnimating(false);
  };
  const onPointerMove: React.PointerEventHandler = (e) => {
    if (!drag.current.dragging) return;
    drag.current.delta = e.clientX - drag.current.startX;
  };
  const onPointerUp: React.PointerEventHandler = (e) => {
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    const threshold = 40; // px
    if (drag.current.delta <= -threshold) next();
    else if (drag.current.delta >= threshold) prev();
    setIsAnimating(true);
    drag.current.dragging = false;
    drag.current.delta = 0;
  };

  // Track style
  const percentage = 100 / slidesPerView;
  const trackTranslate = -(index * percentage);

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

        <div className="container" ref={hoverRef}>
          <div className="row">
            <div className="col-lg-12">
              {/* Controls (optional) */}


              {/* Carousel viewport */}
              <div
                className="position-relative overflow-hidden"
                style={{ width: "100%" }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
              >
                {/* Track */}
                <div
                  onTransitionEnd={onTransitionEnd}
                  style={{
                    display: "flex",
                    willChange: "transform",
                    transform: `translate3d(${trackTranslate}%, 0, 0)`,
                    transition: isAnimating ? `transform ${transitionMs}ms ease` : "none",
                    // track width is implicit via flex children
                  }}
                >
                  {extended.map((t, i) => (
                    <div
                      key={`${t.id ?? i}-${i}`}
                      style={{
                        flex: `0 0 ${percentage}%`,
                        maxWidth: `${percentage}%`,
                        paddingLeft: 8,
                        paddingRight: 8,
                        boxSizing: "border-box",
                      }}
                    >
                      <SingleTestimonialV3 testimonial={t} />
                    </div>
                  ))}
                </div>
              </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={prev}
                  className="btn btn-outline-secondary"
                >
                  ‹
                </button>

                <button
                  type="button"
                  aria-label="Next"
                  onClick={next}
                  className="btn btn-outline-secondary"
                >
                  ›
                </button>
              </div>

              {/* Optional: tiny pagination dots (pure CSS buttons above already handle this) */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialV4;
