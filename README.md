# React Recipe Page with Tailwind CSS

This is a responsive recipe page built with **React** and styled using **Tailwind CSS**. It dynamically displays recipes from a JSON file, including information such as ingredients, instructions, preparation time, nutrition, and an image for each recipe. Users can navigate through the recipes using a "Next Recipe" button, which smoothly scrolls to the top of the page.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [JSON Structure](#json-structure)
- [License](#license)
- [Changes Added](#changes)

---

## Demo

Check out the live demo: [\[Demo\]](https://recipe-page-react-tailwind-delfin.vercel.app/)

![Recipe Page Screenshot](https://recipe-page-react-tailwind-delfin.vercel.app/images/ReactRecipePageTailwind.png)

---

## Features

- **Responsive Design**: Optimized for mobile and desktop (375px to 1440px widths).
- **Dynamic Recipes**: Recipes are loaded dynamically from a JSON file.
- **Custom Recipe URLs**: Recipes are accessed through unique URLs, such as `/recipes/omelette`.
- **Matomo Tracking**: Tracks user interactions and navigation for analytics.
- **Routing with Redirects**:
  - Root (`/`) and `/recipes/` paths redirect to the default recipe (`omelette`).
  - Dynamic routes like `/recipes/:recipeCode` display specific recipes.
- **Adjustable Servings**:
  - Users can select the number of servings for each recipe using a dropdown.
  - Recipes are automatically scaled, including ingredient quantities and nutrition values, based on selected servings.
- **Next Recipe Navigation**: Seamlessly navigate to the next recipe using a button.
- **Accessibility**: Includes alt text for images, semantic HTML, and keyboard navigation.

Adjustable Servings:
Users can select the number of servings for each recipe using a dropdown.
Recipes are automatically scaled, including ingredient quantities and nutrition values, based on selected servings.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For managing dynamic routing and custom URLs.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Matomo Analytics**: For tracking user interactions.
- **PropTypes**: For validating props.
- **JSON**: Static data for recipes.

---

## Setup

### Prerequisites

- Node.js and npm installed on your computer.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/delfinjfb/FEM-QR-code-component.git
   cd recipe-page
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser at http://localhost:3000.

---

## Usage

### Navigating Recipes

- **Default Recipe**: The default recipe is **omelette** and can be accessed at `/recipes/omelette`.
- **Dynamic Recipes**: Access other recipes via custom URLs like `/recipes/pancakes`.
- **Next Recipe Button**: Use the button to navigate to the next recipe.
- **Adjustable Servings**:
  - Select the number of servings from the dropdown to automatically adjust ingredient and nutrition values.
  - The dropdown options are defined by the scalableServings array in the recipe data.

### Matomo Tracking

- **Tracking Features**:
  - Tracks page views for each recipe URL.
  - Logs user interactions for analytics purposes.

To use Matomo:

- Update the `Matomo.jsx` file with your Matomo tracking server and site ID.

---

##

```plaintext
src/
├── components/
│   ├── Footer.jsx
│   ├── Instructions.jsx
│   ├── Nutrition.jsx
│   ├── RecipeCard.jsx
│   ├── RecipeImage.jsx
│   ├── RecipeTitle.jsx
│   ├── TimeInfo.jsx
│   ├── Ingredients.jsx
├── data/
│   └── recipes.json
├── utils/
│   ├── scaleRecipe.js
│   └── Matomo.jsx
```

- components/: Contains reusable React components for different sections of the page.
- data/recipes.json: Stores static data for recipes.
- styles/: Contains the global styles and Tailwind CSS configuration.

---

## JSON Structure

Here’s an example of the JSON data used for recipes:

```
[
  {
    "code": "omelette",
    "title": "Simple Omelette Recipe",
    "image": "/images/image-omelette.jpeg",
    "description": "An easy and quick dish, perfect for any meal.",
    "servings": 1,
    "scalableServings": [1, 2, 4, 6, 10],
    "preparationTime": {
      "total": "Approximately 10 minutes",
      "preparation": "5 minutes",
      "cooking": "5 minutes"
    },
    "ingredients": [
      {
        "quantity": 2,
        "unit": "large",
        "name": "eggs"
      },
      {
        "quantity": null,
        "unit": "",
        "name": "salt",
        "note": "to taste"
      },
      {
        "quantity": 1,
        "unit": "tablespoon",
        "name": "butter or oil"
      }
    ],
    "instructions": [
      {
        "step": 1,
        "description": "Beat the eggs with salt and pepper until well mixed."
      },
      {
        "step": 2,
        "description": "Heat a non-stick frying pan and add butter or oil."
      }
    ],
    "nutrition": [
      {
        "nutrient": "calories",
        "quantity": 277,
        "unit": "kcal"
      },
      {
        "nutrient": "protein",
        "quantity": 20,
        "unit": "g"
      }
    ]
  }
]

```

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Acknowledgments

Challenge by Frontend Mentor.
Coded by Delfin Fernandez.

_Image of pancake by [Real Simple](<https://www.realsimple.com/thmb/u0FflZ0sazXanhitWueM3LaXkaw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-make-pancakes-step-by-step-bf45f02d4b3c4392bddf92e05c9e17eb.jpg>), licensed under [Creative Commons](https://creativecommons.org/licenses/)._

## Changes

### Changes Added:

1. **Matomo Tracking**:

   - Highlighted its features in the "Features" and "Usage" sections.
   - Added instructions for setting up Matomo in the "Usage" section.

2. **Routing with Redirects**:

   - Mentioned default redirects in the "Features" section.
   - Explained how recipes are accessed via custom URLs in the "Usage" section.

3. **Updated Folder Structure**:
   - Included the `utils/Matomo.jsx` file.

---
