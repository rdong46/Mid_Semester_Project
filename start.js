fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((resp) => resp.json())
  .then((resp) => console.log(resp.name));
