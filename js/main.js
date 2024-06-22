import { getUsers } from "./components/env.js";
import { results } from "./components/gallery.js";

let container = document.querySelector("#Flex");
let searchBar = document.querySelector("#search__bar");
let findUsersCont = document.querySelector("#findUsersCont");

searchBar.addEventListener("change", async() => {
    console.log("Buscando...");
    container.innerHTML = "";
    findUsersCont.innerHTML = 0;

    let text = searchBar.value;
    text = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');;
    
    let data = await getUsers();
    data = await data.json();

    let cont = 0;

    for (let i = 0; i < 100; i++) {
        console.log('for');
        
        let user = data[i];
        let userName = user.name_full;
        let userName1 = userName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');;

        let userDescript = user.description;
        let userDescript1 = userDescript.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');;

        if (userName1.includes(text) || userDescript1.includes(text)){
            console.log('if');
            let id = user.id;
            await results(id);
            cont ++;
        }
    };

    if (cont == 0){
        alert("No se encontraron resultados :(");
    };

});