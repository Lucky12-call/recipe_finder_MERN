import { useState } from "react";
import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
import SearchRecipe from "../search/SearchRecipe";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../slices/mealSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const currentUser = useSelector((state) => state.meals.currentUser);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    // https://recipe-finder-mern.vercel.app/api/user/logout

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/user/logout",
        {},
        { withCredentials: true }
      );
      if (data.success) {
        dispatch(setIsLoggedIn(false));
      }
      toast.success(data.message);
    } catch (error) {
      dispatch(setIsLoggedIn(true));
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 ">
      <nav className="bg-yellow-400">
        <div className="w-full mx-auto px-4 md:px-8 py-1.5 md:py-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to={"/"} className="text-white text-2xl font-bold">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5a1d89e0bff2007c8d1007f5/1605891694847-RX78GWQROA5U0ISWFKJS/ff+new+logo+website.pngz"
                  alt="logo"
                  className="h-12 md:h-14"
                />
              </Link>
            </div>

            {/* search field  */}
            <div className="relative">
              <div className="w-44 md:w-96  flex justify-center items-center bg-white border-2 rounded-md">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search recipes..."
                  className="w-full px-4 py-1 md:py-2 rounded-md focus:outline-none"
                />
                <IoSearch size={23} className="mr-2" />
              </div>
              {search !== "" ? (
                <SearchRecipe search={search} setSearch={setSearch} />
              ) : (
                ""
              )}
            </div>

            <div className="hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to={"/"}
                  className=" hover:text-white px-3 py-2 rounded-md text-xl font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  to={"/filter_by_ingredient"}
                  className=" hover:text-white px-3 py-2 rounded-md text-xl font-medium transition-colors"
                >
                  Ingredient
                </Link>
                <Link
                  to={"/filter_by_area"}
                  className=" hover:text-white px-3 py-2 rounded-md text-xl font-medium transition-colors"
                >
                  Area
                </Link>
                <Link
                  to={"/about"}
                  className=" hover:text-white px-3 py-2 rounded-md text-xl font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  to={"/contact"}
                  className=" hover:text-white px-3 py-2 rounded-md text-xl font-medium transition-colors"
                >
                  Contact
                </Link>

                <div className="flex items-center space-x-4">
                  <h1 className="font-bold  px-4 py-2 rounded-lg bg-white">
                    Hi, {currentUser.userName}
                  </h1>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg font-semibold bg-black text-white"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>

            <div className="md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-gray-300 focus:outline-none"
              >
                {isOpen ? (
                  <HiMiniBarsArrowUp size={26} />
                ) : (
                  <HiMiniBarsArrowDown size={26} />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <Link
                to={"/"}
                className="block hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Home
              </Link>
              <Link
                to={"/filter_by_ingredient"}
                className="block hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Ingredient
              </Link>
              <Link
                to={"/filter_by_area"}
                className="block hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Area
              </Link>
              <Link
                to={"/about"}
                className="block hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                About
              </Link>
              <Link
                to={"/contact"}
                className="block hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Contact
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg font-semibold bg-black text-white"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
