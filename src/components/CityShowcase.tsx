import { useEffect, useId, useRef, useState } from "react";
import styles from "./CityShowcase.module.css";

export type City = {
  name: string;
  image: string;
  alt?: string;
};

const defaultCities: City[] = [
  { name: "DUBAI",       image: "/assets/img/locations/dubai.webp" },
  { name: "MIAMI",       image: "/assets/img/locations/miami.webp" },
  { name: "NEW YORK",    image: "/assets/img/locations/newyork.webp" },
  { name: "LOS ANGELES", image: "/assets/img/locations/la.webp" },
  { name: "SYDNEY",      image: "/assets/img/locations/sydney.webp" },
  { name: "LONDON",      image: "/assets/img/locations/london.webp" },
  { name: "GOLD COAST",  image: "/assets/img/locations/goldcoast.webp" },
];

type Props = {
  title?: string;
  cities?: City[];
  autoSlideInterval?: number;   // mobile auto-slide interval (ms)
  hoverDelay?: number;          // desktop: delay before switching active card (ms)
};

export default function CityShowcase({
  title = "ODYSSEY MANAGEMENT",
  cities = defaultCities,
  autoSlideInterval = 3500,
  hoverDelay = 90,
}: Props) {
  const listId = useId();
  const rowRef = useRef<HTMLDivElement>(null);

  // ---- MOBILE auto-slide (unchanged) ----
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const isMobile = matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    let index = 0;
    const timer = setInterval(() => {
      index = (index + 1) % cities.length;
      row.scrollTo({
        left: row.clientWidth * index * 0.82, // ~82vw per card
        behavior: "smooth",
      });
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [cities.length, autoSlideInterval]);

  // ---- DESKTOP smoothing: controlled "active" card instead of raw :hover ----
  const [active, setActive] = useState<number | null>(null);
  const [hovering, setHovering] = useState(false);
  const delayRef = useRef<number | null>(null);

  const isPointerFine = () => matchMedia("(pointer: fine)").matches;

  const scheduleActivate = (idx: number) => {
    if (!isPointerFine()) return;
    if (delayRef.current) window.clearTimeout(delayRef.current);
    delayRef.current = window.setTimeout(() => setActive(idx), hoverDelay);
  };

  const clearActive = () => {
    if (delayRef.current) window.clearTimeout(delayRef.current);
    setActive(null);
  };

  return (
    <section className={styles.wrap} aria-labelledby={listId}>
      <div className={styles.title} aria-hidden="true">

      </div>
      <h2 id={listId} className={styles.srOnly}>{title}</h2>

      <div
        ref={rowRef}
        className={styles.row}
        role="list"
        aria-label="Global branches"
        data-hovering={hovering && isPointerFine() ? "true" : "false"}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => { setHovering(false); clearActive(); }}
      >
        {cities.map((c, i) => (
          <article
            key={c.name}
            className={styles.card}
            role="listitem"
            tabIndex={0}
            aria-label={c.name}
            data-active={active === i ? "true" : "false"}
            onMouseEnter={() => scheduleActivate(i)}
            onFocus={() => setActive(i)}   // keyboard focus expands smoothly too
            onBlur={() => { if (active === i) setActive(null); }}
          >
            <img
              src={c.image}
              alt={c.alt ?? c.name}
              className={styles.image}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 85vw, 14vw"
            />
            <div className={styles.scrim} aria-hidden="true" />
            <div className={styles.label}>
              <span className={styles.city} aria-hidden="true">{c.name}</span>
              <span className={styles.sub}>Global Branches ▸</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
