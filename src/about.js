export function aboutModule() {
  const divContainer = document.querySelector("#content");

  const aboutHeading = document.createElement("h2");
  aboutHeading.classList.add("aboutHeading");
  aboutHeading.innerHTML = `<h2>About Us</h2>`;

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("aboutContent");
  aboutContent.innerHTML = `<p>
      Babel Bites is not just a restaurant — it's a delicious blend of modern
      web development concepts and comforting classic cuisine.
    </p>

    <p>
      Inspired by the seamless flow of JavaScript and the elegance of modular
      code, our restaurant brings you a menu that’s been carefully crafted
      with precision, creativity, and a touch of nerdy charm.
    </p>

    <p>
      Whether you're a developer refueling after a coding sprint, or just
      someone looking for a unique dining experience, Babel Bites serves you
      food that's as satisfying as a perfectly executed function.
    </p>

    <p><strong>Founded:</strong> 2025 in Codeville, JS</p>
    <p><strong>Philosophy:</strong> Code Clean. Eat Better.</p>`;

  divContainer.append(aboutHeading, aboutContent);
}
