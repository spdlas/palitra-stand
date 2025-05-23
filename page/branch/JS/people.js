import person from "./branch-data.js";

export const krylo = ['Крылатское', 'Сколково', 'Кунцево'];
export const kutuz = ['Фили-Давыдково', 'Раменки', 'Мичуринский', 'Дорогомилово'];
export const tropar = ['Тропарево', 'Тропарево-Никулино'];
export const vnuk = ['Внуково', 'Солнцево', 'Волынская', 'Интернациональная'];


export function displayFilteredPersons(addressFilters) {
    person.forEach((item) => {
        if (addressFilters.includes(item.address) && item.img !== "0") {
            const personElement = document.createElement("div");
            personElement.classList.add("header-branch");

            personElement.innerHTML = `
                <img src="../img/${item.img}" alt=""/>
                <div class="leader-name">
                    <div class="leader-name__text"><b>${item.position}</b></div>
                    <div class="leader-name__text">${item.fullName}</div>
                </div>
            `;
            document.querySelector('.wrapper').appendChild(personElement);
        }
    });
}
