import person from "../../JS/branch-data.js";

person.map((item) => {
  if (
    (item.address === "Тропарево" || item.address === "Тропарево-Никулино") &&
    item.img !== "0"
  ) {
    const personElement = document.createElement("div");
    personElement.classList.add(`header-branch`);

    personElement.innerHTML = `
            <img src="../img/${item.img}" alt=""/>
            <div class="leader-name">
                <div class="leader-name__text"><b>${item.position}</b></div>
                <div class="leader-name__text">${item.fullName}</div>
            </div>
        `;
    document.querySelector(".wrapper").appendChild(personElement);
  }
});
