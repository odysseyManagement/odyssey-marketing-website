import ReactCountryFlag from "react-country-flag";

interface ModelData {
  id?: number;
  name: string;
  age: number;
  height_cm: number;
  nationality: string;
  image: string;
  countryCode?: string; // e.g. "PL", "FR", "IT"
}

const SingleTestimonialV3 = ({ testimonial }: { testimonial: ModelData }) => {
  const { name, age, height_cm, nationality, image, countryCode } = testimonial;

  return (
    <div>
      <div
        className="testimonial-style-three-item relative rounded overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "350px",
        }}
      >
        {/* Info bar fixed at bottom */}
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4">
        <h4 className="font-semibold text-lg">
          {" "}
          {countryCode && (
            <ReactCountryFlag
              countryCode={countryCode}
              svg
              style={{
                width: "2em",
                height: "2em",
                borderRadius: "0.25rem",
              }}
              title={nationality}
            />
          )}{" "}
          {name}
        </h4>
        <span className="text-sm block">
          {age} years old
          <p>
            {" "}
            {nationality} • {height_cm} cm
          </p>
        </span>
      </div>
    </div>
  );
};

export default SingleTestimonialV3;
