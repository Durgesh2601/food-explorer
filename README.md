# Meal Explorer Application

## Overview

The Meal Explorer Application is a web-based tool that allows users to explore meal categories, view specific meals within each category, and dive into the details of individual meals. This application provides a visual graph interface to navigate through various meal categories, meals, and their details such as ingredients, instructions, and links to video tutorials or external recipe sources. It enhances the experience of discovering meals in an interactive and engaging way.

### Deployed Link

[https://meal-explorer.vercel.app/](https://meal-explorer.vercel.app/)

## Features

- **Meal Category Exploration**: A node-based graph visualization to explore various meal categories.
- **Interactive Meal Navigation**: Users can select categories, meals, and view meal details dynamically.
- **Meal Details Sidebar**: Detailed view of meals showing ingredients, instructions, and additional information like YouTube tutorials and recipe sources.
- **Dynamic Data Fetching**: Data fetched in real-time using a meal API, ensuring that the meal information is up-to-date.
- **Responsive Design**: Optimized for different screen sizes, making it accessible across devices.
- **Persistent Sidebar**: View detailed information about selected meals with the ability to toggle the sidebar.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Ensures type safety and improves the developer experience.
- **React Flow**: A library for building node-based visualizations, used here to represent meal categories and meals as nodes.
- **TailwindCSS**: Utility-first CSS framework for styling the application.
- **Axios**: For making API requests to fetch meal data.
- **Vercel**: Platform used for deployment.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Durgesh2601/food-explorer.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- **src/components/Graph.tsx**: Main component for visualizing meal categories and meals using a graph-based UI.
- **src/components/Sidebar.tsx**: Component for displaying meal details in a sidebar with ingredients, instructions, and other relevant information.
- **src/hooks/useMealAPI.ts**: Custom hooks for fetching meal categories, meals by category, and meal details from the API.
- **src/types/types.ts**: TypeScript types used for categorizing meals and ensuring type safety throughout the project.
- **src/App.tsx**: Root component that integrates the main graph and sidebar components.
- **src/index.tsx**: Entry point of the application.

## Usage

1. **Explore Categories**: Click the "Explore" node to display a list of meal categories in the form of nodes.
2. **Select a Category**: Click on a category node to load and display meals from that category.
3. **View Meal Details**: Click on a meal node to view the detailed information of the selected meal in the sidebar.
4. **Toggle Sidebar**: Use the close button in the sidebar to hide the meal details or click on a new meal to replace the current details.

## Development

- **Dynamic Meal Exploration**: The graph is dynamically populated with meal categories and meals based on user interaction and API data.
- **State Management**: `useState` and `useEffect` hooks are used for managing the state of nodes, edges, selected categories, and meal details.
- **Error Handling**: Implemented basic error handling to manage API call failures and display appropriate messages to users.

## API Integration

- The application uses [TheMealDB API](https://www.themealdb.com/api.php) to fetch categories, meals by category, and details of individual meals.
- API calls are made using Axios, with custom hooks handling the data fetching logic:
  - **useCategories**: Fetches the list of meal categories.
  - **useMeals**: Fetches meals from a selected category.
  - **useMealDetails**: Fetches detailed information for a selected meal.

## Deployment

The application is deployed on Vercel. You can access it via the following link:

[https://meal-explorer.vercel.app/](https://meal-explorer.vercel.app/)

---

**Author**: Durgesh

Feel free to contact me at [dk829445@gmail.com](mailto:dk829445@gmail.com) for any questions or feedback.