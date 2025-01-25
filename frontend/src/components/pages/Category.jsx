import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { categoryList } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
import { useRef } from "react";
import { useEffect } from "react";
import { animateBox } from "../pages/animation/animation";

const Category = () => {
  const category = useRef();

  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const { data } = await axios.get(categoryList());
      return data.categories;
    },
  });

  useEffect(() => {
    animateBox(category);
  }, []);

  return (
    <div ref={category} className="p-2 md:p-0 mt-20 md:mt-40">
      <h1 className="flex gap-2 md:gap-4 justify-center items-center text-2xl md:text-4xl font-semibold text-yellow-400 text-center mb-10 md:mb-20">
        FOOD CATEGORIES <BiFoodMenu className="text-yellow-400" />
      </h1>
      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-5 justify-items-center md:justify-center">
        {data?.map((category) => (
          <div
            key={category.idCategory}
            className="h-48 w-40 rounded-lg shadow-xl p-5  cursor-pointer hover:scale-110 transition-transform"
            onClick={() =>
              navigate("category/category_food", {
                replace: false,
                state: { category },
              })
            }
          >
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="rounded-lg"
            />
            <h1 className="text-black text-center mt-5 font-medium text-lg md:text-xl">
              {category.strCategory}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
