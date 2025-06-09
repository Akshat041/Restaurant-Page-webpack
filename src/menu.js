export function MenuModule() {
  const divContainer = document.querySelector("#content");

  const divStarter = document.createElement("div");
  divStarter.innerHTML = `<h3>Starters</h3>
        <ul>
          <li>
            🧄 Garlic Bytes - Crispy garlic bread served with AI-generated dip
          </li>
          <li>🥗 Syntax Salad - Fresh greens with structured dressing</li>
        </ul>`;

  const divMainCourse = document.createElement("div");
  divMainCourse.innerHTML = `<ul>
          <li>
            🍔 ES6 Burger - Double-patty burger with modern toppings and legacy
            support
          </li>
          <li>
            🍝 Async Pasta - Non-blocking noodles tossed in spicy tomato sauce
          </li>
          <li>🌮 Modular Tacos - Pick-and-load your favorite components</li>
        </ul>`;

  const divDesserts = document.createElement("div");
  divDesserts.innerHTML = `<h3>Desserts</h3>
        <ul>
          <li>🍨 JSON Gelato - Light, creamy, and perfectly structured</li>
          <li>🍪 Cookie Parser - JavaScript's favorite snack, freshly baked</li>
        </ul>`;

  const divBeverages = document.createElement("div");
  divBeverages.innerHTML = `<h3>Beverages</h3>
        <ul>
          <li>☕ Callback Coffee - Keeps you running on event loops</li>
          <li>🥤 Fetch Fizz - A cold, refreshing API-powered soda</li>
        </ul>`;

  divContainer.append(divStarter, divMainCourse, divDesserts, divBeverages);
}
