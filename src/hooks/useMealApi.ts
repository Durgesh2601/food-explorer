import { useState, useEffect } from "react";
import axios from "axios";
import {
  UseCategories,
  UseMeals,
  UseMealDetails,
  Category,
  Meal,
  MealDetails,
} from "../types/types";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

export const useCategories = (): UseCategories => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}categories.php`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  return categories;
};

// Fetch meals by category
export const useMeals = (category: string | null): UseMeals => {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      if (!category) return;

      try {
        const response = await axios.get(`${API_URL}filter.php?c=${category}`);
        setMeals(response.data.meals);
      } catch (error) {
        console.error("Error fetching meals", error);
      }
    };

    fetchMeals();
  }, [category]);

  return meals;
};

export const useMealDetails = (mealId: string | null): UseMealDetails => {
  const [mealDetails, setMealDetails] = useState<MealDetails | null>(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      if (!mealId) return;

      try {
        const response = await axios.get(`${API_URL}lookup.php?i=${mealId}`);
        setMealDetails(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal details", error);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  return mealDetails;
};
