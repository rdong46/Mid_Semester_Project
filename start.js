let id = 1;
let pokemon_type = [];
let info = true;
let height;
let weight;
let hp;
let attack;
let defense;
let special_attack;
let special_defence;
let speed;
let moves = [];
const pokemon_name = document.getElementById("name");
const leftButton = document.getElementsByClassName("button")[0];
const rightButton = document.getElementsByClassName("button")[1];
const pokemon_image = document.getElementById("pokemon_image");
const type_list = document.getElementById("type-list");
const info_box = document.getElementById("info-box");
fetch("https://pokeapi.co/api/v2/pokemon/" + id)
  .then((resp) => resp.json())
  .then((resp) => {
    pokemon_name.textContent = resp.name;
    pokemon_image.src =
      resp.sprites["other"]["official-artwork"]["front_default"];
    for (key in resp.types) {
      pokemon_type.push(resp.types[key]["type"]["name"]);
    }
    for (let i = 0; i < pokemon_type.length; i++) {
      type_list.innerHTML +=
        '<div class="type-box ' +
        pokemon_type[i] +
        '" class>' +
        pokemon_type[i] +
        "</div>";
    }
    height = resp.height;
    weight = resp.weight;
    hp = resp.stats[0]["base_stat"];
    attack = resp.stats[1]["base_stat"];
    defence = resp.stats[2]["base_stat"];
    special_attack = resp.stats[3]["base_stat"];
    special_defence = resp.stats[4]["base_stat"];
    speed = resp.stats[5]["base_stat"];
    info_box.innerHTML =
      "<p id='info_text'> height:" +
      height +
      "m\nweight: " +
      weight +
      "kg\nhp: " +
      hp +
      "\nattack: " +
      attack +
      "\ndefence " +
      defense +
      "\nspecial-attack: " +
      special_attack +
      "\nspecial-defence; " +
      special_defence +
      "\nspeed: " +
      speed +
      "</p>";
  });

rightButton.addEventListener("click", () => {
  id = (id + 1) % 899;
  if (id == 0) {
    id = 1;
  }
  fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((resp) => resp.json())
    .then((resp) => {
      pokemon_name.textContent = resp.name;
      pokemon_image.src =
        resp.sprites["other"]["official-artwork"]["front_default"];
      pokemon_type = [];
      type_list.innerHTML = "";
      for (key in resp.types) {
        pokemon_type.push(resp.types[key]["type"]["name"]);
      }
      for (let i = 0; i < pokemon_type.length; i++) {
        type_list.innerHTML +=
          '<div class="type-box ' +
          pokemon_type[i] +
          '" class>' +
          pokemon_type[i] +
          "</div>";
      }
    });
});

leftButton.addEventListener("click", () => {
  id = (id - 1) % 899;
  if (id == 0) {
    id = 898;
  }
  fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((resp) => resp.json())
    .then((resp) => {
      pokemon_name.textContent = resp.name;
      pokemon_image.src =
        resp.sprites["other"]["official-artwork"]["front_default"];
      pokemon_type = [];
      type_list.innerHTML = "";
      for (key in resp.types) {
        pokemon_type.push(resp.types[key]["type"]["name"]);
      }
      for (let i = 0; i < pokemon_type.length; i++) {
        type_list.innerHTML +=
          '<div class="type-box ' +
          pokemon_type[i] +
          '" class>' +
          pokemon_type[i] +
          "</div>";
      }
    });
});
