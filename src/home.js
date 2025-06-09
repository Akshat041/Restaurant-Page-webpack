export function homeModule() {
  const divContainer = document.querySelector("#content");

  const divHero = document.createElement("div");
  divHero.innerHTML = `
        <h1>Babel Bytes</h1>
        <p>
           Welcome to Babel Bites — a modern, minimal restaurant inspired by the
           clean structure of JavaScript. We serve classic dishes with a
           contemporary twist, handcrafted for both foodies and code lovers.
        </p>`;

  const divOpeningHours = document.createElement("div");
  divOpeningHours.innerHTML = `<h2>Opening Hours</h2>
        <p>
           <strong>Opening Hours:</strong> Monday – Sunday | 11:00 AM – 10:00 PM
        </p>`;

  const divLocation = document.createElement("div");
  divLocation.innerHTML = `<h2>Location</h2>
         <p><strong>Location:</strong> 42 Script Street, Codeville, JS 10101</p>`;

  divContainer.append(divHero, divOpeningHours, divLocation);
}
