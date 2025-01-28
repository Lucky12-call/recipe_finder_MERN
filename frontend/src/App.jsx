import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar/Navbar";
import RootLayout from "./components/root_layout/RootLayout";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import { useDispatch, useSelector } from "react-redux";
import CategoryFood from "./components/pages/category_food/CategoryFood";
import FilterByIngredient from "./components/pages/category_food/FilterByIngredient";
import FilterByArea from "./components/pages/category_food/FilterByArea";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PrivatePolicy from "./components/pages/PrivatePolicy";
import MealById from "./components/pages/MealById";
import SearchByLetter from "./components/pages/SearchByLetter";
import { useEffect } from "react";
import { setIsLoggedIn } from "./components/slices/mealSlice";

const App = () => {
  const isLoggedIn = useSelector((state) => state.meals.isLoggedIn);
  const localStorageToken = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorageToken) {
      dispatch(setIsLoggedIn(true));
    }
  }, [localStorageToken, dispatch, isLoggedIn]);

  return (
    <>
      <div className="font-sans">
        {isLoggedIn && (
          <div className="relative z-10">
            <Navbar />
          </div>
        )}
        <div className="z-0">
          <Routes>
            <Route path="/" element={isLoggedIn ? <RootLayout /> : <Login />} />

            {/* auth routing */}
            <Route
              path="/signup"
              element={isLoggedIn ? <RootLayout /> : <SignUp />}
            />
            <Route
              path="/login"
              element={isLoggedIn ? <RootLayout /> : <Login />}
            />

            {/* meals routing  */}
            <Route
              path="category/category_food"
              element={isLoggedIn ? <CategoryFood /> : <Login />}
            />
            <Route
              path="search_recipe/meal_by_id"
              element={isLoggedIn ? <MealById /> : <Login />}
            />
            <Route
              path="filter_by_ingredient/meal_by_id"
              element={isLoggedIn ? <MealById /> : <Login />}
            />
            <Route
              path="filter_by_area/meal_by_id"
              element={isLoggedIn ? <MealById /> : <Login />}
            />
            <Route
              path="category_food/meal_by_id"
              element={isLoggedIn ? <MealById /> : <Login />}
            />
            <Route
              path="filter_by_first_letter/meal_by_id"
              element={isLoggedIn ? <MealById /> : <Login />}
            />
            <Route
              path="/filter_by_area"
              element={isLoggedIn ? <FilterByArea /> : <Login />}
            />
            <Route path="/about" element={isLoggedIn ? <About /> : <Login />} />
            <Route
              path="/contact"
              element={isLoggedIn ? <Contact /> : <Login />}
            />
            <Route
              path="/private_policy"
              element={isLoggedIn ? <PrivatePolicy /> : <Login />}
            />
            <Route
              path="/search_by_letter"
              element={isLoggedIn ? <SearchByLetter /> : <Login />}
            />
            <Route
              path="/filter_by_ingredient"
              element={isLoggedIn ? <FilterByIngredient /> : <Login />}
            />

            {/* not found routing  */}
            <Route path="/*" element={<h1>Page Not Found</h1>} />
          </Routes>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default App;
