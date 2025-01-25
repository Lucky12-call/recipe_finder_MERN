import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { filterByCategory } from "../../../config/api";
import Loader from "../Loader";

const CategoryFood = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const foodCategory = location.state.category.strCategory;

  const { data, isLoading } = useQuery({
    queryKey: ["categoryFood"],
    queryFn: async () => {
      const { data } = await axios.get(filterByCategory(foodCategory));
      return data.meals;
    },
  });

  const handleClick = (meal) => {
    navigate("/category_food/meal_by_id", {
      replace: false,
      state: { meal },
    });
  };

  return (
    <div className="p-2 md:p-0 w-full min-h-[90vh] mt-20 md:mt-40">
      <h1 className="text-3xl md:text-4xl text-center font-semibold text-yellow-400 mb-10 md:mb-20 ">
        {foodCategory}
      </h1>
      <div
        className={`h-full w-full  ${
          isLoading ? "flex justify-center" : "grid grid-cols-2"
        } md:flex md:flex-wrap gap-5 justify-items-center md:justify-center mt-10`}
      >
        {isLoading ? (
          <Loader />
        ) : (
          data?.map((categoryFood) => (
            <div
              key={categoryFood.idMeal}
              onClick={() => handleClick(categoryFood.idMeal)}
              className="h-64 w-40 md:w-48 rounded-lg shadow-lg p-2  hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src={categoryFood.strMealThumb}
                alt={categoryFood.strMeal}
                className="h-32 w-full rounded-lg"
              />
              <h1 className="text-lg md:text-xl mt-5 text-black text-center">
                {categoryFood.strMeal}
              </h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryFood;
