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

export default function CityShowcase({ title = "ODYSSEY MANAGEMENT", cities = defaultCities }) {
  return (
    <section className={styles.wrap}>
      <div className={styles.title} aria-hidden="true">
        <span>{title} </span>
      </div>

      <div className={styles.row}>
        {cities.map((c) => (
          <div key={c.name} className={styles.card}>
            <img src={c.image} alt={c.alt ?? c.name} className={styles.image} />
            <div className={styles.label}>
              <span className={styles.city}>{c.name}</span>
              <span className={styles.sub}>Global Branches ▸</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
