import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { randomMeal } from "../../config/api";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { useRef } from "react";
import { useEffect } from "react";
import { animateBox } from "./animation/animation";

const TrendingMeal = () => {
  const trendingMeal = useRef();

  const { data } = useQuery({
    queryKey: ["trendingMeal"],
    queryFn: async () => {
      const { data } = await axios.get(randomMeal());
      return data.meals[0];
    },
  });

  useEffect(() => {
    animateBox(trendingMeal);
  }, []);

  return (
    <div ref={trendingMeal} className="p-2 md:p-0 mt-20 md:mt-40">
      <h1 className="flex gap-2 md:gap-4 justify-center items-center text-2xl md:text-4xl font-semibold text-yellow-400 text-center mb-10 md:mb-20">
        TRENDING FOOD <MdOutlineFastfood className="text-yellow-400" />
      </h1>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <img
            src={data?.strMealThumb}
            alt={data?.idMeal}
            className="h-60 md:h-72 w-full md:min-w-[450px] rounded-lg hover:scale-105 transition-transform"
          />
        </div>

        <div className="pt-5 md:px-10">
          <h1 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-5">
            {data?.strMeal}
          </h1>
          <h1 className="text-xl md:text-2xl italic">
            {data?.strArea}, {data?.strCategory}.
          </h1>
          <p className="tracking-wide text-gray-700 text-lg md:text-xl">
            {data?.strInstructions <= 250
              ? data?.strInstructions
              : data?.strInstructions.slice(0, 250)}
            ...
          </p>
          <button className=" flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 px-4 md:px-6 py-2 md:py-3 mt-5 rounded-md hover:scale-110 transition-all">
            <a
              href={data?.strYoutube}
              className="flex gap-2 justify-between items-center  text-lg md:text-xl "
            >
              YouTube <FaArrowRightLong />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingMeal;
