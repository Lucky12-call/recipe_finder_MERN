function About() {
  return (
    <div className="min-h-[90vh] flex justify-center md:items-center mt-28  p-2 md:p-0">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
          About Us
        </h2>
        <h3 className="text-lg md:text-xl mb-4">
          Welcome to Flavors Unlocked, your ultimate recipe finder and culinary
          companion!
        </h3>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Welcome to our recipe website! We are passionate about cooking and
          sharing delicious recipes with food enthusiasts around the world. At
          Flavors Unlocked, we believe that cooking is more than just a
          necessity—it’s a way to bring people together, celebrate culture, and
          explore creativity. Whether {"you're"} a seasoned chef, an adventurous
          foodie, or a beginner in the kitchen, our mission is to inspire your
          culinary journey by helping you discover the perfect recipes tailored
          to your taste, ingredients, and lifestyle.
        </p>

        <h1 className="font-semibold text-xl">What We Do</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          We simplify the art of cooking by providing a smart, easy-to-use
          recipe finder that lets you:
        </p>
        <ul className="text-lg md:text-xl text-gray-700 mb-4">
          <li>
            <span className="font-semibold">Search by Ingredients:</span> Have a
            few items in your pantry? Enter them, and {"we’ll"} suggest
            delicious dishes you can make.
          </li>
          <li>
            <span className="font-semibold">Filter by Preferences:</span>{" "}
            Looking for vegan, gluten-free, or low-carb options? {"We’ve"} got
            you covered.
          </li>
          <li>
            <span className="font-semibold">Explore Global Cuisines:</span>{" "}
            Craving Italian, Indian, or Asian flavors? Browse recipes from
            around the world.
          </li>
        </ul>

        <h1 className="font-semibold text-xl">Why Choose Us</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4">At Flavors Unlocked, we pride ourselves on:</p>
        <ul className="text-lg md:text-xl text-gray-700 mb-4">
          <li>
            <span className="font-semibold">Personalization:</span> Our
            intelligent search adapts to your preferences, making every meal
            uniquely yours.
          </li>
          <li>
            <span className="font-semibold">Diverse Recipes:</span>
            From quick snacks to gourmet dishes, our extensive library ensures{" "}
            {"there's"} something for everyone.
          </li>
          <li>
            <span className="font-semibold"> Community Focus:</span> We love
            hearing from our users! Share your favorite recipes, tips, and
            cooking stories with us.
          </li>
        </ul>

        <h1 className="font-semibold text-xl">Our Vision</h1>

        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Our goal is to make cooking enjoyable, accessible, and inclusive for
          everyone. We aim to reduce food waste, encourage healthier eating
          habits, and make it easy for you to whip up a meal no matter your
          skill level or pantry size.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Thank you for choosing Flavors Unlocked as your trusted kitchen
          partner. Let’s cook up something amazing together!
        </p>
      </div>
    </div>
  );
}

export default About;
