export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface MealDetails {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string;
  strYoutube?: string;
  strSource?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
}

export interface NodeData {
  label: string;
  id?: string;
}

export interface SidebarProps {
  mealDetails: MealDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface ImageRendererProps {
  src: string;
  alt: string;
  className: string;
}

export interface LinkRendererProps {
  link: string;
}

export interface DefaultValueRendererProps {
  value: string;
}

export interface InfoRowProps {
    label: string;
    value: string;
    dtype?: string;
}

export type UseCategories = Category[];
export type UseMeals = Meal[];
export type UseMealDetails = MealDetails | null;
