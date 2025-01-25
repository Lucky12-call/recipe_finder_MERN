import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { filterByMainIngredient } from "../../../config/api";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import IngredientList from "./IngredientList";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

const FilterByIngredient = () => {
  const navigate = useNavigate();
  const mainIngredient = useSelector((state) => state.meals.mainIngredient);

  const { data, refetch, isRefetching } = useQuery({
    queryKey: ["filterByMainIngredient"],
    queryFn: async () => {
      const { data } = await (
        axios.get(filterByMainIngredient(mainIngredient)));
      return data.meals;
    },
  });

  const handleClick = (meal) => {
    navigate("/filter_by_ingredient/meal_by_id", {
      replace: false,
      state: { meal },
    });
  };

  useEffect(() => {
    refetch();
  }, [mainIngredient, refetch]);

  return (
    <div className="p-2 md:p-0 w-full min-h-[90vh] ">
      <div className="h-24 w-full flex flex-col md:flex-row justify-between items-center md:px-10 mt-20 md:shadow-lg">
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400 my-5 md:my-0 ">
          SEARCH BY INGREDIENT
        </h1>
        <IngredientList />
      </div>
      <div
        className={`h-full w-full  ${
          isRefetching ? "flex justify-center" : "grid grid-cols-2"
        } md:flex md:flex-wrap gap-5 justify-items-center md:justify-center mt-10`}
      >
        {isRefetching ? (
          <Loader />
        ) : (
          data?.map((byIngredient) => (
            <div
              key={byIngredient.idMeal}
              onClick={() => handleClick(byIngredient.idMeal)}
              className="h-64 w-40 md:w-48 rounded-lg shadow-lg p-2  hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src={byIngredient.strMealThumb}
                alt={byIngredient.strMeal}
                className="h-32 w-full rounded-lg"
              />
              <h1 className="text-lg md:text-xl mt-5 text-black text-center">
                {byIngredient.strMeal}
              </h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FilterByIngredient;
