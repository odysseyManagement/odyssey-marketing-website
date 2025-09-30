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
    <>
    <div
      className="testimonial-style-three-item relative overflow-hidden rounded"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "420px", // 🔥 fixed height for every card
      }}
    >
      </div>
         {/* Info bar at bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4">
        <h4 className="font-semibold text-lg flex items-center gap-2">
          {countryCode && (
            <ReactCountryFlag
              countryCode={countryCode}
              svg
              style={{ width: "1.5em", height: "1.5em", borderRadius: "0.25rem" }}
              title={nationality}
            />
          )}
          <span> {name}</span>
        </h4>
        <div className="text-sm mt-1">
          <div>{age} years old</div>
          <div>
            {nationality} • {height_cm} cm
          </div>
        </div>
      </div>
      </>
  );
};

export default SingleTestimonialV3;
