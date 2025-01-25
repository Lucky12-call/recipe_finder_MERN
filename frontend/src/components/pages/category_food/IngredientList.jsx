import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { allIngredientList } from "../../../config/api";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setMainIngredient } from "../../slices/mealSlice";

const IngredientList = () => {
  const dispatch = useDispatch();
  const [selectIngredient, setSelectIngredient] = useState("");

  const { data } = useQuery({
    queryKey: ["allIngredientList"],
    queryFn: async () => {
      const { data } = await axios.get(allIngredientList());
      return data.meals;
    },
  });

  const handleIngredient = (ingredient) => {
    setSelectIngredient(ingredient.strIngredient);
    dispatch(setMainIngredient(ingredient.strIngredient));
  };

  return (
    <div>
      <div className="text-black w-screen px-5 md:px-0 md:w-96 relative">
        <div className="w-full flex items-center border-2 border-slate-400 rounded-md">
          <input
            type="text"
            value={selectIngredient}
            onChange={(e) => setSelectIngredient(e.target.value.toLowerCase())}
            placeholder="Enter main ingredient..."
            className="w-full px-4 py-1 md:py-2 focus:outline-none"
          />
          <MdKeyboardArrowDown size={23} />
        </div>

        {selectIngredient !== "" ? (
          <div className=" w-full max-h-96 absolute top-16 left-0 bg-white rounded-lg overflow-y-scroll">
            {data
              ?.filter((ingredient) => {
                return (
                  selectIngredient &&
                  ingredient.strIngredient
                    .toLowerCase()
                    .includes(selectIngredient) &&
                  ingredient.strIngredient.split("")
                );
              })
              .map((ingredient) => (
                <option
                  key={ingredient.idIngredient}
                  value={ingredient.strIngredient}
                  onClick={() => handleIngredient(ingredient)}
                  className="cursor-pointer p-2 hover:bg-slate-200"
                >
                  {ingredient.strIngredient}
                </option>
              ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default IngredientList;
