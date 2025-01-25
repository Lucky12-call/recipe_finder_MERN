import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { mealDetailById } from "../../config/api";
import { FaArrowRightLong } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const MealById = () => {
  const location = useLocation();
  const mealId = location.state.meal;

  const { data, refetch } = useQuery({
    queryKey: ["mealById"],
    queryFn: async () => {
      const { data } = await (mealId && axios.get(mealDetailById(mealId)));
      return data.meals[0];
    },
  });

  useEffect(() => {
    refetch();
  }, [mealId, refetch]);

  console.log(data)

  return (
    <div className="w-full md:w-[80%] min-h-[90vh] md:mx-auto mt-20 md:mt-40 p-2 md:p-0">
      <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400 text-center mb-20">
        How to Make Recipe
      </h1>
      <div className="flex flex-col md:flex-row md:items-center">
        <div>
          <img
            src={data?.strMealThumb}
            alt={data?.idMeal}
            className="h-60 md:h-72 w-full md:min-w-[450px] rounded-lg hover:scale-105 transition-transform"
          />
        </div>

        <div className="pt-5 md:px-10">
          <h1 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-5">
            {data?.strMeal}
          </h1>
          <h1 className="text-xl md:text-2xl italic">
            {data?.strArea}, {data?.strCategory}
          </h1>
          <h2 className="text-lg md:text-xl">
            Making Material,
            <p className="tracking-wide text-gray-700 text-lg md:text-xl">
              {data?.strIngredient1}- {data?.strMeasure1},{" "}
              {data?.strIngredient2}- {data?.strMeasure2},{" "}
              {data?.strIngredient3}- {data?.strMeasure3},{" "}
              {data?.strIngredient4}- {data?.strMeasure4},{" "}
              {data?.strIngredient5}- {data?.strMeasure5},{" "}
              {data?.strIngredient6}- {data?.strMeasure6},{" "}
              {data?.strIngredient7}- {data?.strMeasure7},{" "}
              {data?.strIngredient8}- {data?.strMeasure8},{" "}
              {data?.strIngredient9}- {data?.strMeasure9},{" "}
              {data?.strIngredient10}- {data?.strMeasure10},{" "}
              {data?.strIngredient11}- {data?.strMeasure11}.
            </p>
          </h2>

          <button className=" flex gap-3 items-center justify-center bg-yellow-400 hover:bg-yellow-500 px-4 md:px-6 py-2 md:py-3 mt-10 md:text-xl rounded-md hover:scale-110 transition-all">
            <a
              href={data?.strYoutube}
              className="flex gap-2 justify-between items-center  text-lg md:text-xl"
            >
              YouTube <FaArrowRightLong />
            </a>
          </button>
        </div>
      </div>

      <div className="text-lg md:text-xl my-5 md:my-10">
        <h2 className="text-lg md:text-xl">Steps For Making-</h2>
        <p className="tracking-wide text-gray-700 text-lg md:text-xl">
          {data?.strInstructions}
        </p>
      </div>
    </div>
  );
};

export default MealById;
