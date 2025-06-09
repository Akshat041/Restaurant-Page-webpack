export function MenuModule() {
  const divContainer = document.querySelector("#content");

  const divStarter = document.createElement("div");
  divStarter.classList.add("divStarter");
  divStarter.innerHTML = `<h2>Starters</h2>
        <ul>
          <li>
            🧄 Garlic Bytes - Crispy garlic bread served with AI-generated dip
          </li>
          <li>🥗 Syntax Salad - Fresh greens with structured dressing</li>
        </ul><br><hr>`;

  const divMainCourse = document.createElement("div");
  divMainCourse.classList.add("divMainCourse");

  divMainCourse.innerHTML = `<h2>Main Course</h2>
          <ul>
          <li>
            🍔 ES6 Burger - Double-patty burger with modern toppings and legacy
            support
          </li>
          <li>
            🍝 Async Pasta - Non-blocking noodles tossed in spicy tomato sauce
          </li>
          <li>🌮 Modular Tacos - Pick-and-load your favorite components</li>
        </ul><br><hr>`;

  const divDesserts = document.createElement("div");
  divDesserts.classList.add("divDesserts");
  divDesserts.innerHTML = `<h2>Desserts</h2>
        <ul>
          <li>🍨 JSON Gelato - Light, creamy, and perfectly structured</li>
          <li>🍪 Cookie Parser - JavaScript's favorite snack, freshly baked</li>
        </ul><br><hr>`;

  const divBeverages = document.createElement("div");
  divBeverages.classList.add("divBeverages");
  divBeverages.innerHTML = `<h2>Beverages</h2>
        <ul>
          <li>☕ Callback Coffee - Keeps you running on event loops</li>
          <li>🥤 Fetch Fizz - A cold, refreshing API-powered soda</li>
        </ul><br><hr>`;

  divContainer.append(divStarter, divMainCourse, divDesserts, divBeverages);
}
