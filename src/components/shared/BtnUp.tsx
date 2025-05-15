import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const BtnUp = () => {
  const [showBtn, setShowBtn] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 400) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const scrollBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      className={`hidden  ${
        showBtn ? " md:flex " : "hidden"
      } fixed bottom-10 right-2 rounded-lg bg-yellow-600 text-white w-10 h-10  items-center justify-center cursor-pointer z-50`}
      onClick={scrollBack}
    >
      <FaArrowUp size="30" />
    </button>
  );
};

export default BtnUp;
