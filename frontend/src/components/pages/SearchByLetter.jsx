import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { allMealsByLetter } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchByLetter = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const letter = useSelector((state) => state.meals.letter);

  const { data, isRefetching } = useQuery({
    queryKey: ["searchByLetter"],
    queryFn: async () => {
      const { data } = await (letter && axios.get(allMealsByLetter(letter)));
      return data.meals;
    },
  });

  const handleClick = (meal) => {
    navigate("/filter_by_first_letter/meal_by_id", {
      replace: false,
      state: { meal },
    });
  };

  return (
    <div className="p-2 md:p-0 min-h-screen mt-20 md:mt-28">
      <div className="h-24 w-full flex flex-col md:flex-row justify-between items-center md:px-10 md:shadow-lg">
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400 ">
        SEARCH BY FIRST LETTER
        </h1>
        {/* search field  */}
        <div className="w-full md:w-96 flex items-center border-2 border-slate-400 rounded-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Enter food name..."
            className="w-full px-4 py-1 md:py-2 focus:outline-none"
          />
          <IoSearch size={23} className="mr-2" />
        </div>
      </div>
      <div
        className={`h-full w-full ${
          isRefetching ? "flex justify-center" : "grid grid-cols-2"
        }  md:flex md:flex-wrap gap-5 justify-items-center md:justify-center mt-10`}
      >
        {search !== ""
          ? data
              ?.filter((food) => {
                return (
                  search &&
                  food.strMeal.toLowerCase().includes(search) &&
                  food.strMeal.split("")
                );
              })
              .map((byLetter) => (
                <div
                  key={byLetter.idMeal}
                  onClick={() => handleClick(byLetter.idMeal)}
                  className="h-64 w-40 md:w-48 rounded-lg shadow-lg p-2  hover:scale-110 transition-transform cursor-pointer"
                >
                  <img
                    src={byLetter.strMealThumb}
                    alt={byLetter.strMeal}
                    className="h-32 w-full rounded-lg"
                  />
                  <h1 className="text-lg md:text-xl mt-5 text-black text-center">
                    {byLetter.strMeal}
                  </h1>
                </div>
              ))
          : data?.map((byLetter) => (
              <div
                key={byLetter.idMeal}
                onClick={() => handleClick(byLetter.idMeal)}
                className="h-64 w-40 md:w-48 rounded-lg shadow-lg p-2  hover:scale-110 transition-transform cursor-pointer"
              >
                <img
                  src={byLetter.strMealThumb}
                  alt={byLetter.strMeal}
                  className="h-32 w-full rounded-lg"
                />
                <h1 className="text-lg md:text-xl mt-5 text-black text-center">
                  {byLetter.strMeal}
                </h1>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SearchByLetter;
