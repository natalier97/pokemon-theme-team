function createImg(url) {
  let newImg = document.createElement("img");
  //set image source to be URL of new pokemon
  newImg.src = url;
  //adding new img tag to div container
  let parentDiv = document.getElementById("pokeContainer");
  parentDiv.appendChild(newImg);
}

function randomNumGenerator(intI) {
  return Math.floor(Math.random() * intI);
}

const getTeam = async (event) => {
  console.log("hello!");
  try {
    event.preventDefault();
    //fetch to get all TYPES of pokemon
    let response = await fetch("https://pokeapi.co/api/v2/type/");
    let responseData = await response.json(); 
    let typeIndex = randomNumGenerator(responseData.results.length);
    console.log(responseData)
    //URL for accessing a pokemon type
    let typeUrl = responseData.results[typeIndex].url;
    //Pokemon Team Type
    let pokeType = responseData.results[typeIndex].name;
    //adding team type to h2 header
    document.getElementById("pokemonType").innerText = pokeType.toUpperCase();
    //fetch to get pokemons from certain type class
    let getPoke = await fetch(typeUrl);
    let getPokeData = await getPoke.json();

    //URL for accessing specific pokemon
    //firstPoke
    let firstPokeIndex = randomNumGenerator(getPokeData.pokemon.length);
    let firstPokeUrl = getPokeData.pokemon[firstPokeIndex].pokemon.url;
    let firstPokeName = getPokeData.pokemon[firstPokeIndex].pokemon.name;
    //secondPoke
    let secondPokeIndex = randomNumGenerator(getPokeData.pokemon.length);
    let secondPokeUrl = getPokeData.pokemon[secondPokeIndex].pokemon.url;
    let secondPokeName = getPokeData.pokemon[secondPokeIndex].pokemon.name;
    //thirdPoke
    let thirdPokeIndex = randomNumGenerator(getPokeData.pokemon.length);
    let thirdPokeUrl = getPokeData.pokemon[thirdPokeIndex].pokemon.url;
    let thirdPokeName = getPokeData.pokemon[thirdPokeIndex].pokemon.name;
    //fourthPoke
    let fourthPokeIndex = randomNumGenerator(getPokeData.pokemon.length);
    let fourthPokeUrl = getPokeData.pokemon[fourthPokeIndex].pokemon.url;
    let fourthPokeName = getPokeData.pokemon[fourthPokeIndex].pokemon.name;
    //fifthPoke
    let fifthPokeIndex = randomNumGenerator(getPokeData.pokemon.length);
    let fifthPokeUrl = getPokeData.pokemon[fifthPokeIndex].pokemon.url;
    let fifthPokeName = getPokeData.pokemon[fifthPokeIndex].pokemon.name;

    //fetching each specific poke's API
    //first poke
    let firstPoke = await fetch(firstPokeUrl);
    let firstPokeData = await firstPoke.json();
    //second poke
    let secondPoke = await fetch(secondPokeUrl);
    let secondPokeData = await secondPoke.json();
    //third poke
    let thirdPoke = await fetch(thirdPokeUrl);
    let thirdPokeData = await thirdPoke.json();
    //fourth poke
    let fourthPoke = await fetch(fourthPokeUrl);
    let fourthPokeData = await fourthPoke.json();
    //fifth poke
    let fifthPoke = await fetch(fifthPokeUrl);
    let fifthPokeData = await fifthPoke.json();

    //Accessing each poke's  image
    //first poke
    let firstPokeimg = firstPokeData.sprites.front_default;
    createImg(firstPokeimg);
    //second poke
    let secondPokeimg = secondPokeData.sprites.front_default;
    createImg(secondPokeimg);
    //third poke
    let thirdPokeimg = thirdPokeData.sprites.front_default;
    createImg(thirdPokeimg);
    //fourth poke
    let fourthPokeimg = fourthPokeData.sprites.front_default;
    createImg(fourthPokeimg);
    //fifth poke
    let fifthPokeimg = fifthPokeData.sprites.front_default;
    createImg(fifthPokeimg);
    //removing input button
    const submitButton = document.getElementById("submitButton")
    submitButton.remove()
  } catch (err) {
    console.log(`message: ${err.message}`);
  }
};

//first poke

//second poke

//third poke

//fourth poke

//fifth poke
// Use Axios to:
// Button requests data for single, random pokemon (JS)
// Function: getTeam(event)
// Request data for 5 other pokemon (JS)
// Display images of all 6 pokemon (JS) To HTML container/placeholder
// Container: pokeContainer

/*
    let newImg = document.createElement("img")
    newImg.src = "https://images.pexels.com/photos/19497058/pexels-photo-19497058/free-photo-of-underwater-landscape.jpeg"

    let parentDiv = document.getElementById("pokeContainer")
    parentDiv.appendChild(newImg)
*/
