const currentYear = document.querySelector("#currentyear");
const today = new Date();

currentYear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

const lastModified = document.querySelector(".lastModified");
const lastModifiedDate = new Date(document.lastModified);
lastModified.innerHTML = `${new Intl.DateTimeFormat("es-CO", { dateStyle: "full" }).format(lastModifiedDate)}`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const selectElement = document.querySelector("#nameSelect");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

let reviewCount = localStorage.getItem("reviewCounter");

reviewCount = reviewCount ? parseInt(reviewCount) : 0;
reviewCount++;

localStorage.setItem("reviewCounter", reviewCount);