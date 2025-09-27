const lastModified = document.querySelector(".lastModified");
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `${new Intl.DateTimeFormat("es-CO", { dateStyle: "full" }).format(lastModifiedDate)}`;