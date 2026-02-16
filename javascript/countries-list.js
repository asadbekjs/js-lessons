const countriesWrapper = document.querySelector(".countries-wrapper");
countriesWrapper.style.display = "grid";
countriesWrapper.style.gridTemplateColumns = "repeat(6, 1fr)";
countriesWrapper.style.gap = "10px";
countriesWrapper.style.padding = "10px";
countriesWrapper.style.borderRadius = "10px";
let div;
for (const country of countries_data) {
  div = document.createElement("div");
  div.innerHTML = `
    <h2>${country.name}</h2>
    <p>${country.capital || "Capital not found"}</p>
    <p>${country.population}</p>
    <img height="60" src="${country.flag}" alt="${country.name} flag">
    <h4>Languages: </h4>
    <ul>
      ${country.languages.map((language) => `<li>${language}</li>`).join("")}
    </ul>
    <p>Area: ${country.area}</p>
    <p>Region: ${country.region}</p>
  `;
  countriesWrapper.appendChild(div);
  div.style.fontSize = "16px";
  div.style.padding = "10px";
  div.style.backgroundColor = "lightgray";
  div.style.borderRadius = "6px";
}
