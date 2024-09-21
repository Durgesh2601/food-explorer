const Sidebar = ({ mealDetails, isOpen, onClose }) => {
  if (!mealDetails) return null;

  // Create an array of ingredients and their corresponding measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = mealDetails[`strIngredient${i}`];
    const measure = mealDetails[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } w-1/3 z-50`}
    >
      <div className="p-4 overflow-auto h-full">
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 mb-4 font-bold"
        >
          Close
        </button>

        <h2 className="text-2xl font-bold mb-4">{mealDetails.strMeal}</h2>

        <img
          src={mealDetails.strMealThumb}
          alt={mealDetails.strMeal}
          className="w-full h-auto mb-4 rounded"
        />

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Category:</h3>
          <p>{mealDetails.strCategory}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Area:</h3>
          <p>{mealDetails.strArea}</p>
        </div>

        {mealDetails.strTags && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Tags:</h3>
            <p>{mealDetails.strTags.split(',').join(', ')}</p>
          </div>
        )}

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Ingredients:</h3>
          <ul className="list-disc pl-5">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Instructions:</h3>
          <p>{mealDetails.strInstructions}</p>
        </div>

        {mealDetails.strYoutube && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Video Instructions:</h3>
            <a
              href={mealDetails.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Watch on YouTube
            </a>
          </div>
        )}

        {mealDetails.strSource && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Source:</h3>
            <a
              href={mealDetails.strSource}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {mealDetails.strSource}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;