import centers from "./data-centers.js";

centers.map((center) => {
  const centerElement = document.createElement("div");
  let isSpecial = 'center__special';

  centerElement.classList.add(`center`);
    if(center.special === true){
        centerElement.classList.add(`${isSpecial}`);
    }
  centerElement.innerHTML = `
        <div class="center-main">
            <h2>${center.name}</h2>
            <p>${center.type}</p>
            <div class="center-adress">
                <img src="./img/map.svg" alt="">
                <span>${center.address}</span>
            </div>
            <div class="center-adress">
                <div class="metro metro__${center.metroColor}">${center.metro}</div>
            </div>
        </div>
        <div class="center-contact">
            <span>Телефон: ${center.phone}</span><br>
            <span>e-mail: ${center.email}</span><br>
            <span>Руководитель: ${center.director}</span>
        </div>

        `;
  document.querySelector(".wrapper").appendChild(centerElement);
});

//Анимация

