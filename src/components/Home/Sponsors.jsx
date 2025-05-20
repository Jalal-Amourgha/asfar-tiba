import { sponsorsIcons } from "@/constants";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="container mt-20 flex flex-wrap justify-between md:justify-center gap-1 md:gap-4 lg:gap-5  xl:gap-6">
      {sponsorsIcons.map((item) => (
        <div key={item.id}>
          <Image
            src={item.icon}
            className="max-w-[110px] xl:max-w-[130px] mx-auto"
            alt="icon"
          />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
