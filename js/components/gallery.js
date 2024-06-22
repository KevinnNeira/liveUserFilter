import { getUserId } from "./env.js";

const container = document.querySelector("#Flex");

export const results = async (id) => {
    try {
        const response = await getUserId(id);
        const user = await response.json();

        const { name_full: name, description, avatar } = user;

        const plantilla = `
        <div class="information__user">
            <div class="section__photo">
                <img id="photo" src="${avatar}">
            </div>
            <div class="section__information">
                <p id="name">${name}</p>
                <p id="location">${description}</p>
            </div>     
        </div>
        `;

        const findUsersCont = document.querySelector("#findUsersCont");
        const actual = parseInt(findUsersCont.textContent, 10) + 1;

        findUsersCont.textContent = actual;
        container.innerHTML += plantilla;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};
