import { useState, useEffect } from "react";
import axios from "axios";
import { UseCategories, UseMeals, UseMealDetails, Category, Meal, MealDetails } from "../types/types";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

export const useCategories = (): UseCategories => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get(`${API_URL}categories.php`)
      .then((response) => setCategories(response.data.categories))
      .catch((error) => console.error("Error fetching categories", error));
  }, []);

  return categories;
};

// Fetch meals by category
export const useMeals = (category: string | null): UseMeals => {
  const [meals, setMeals] = useState<Meal[]>([]);

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

export const useMealDetails = (mealId: string | null): UseMealDetails => {
  const [mealDetails, setMealDetails] = useState<MealDetails | null>(null);

  useEffect(() => {
    if (!mealId) return;

    (async function getMealDetails() {
      try {
        const response = await axios.get(`${API_URL}lookup.php?i=${mealId}`);
        setMealDetails(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal details", error);
      }
    })();
  }, [mealId]);

  return mealDetails;
};