import { getUsers } from "./components/env.js";
import { results } from "./components/gallery.js";

let container = document.querySelector("#Flex");
let searchBar = document.querySelector("#search__bar");
let findUsersCont = document.querySelector("#findUsersCont");

searchBar.addEventListener("input", async () => {
    console.log("Buscando...");
    container.innerHTML = "";
    findUsersCont.innerHTML = 0;

    let text = searchBar.value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let response = await getUsers();
    let data = await response.json();

    let filteredUsers = data.filter(user => {
        let userName = user.name_full.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        let userDescript = user.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return userName.includes(text) || userDescript.includes(text);
    });

    let cont = 0;

    for (let user of filteredUsers.slice(0, 100)) {
        console.log('Processing user');
        await results(user.id);
        cont++;
    }

    if (cont === 0) {
        alert("No se encontraron resultados :(");
    }
});
