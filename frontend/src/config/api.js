export const searchByName = (mealName) =>
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

export const allMealsByLetter = (letter) =>
  `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;

export const mealDetailById = (mealId) =>
  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

export const randomMeal = () =>
  `https://www.themealdb.com/api/json/v1/1/random.php`;

export const categoryList = () =>
  `https://www.themealdb.com/api/json/v1/1/categories.php`;

export const allCategoryList = () =>
  `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;

export const allAreaList = () =>
  `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;

export const allIngredientList = () =>
  `https://www.themealdb.com/api/json/v1/1/list.php?i=list `;

export const filterByMainIngredient = (ingredientName) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`;

export const filterByCategory = (categoryName) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;

export const filterByArea = (areaName) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`;
