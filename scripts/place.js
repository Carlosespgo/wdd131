const currentYear = document.querySelector("#currentyear");
const today = new Date();

currentYear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

const lastModified = document.querySelector(".lastModified");
const lastModifiedDate = new Date(document.lastModified);
lastModified.innerHTML = `${new Intl.DateTimeFormat("es-CO", { dateStyle: "full" }).format(lastModifiedDate)}`;

const temperature = 7.2;
const wind = 38;

function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) + 
        0.3965 * temp * Math.pow(wind, 0.16)
    );
}

let windChill;

if (temperature <= 10 && wind > 4.8) {
    windChill = calculateWindChill(temperature, wind).toFixed(1);
}
else {
    windChill = "N/A"
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("windChillValue").textContent = windChill;
});
