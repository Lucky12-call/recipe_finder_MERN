import Home from "../pages/Home";
import Category from "../pages/Category";
import Feedback from "../pages/Feedback";
import TrendingMeal from "../pages/TrendingMeal";
import Letter from "../pages/Letter";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full">
     
      <Home />
      <div className="w-full md:w-[80%] md:mx-auto">
        <Feedback />
        <TrendingMeal />
        <Category />
        <Letter />
      </div>
      <Footer />
      <Outlet />
    </div>
  );
};

export default RootLayout;
