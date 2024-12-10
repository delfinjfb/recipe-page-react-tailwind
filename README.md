# React Recipe Page with Tailwind CSS

This is a responsive recipe page built with **React** and styled using **Tailwind CSS**. It dynamically displays recipes from a JSON file, including information such as ingredients, instructions, preparation time, nutrition, and an image for each recipe. Users can navigate through the recipes using a "Next Recipe" button, which smoothly scrolls to the top of the page.

---

## Table of Contents *

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Demo

Check out the live demo: [\[Demo\]](https://recipe-page-react-tailwind-delfin.vercel.app/)

![Recipe Page Screenshot](https://recipe-page-react-tailwind-delfin.vercel.app/images/ReactRecipePageTailwind.png)

---

## Features

- **Responsive Design**: Optimized for mobile and desktop (375px to 1440px widths).
- **Dynamic Recipes**: Recipes are fetched from a JSON file.
- **Navigation**: Smooth scrolling when navigating to the next recipe.
- **Accessibility**: Includes skip links, proper semantic HTML, and ARIA roles.
- **Styling**: Consistent design using Tailwind CSS.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework.
- **PropTypes**: For prop validation.
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

- Click the "Next Recipe" button to view the next recipe.
- Recipes are displayed with:
  - A title and description.
  - Ingredients and instructions.
  - Nutrition facts in a tabular format.
  - An image of the recipe.

---

## Folder Structure

```plaintext
  src/
  ├── components/
  │ ├── Footer.jsx
  │ ├── Instructions.jsx
  │ ├── Nutrition.jsx
  │ ├── RecipeCard.jsx
  │ ├── RecipeImage.jsx
  │ ├── RecipeTitle.jsx
  │ └── TimeInfo.jsx
  ├── data/
  │ └── recipes.json
  ├── App.js
  ├── index.js
  └── styles/
  └── app.css
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
  "preparationTime": {
  "total": "10 minutes",
  "preparation": "5 minutes",
  "cooking": "5 minutes"
  },
  "ingredients": [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil"
  ],
  "instructions":
    [
      {
      "step": 1,
      "description": "Beat the eggs with salt and pepper."
      },
      {
      "step": 2,
      "description": "Heat a non-stick pan and add butter."
      }
    ],
  "nutrition":
    [
      {
      "nutrient": "calories",
      "value": "277kcal"
      },
      {
      "nutrient": "protein",
      "value": "20g"
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
