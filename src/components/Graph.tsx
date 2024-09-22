import { useState } from "react";
import ReactFlow, {
  // MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import { useCategories, useMeals, useMealDetails } from "../hooks/useMealAPI";
import Sidebar from "./Sidebar";
import { Category, Meal, NodeData } from "../types/types";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Explore" },
    position: { x: 250, y: 5 },
  },
];

const Graph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState([]);
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = useCategories();
  const meals = useMeals(selectedCategory);
  const mealDetails = useMealDetails(selectedMeal);

  const handleExploreClick = () => {
    const newNodes = categories
      .slice(0, 5)
      .map((category: Category, index: number) => ({
        id: (index + 2).toString(),
        type: "default",
        data: { label: category.strCategory, id: category.idCategory },
        position: { x: 100, y: 100 + index * 100 },
      }));

    setNodes((prevNodes) => [...prevNodes, ...newNodes]);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    const mealNodes = meals.slice(0, 5).map((meal: Meal, index: number) => ({
      id: `meal-${index}`,
      type: "default",
      data: { label: meal.strMeal, id: meal.idMeal },
      position: { x: 300, y: 100 + index * 100 },
    }));
    setNodes((prevNodes) => [...prevNodes, ...mealNodes]);
  };

  const handleMealClick = (meal: string) => {
    setSelectedMeal(meal);
    setIsSidebarOpen(true);
  };

  const onNodeClick = (_event: any, node: { id: string; data: NodeData }) => {
    if (node.id === "1") {
      handleExploreClick();
    } else if (node.id.startsWith("2")) {
      handleCategoryClick(node.data.label);
    } else if (node.id.startsWith("meal")) {
      handleMealClick(node.data.id!);
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: 500, width: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
        >
          {/* <MiniMap /> */}
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      <Sidebar
        mealDetails={mealDetails}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
    </div>
  );
};

export default Graph;
