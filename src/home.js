export function homeModule() {
  const divContainer = document.querySelector("#content");

  const divHero = document.createElement("div");
  divHero.classList.add("divHero");
  divHero.innerHTML = `
        <h1>Babel Bytes</h1>
        <p>
           Welcome to Babel Bites — a modern, minimal restaurant inspired by the
           clean structure of JavaScript. We serve classic dishes with a
           contemporary twist, handcrafted for both foodies and code lovers.
        </p><br><hr>`;

  const divOpeningHours = document.createElement("div");
  divOpeningHours.classList.add("divOpeningHours");
  divOpeningHours.innerHTML = `<h2>Opening Hours</h2>
        <p>
           <strong>Opening Hours:</strong> Monday - Sunday | 11:00 AM - 10:00 PM
        </p><br><hr>`;

  const divLocation = document.createElement("div");
  divLocation.classList.add("divLocation");
  divLocation.innerHTML = `<h2>Location</h2>
         <p><strong>Location:</strong> 42 Script Street, Codeville, JS 10101</p><br><hr>`;

  divContainer.append(divHero, divOpeningHours, divLocation);
}
