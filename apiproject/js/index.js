const URL = `https://pokeapi.co/api/v2/pokemon/?limit=2`;
let list2 = [];

async function getData(URL) {
  try {
    const response = await fetch(URL);
    console.log(response);
    // 200-299
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    // take response from serve and convert it to JSON
    const data = await response.json();
    console.log(data);
    const list = data.results.map((take) => take.url);
    console.log(list);
    return list;
  } catch (error) {
    document.querySelector("h1").textContent = error;
    document.querySelector("h1").textContent =
      "Please search for something else.";
  }
}

// Creates list2 from list so that the API does not have to be called each time.
async function getList() {
  const data = await getData(URL);
  data.forEach((push) => list2.push(push));
}

// Used to randomize the pokemon chosen.
// Takes a random number from 0 to the number of pokemons - 1.
// Uses that number as the index for which pokemon is chosen from list2.
// Fetches information for a specific pokemon using the information from the API.
// Returns the name of the pokemon.
let bob = []
async function getData2(num) {
  console.log(num);
  const response = await fetch(num);
  console.log(response);
  const data = await response.json();
  data2 = data;
  console.log(data2);
  name2 = data.name;
  console.log(data.name);
  // data2.types.forEach((call) => console.log("This is", call.type.name));
  // data2.types.forEach((call) => bob.push(call.type.name));
  // console.log(bob)
  // console.log(bob.forEach((call)=>console.log(call)))
  data2.types.forEach((call) => bob.push(call.type.name));
  console.log(bob)
  bob = []
  cat = []
}

async function create(num) {
  await getData2(num);
  data2.types.forEach((call) => bob.push(call.type.name));
  console.log(bob[0].toUpperCase())
for(let i = 0; i <= bob.length-1; i++){
  cat.push(bob[i].toUpperCase())
}
console.log(cat)
  console.log(bob)
  document.querySelector(".box2").insertAdjacentHTML(
    "beforeend",
    `<div class="item2">
        <h2 class = "text">${data2.name.toUpperCase()}</h2>
        <img class = "img" src=${data2.sprites.front_default} alt="This is ${data2.name}">
        <p class = "text2">Type: ${cat.join(" | ")}</p>
        <p class ="description">This is ${data2.name.toUpperCase()}</p>
      </div>
      `
  );
  bob = []
}

async function call() {
  await getList();
  list2.forEach((call) => create(call));
}

call();
