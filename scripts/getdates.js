const currentYear = document.querySelector("#currentyear");
const today = new Date();

currentYear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

const lastModified = document.querySelector(".lastModified");
const lastModifiedDate = new Date(document.lastModified);
lastModified.innerHTML = `${new Intl.DateTimeFormat("es-CO", { dateStyle: "full" }).format(lastModifiedDate)}`;
