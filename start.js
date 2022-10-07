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
const info_box = document.getElementById("info_box");
const info_button = document.getElementById("info");
const moves_button = document.getElementById("moves");

function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then((resp) => resp.json())
    .then((resp) => {
      pokemon_name.textContent = resp.name;
      pokemon_image.src =
        resp.sprites["other"]["official-artwork"]["front_default"];
      pokemon_type = [];
      type_list.innerHTML = "";
      moves = [];
      for (let i = 0; i < resp.moves.length; i++) {
        moves.push(resp.moves[i]["move"]["name"]);
      }
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
      if (info == true) {
        info_button.style.backgroundColor = "lightGreen";
        moves_button.style.backgroundColor = "whitesmoke";
        height = resp.height / 10;
        weight = resp.weight / 10;
        hp = resp.stats[0]["base_stat"];
        attack = resp.stats[1]["base_stat"];
        defense = resp.stats[2]["base_stat"];
        special_attack = resp.stats[3]["base_stat"];
        special_defence = resp.stats[4]["base_stat"];
        speed = resp.stats[5]["base_stat"];
        info_box.innerHTML =
          "<div class='info_text'> height: " +
          height +
          "m</div><div class='info_text'> weight: " +
          weight +
          "kg</div><div class='info_text'>hp: " +
          hp +
          "</div><div class='info_text'>attack: " +
          attack +
          "</div><div class='info_text'>defense: " +
          defense +
          "</div><div class='info_text'>special-attack: " +
          special_attack +
          "</div><div class='info_text'>special-defence; " +
          special_defence +
          "</div><div class='info_text'>speed: " +
          speed +
          "</div>";
      } else {
        info_button.style.backgroundColor = "whitesmoke";
        moves_button.style.backgroundColor = "lightGreen";
        info_box.innerHTML = "";
        for (let j = 0; j < moves.length; j++) {
          info_box.innerHTML += "<div class='info_text'>" + moves[j] + "</div>";
        }
      }
    });
}

fetchPokemon();

rightButton.addEventListener("click", () => {
  id = (id + 1) % 899;
  if (id == 0) {
    id = 1;
  }
  fetchPokemon();
});

leftButton.addEventListener("click", () => {
  id = (id - 1) % 899;
  if (id == 0) {
    id = 898;
  }
  fetchPokemon();
});

info_button.addEventListener("click", () => {
  if (info == false) {
    info = true;
    info_button.style.backgroundColor = "lightGreen";
    moves_button.style.backgroundColor = "whitesmoke";
    info_box.innerHTML =
      "<div class='info_text'> height: " +
      height +
      "m</div><div class='info_text'> weight: " +
      weight +
      "kg</div><div class='info_text'>hp: " +
      hp +
      "</div><div class='info_text'>attack: " +
      attack +
      "</div><div class='info_text'>defense: " +
      defense +
      "</div><div class='info_text'>special-attack: " +
      special_attack +
      "</div><div class='info_text'>special-defence; " +
      special_defence +
      "</div><div class='info_text'>speed: " +
      speed +
      "</div>";
  }
});

moves_button.addEventListener("click", () => {
  if (info == true) {
    info_button.style.backgroundColor = "whitesmoke";
    moves_button.style.backgroundColor = "lightGreen";
    info = false;
    info_box.innerHTML = "";
    for (let j = 0; j < moves.length; j++) {
      info_box.innerHTML += "<div class='info_text'>" + moves[j] + "</div>";
    }
  }
});
