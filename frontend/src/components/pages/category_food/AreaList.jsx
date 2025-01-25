import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { allAreaList } from "../../../config/api";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setArea } from "../../slices/mealSlice";


const AreaList = () => {
  const [selectArea, setSelectArea] = useState("");
  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: ["allAreaList"],
    queryFn: async () => {
      const { data } = await axios.get(allAreaList());
      return data.meals;
    },
  });

  const handleArea = (area) => {
    setSelectArea(area.strArea);
    dispatch(setArea(area.strArea));
  };

  return (
    <div>
      <div className="text-black w-screen px-5 md:px-0 md:w-96 relative">
        <div className="w-full flex items-center border-2 border-slate-400 rounded-md">
          <input
            type="text"
            value={selectArea}
            onChange={(e) => setSelectArea(e.target.value.toLowerCase())}
            placeholder="Enter area..."
            className="w-full px-4 py-1 md:py-2 focus:outline-none"
          />
          <MdKeyboardArrowDown size={23} />
        </div>

        {selectArea !== "" ? (
          <div className=" w-full max-h-96 absolute top-16 left-0 bg-white rounded-lg overflow-y-scroll">
            {data
              ?.filter((area) => {
                return (
                  selectArea &&
                  area.strArea?.toLowerCase().includes(selectArea) &&
                  area.strArea.split("")
                );
              })
              .map((area, i) => (
                <option
                  key={i}
                  value={area.strArea}
                  onClick={() => handleArea(area)}
                  className="cursor-pointer p-2 hover:bg-slate-200"
                >
                  {area.strArea}
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

export default AreaList;
