import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { filterByArea } from "../../../config/api";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AreaList from "./AreaList";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

const FilterByArea = () => {
  const navigate = useNavigate();
  const areaName = useSelector((state) => state.meals.areaName);

  const { data, refetch, isRefetching } = useQuery({
    queryKey: ["filterByArea"],
    queryFn: async () => {
      const { data } = await axios.get(filterByArea(areaName));
      return data.meals;
    },
  });

  const handleClick = (meal) => {
    navigate("/filter_by_area/meal_by_id", {
      replace: false,
      state: { meal },
    });
  };

  useEffect(() => {
    refetch();
  }, [areaName, refetch]);

  return (
    <div className="p-2 md:p-0 min-h-screen ">
      <div className="h-24 w-full flex flex-col md:flex-row justify-between items-center md:px-10 mt-20 md:shadow-lg">
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400 my-5 md:my-0">
          SEARCH BY AREA
        </h1>
        <AreaList />
      </div>
      <div
        className={`h-full w-full ${
          isRefetching ? "flex justify-center" : "grid grid-cols-2"
        }  md:flex md:flex-wrap gap-5 justify-items-center md:justify-center mt-10`}
      >
        {isRefetching ? (
          <Loader />
        ) : (
          data?.map((byArea) => (
            <div
              key={byArea.idMeal}
              onClick={() => handleClick(byArea.idMeal)}
              className="h-64 w-40 md:w-48 rounded-lg shadow-lg p-2  hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src={byArea.strMealThumb}
                alt={byArea.strMeal}
                className="h-32 w-full rounded-lg"
              />
              <h1 className="text-lg md:text-xl mt-5 text-black text-center">
                {byArea.strMeal}
              </h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FilterByArea;
