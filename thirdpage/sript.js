"use strict";

// I know API call is simple but it demonstraits my ability to get
//data and to display it. here we have API for wild animals
//API call gives different keys, but I only used image, name and diet
//of animal, for loop could be also used but I decided to go with forEach.
//you can acsess this page by clickin DISCOVERY and return to prevus page by
//clicking HOME. you can also set different rundom numbers of objects
//which you wish to receive from api, for this demostration purpose i only did
//3, but you can change it.

const NUM_CALLS = 3;
const main = document.querySelector(".main");

function addContent(data) {
  data.forEach((dat) => {
    const image = document.createElement("img");
    image.src = dat.image_link;
    image.classList.add("main-image");
    const name = document.createElement("h1");
    name.innerText = `Animal name: ${dat.name}`;
    name.classList.add("main-header");
    const diet = document.createElement("p");
    diet.innerText = `The diet of the animal consists of ${dat.diet}`;
    diet.classList.add("main-text");

    main.append(image, name, diet);
  });
}

async function getData() {
  const response = await fetch(
    `https://zoo-animal-api.herokuapp.com/animals/rand/${NUM_CALLS}`
  );
  const data = await response.json();

  addContent(data);
}

getData();
