import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}categories.php`)
      .then((response) => setCategories(response.data.categories))
      .catch((error) => console.error("Error fetching categories", error));
  }, []);

  return categories;
};

// Fetch meals by category
export const useMeals = (category) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (category) {
      axios
        .get(`${API_URL}filter.php?c=${category}`)
        .then((response) => setMeals(response.data.meals))
        .catch((error) => console.error("Error fetching meals", error));
    }
  }, [category]);

  return meals;
};

export const useMealDetails = (mealId: string) => {
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    if (!mealId) return;
    (async function getMealDetails() {
      try {
        const response = await axios.get(`${API_URL}lookup.php?i=${mealId}`);
        debugger
        setMealDetails(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal details", error);
      }
    })();
  }, [mealId]);

  return mealDetails;
};
