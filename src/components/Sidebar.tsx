import { ImageRenderer, InfoRow } from "../components/FieldRenderer";
import { SidebarProps } from "../types/types";

const Sidebar = ({ mealDetails, isOpen, onClose }: SidebarProps) => {
  if (!mealDetails) return null;

  // Create an array of ingredients and their corresponding measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = mealDetails[`strIngredient${i}` as keyof typeof mealDetails];
    const measure = mealDetails[`strMeasure${i}` as keyof typeof mealDetails];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-2/5 z-50`}
      style={{ borderRadius: "8px" }}
    >
      {/* Fixed header at the top */}
      <div
        className="p-4 bg-white w-full z-10 fixed top-0 right-0 flex justify-between items-center border-b border-gray-200"
        style={{ height: "60px", borderRadius: "8px 0 0 8px" }}
      >
        <h3 className="text-2xl font-bold">{mealDetails.strMeal}</h3>

        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 font-bold text-2xl"
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          &times;
        </button>
      </div>

      <div
        className="overflow-auto p-6"
        style={{
          height: "calc(100% - 60px)",
          marginTop: "60px",
        }}
      >
        <ImageRenderer
          src={mealDetails.strMealThumb}
          alt={mealDetails.strMeal}
          className="w-full h-auto mb-6 rounded-lg"
        />
        <div className="mb-6 grid grid-cols-2 gap-x-4">
          <InfoRow label={"Category"} value={mealDetails.strCategory} />
          <InfoRow label={"Area"} value={mealDetails.strArea} />

          {mealDetails?.strYoutube && (
            <InfoRow label={"YouTube"} value={mealDetails.strYoutube} dtype="LINK" />
          )}

          {mealDetails?.strSource && (
            <InfoRow label={"Recipe"} value={mealDetails.strSource} dtype="LINK" />
          )}
        </div>

        {mealDetails?.strTags && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Tags:</h3>
            <p className="text-gray-700">{mealDetails.strTags.split(",").join(", ")}</p>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Ingredients:</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Instructions:</h3>
          <p className="text-gray-700">{mealDetails.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;