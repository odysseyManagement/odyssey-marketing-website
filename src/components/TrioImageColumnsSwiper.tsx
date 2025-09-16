import { useEffect, useMemo, useRef, useState } from "react";

type Direction = "up" | "down";

function VerticalSlider({
  images,
  direction = "up",
  intervalMs = 2600,
  durationMs = 600,
  alt = "Slide image",
  className = "",
  height = 480, // <— explicit height so it always shows
}: {
  images: string[];
  direction?: Direction;
  intervalMs?: number;
  durationMs?: number;
  alt?: string;
  className?: string;
  height?: number;
}) {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Preload
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Loop
  useEffect(() => {
    const tick = () => {
      if (animating || images.length <= 1) return;
      const n = (current + 1) % images.length;
      setNext(n);
      setAnimating(true);
      window.setTimeout(() => {
        setCurrent(n);
        setNext(null);
        setAnimating(false);
      }, durationMs);
    };
    timerRef.current = window.setInterval(
      tick,
      intervalMs
    ) as unknown as number;
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [animating, current, durationMs, images.length, intervalMs]);

  const dirClass = direction === "up" ? "vs--up" : "vs--down";

  return (
    <div
      className={`position-relative overflow-hidden w-100 ${className}`}
      style={{ height }}
    >
      <style>{`
        .vs { position: relative; width: 100%; height: 100%; }
        .vs__layer { position: absolute; inset: 0; will-change: transform, opacity; }
        .vs__img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .vs--idle .vs__current { transform: translateY(0); }
        .vs--idle .vs__incoming { transform: translateY(100%); opacity: 0; }
        .vs--down.vs--idle .vs__incoming { transform: translateY(-100%); opacity: 0; }

        .vs--anim.vs--up .vs__current   { animation: vs-slide-up-out var(--vs-dur) ease both; }
        .vs--anim.vs--up .vs__incoming { animation: vs-slide-up-in  var(--vs-dur) ease both; }

        .vs--anim.vs--down .vs__current   { animation: vs-slide-down-out var(--vs-dur) ease both; }
        .vs--anim.vs--down .vs__incoming { animation: vs-slide-down-in  var(--vs-dur) ease both; }

        @keyframes vs-slide-up-out   { from { transform: translateY(0) }      to { transform: translateY(-100%) } }
        @keyframes vs-slide-up-in    { from { transform: translateY(100%) }   to { transform: translateY(0) } }
        @keyframes vs-slide-down-out { from { transform: translateY(0) }      to { transform: translateY(100%) } }
        @keyframes vs-slide-down-in  { from { transform: translateY(-100%) }  to { transform: translateY(0) } }
      `}</style>

      <div
        className={`vs ${dirClass} ${animating ? "vs--anim" : "vs--idle"}`}
        style={{ ["--vs-dur" as any]: `${durationMs}ms` }}
      >
        <div className="vs__layer vs__current">
          <img src={images[current]} alt={alt} className="vs__img" />
        </div>
        {next !== null && (
          <div className="vs__layer vs__incoming">
            <img src={images[next]} alt={alt} className="vs__img" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function TwoColImageWithSliders() {
  const topImage =
    "/assets/img/65febde90e8860067f47eaa4_home_center-journey_imgcopy.webp";

  const leftImages = useMemo(
    () => [
      "/assets/img/ms/65febc851ad009d27a3e559b_Property.webp",
      "/assets/img/ms/65febc8561e9120bf574b24d_Property1=3-1.webp",
      "/assets/img/ms/65febc8595074243de0971b8_Property1=2-1.webp",
    ],
    []
  );

  const rightImages = useMemo(
    () => [
      "/assets/img/ms/65febd47a19da4234047fc11_Property1=3.webp",
      "/assets/img/ms/65febd47ef634cea51ddca2f_Property1=1.webp",
      "/assets/img/ms/65febd472890b74130ea8696_Property1=2.webp",
    ],
    []
  );

  return (
    <div className="container py-4 mb-5 mt-5">
<div className="row mb-5 align-items-center">
  {/* LEFT COLUMN — THE JOURNEY */}
  <div className="col-lg-7">
    <h2 className="mb-4">Elevating Your Journey to the Pinnacle</h2>
    <p>
      At <strong>Odyssey</strong>, we believe every career is a voyage — one that
      deserves to be guided with precision, vision, and purpose. We take you
      beyond management and into transformation, unlocking pathways to influence,
      freedom, and global recognition.
    </p>
    <p>
      Our philosophy is simple: true success is not only about reaching the top,
      but about embracing the lifestyle, opportunities, and legacy that come with
      it. With Odyssey, your story becomes more than progress — it becomes a
      journey of prestige and power.
    </p>
  </div>

  {/* RIGHT COLUMN — SUPPORTING THEMES */}
  <div className="col-lg-5 ps-lg-5 ps-md-3 mt-4 mt-lg-0">
    <p>
      Each step forward is carefully designed to elevate your brand, amplify your
      presence, and connect you with the world’s most exclusive circles. This is
      how Odyssey turns ambition into achievement.
    </p>
    <ul className="feature-list-item">
      <li>Strategic growth & global positioning</li>
      <li>Elite brand curation & storytelling</li>
      <li>Access to exclusive networks & opportunities</li>
    </ul>
  </div>
</div>


      {/* TOP IMAGE */}
      <div className="row  position-relative">
        <div
          className="position-absolute top-0 start-50 translate-middle-x "
          style={{ maxWidth: "2500px", zIndex: 99 }}
        >
          <div
            className="rounded-3 overflow-hidden shadow-sm"
            style={{ maxWidth: "2500px", width: "100%" }}
          >
            <img
              src={topImage}
              alt="Top main"
              className="img-fluid w-100"
              style={{ objectFit: "contain", maxHeight: "569px" }}
            />
          </div>
        </div>
      </div>

      {/* 2-COLUMN SLIDERS */}
      <div className="row g-4 align-items-stretch">
        <div className="col-12 col-md-4">
          <VerticalSlider
            images={leftImages}
            direction="up"
            height={520}
            className="bg-light rounded-3 shadow-sm"
          />
        </div>
        <div className="col-12 col-md-3"></div>
        <div className="col-12 col-md-4">
          <VerticalSlider
            images={rightImages}
            direction="down"
            height={520}
            className="bg-light rounded-3 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
