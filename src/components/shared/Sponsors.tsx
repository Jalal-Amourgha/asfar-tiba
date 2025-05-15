import { sponsors } from "../../constants";

const Sponsors = () => {
  return (
    <div className="container mt-100 flex flex-wrap justify-center gap-1 md:gap-4 lg:gap-5  xl:gap-6">
      {sponsors.map((item) => (
        <div key={item.id}>
          <img
            src={item.img}
            className="max-w-[80px] md:max-w-[110px] lg:max-w-[140px] xl:max-w-[150px] mx-auto"
            alt="icon"
          />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
