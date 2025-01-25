import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { searchByName } from "../../config/api";
import Loader from "../pages/Loader";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SearchRecipe = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["searchMeals"],
    queryFn: async () => {
      const { data } = await axios.get(searchByName(search));
      return data.meals;
    },
  });

  const handleClick = (meal) => {
    navigate("/search_recipe/meal_by_id", {
      replace: false,
      state: { meal },
    });
    setSearch("");
  };

  return (
    <div className="hideScroll h-[40vh] md:h-[60vh] w-full md:w-[100vh] flex md:justify-center flex-wrap gap-5 rounded-lg bg-white overflow-y-scroll absolute top-16">
      {isLoading ? (
        <Loader />
      ) : (
        data?.map((meal) => (
          <div
            key={meal.idMeal}
            onClick={() => handleClick(meal.idMeal)}
            className="h-64 w-40 md:w-48 rounded-lg shadow-xl p-2 hover:scale-110 transition-transform cursor-pointer"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.idMeal}
              className="h-28 w-full rounded-lg"
            />
            <h1 className="text-black text-center mt-2 font-medium text-lg">
              {meal.strMeal}
            </h1>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchRecipe;
