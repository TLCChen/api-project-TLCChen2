const URL = `https://pokeapi.co/api/v2/pokemon/?limit=900`;
<<<<<<< Updated upstream
const URL3 =
  "https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon%20Card%20Game&sortdirection=asc";
=======
const URL2 = "https://pokeapi.co/api/v2/type/"
>>>>>>> Stashed changes
// take the url and then redo this whole thing but with the url
// let correct = true;
let list2 = [];
let itemBox = [];
let again = true;
let name2 = "";
let data2 = "";
const limit = 5;
let loses = 0;

function begin(){
  document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="box">
      <button class="btn1" id= "play">Game</button>
      <button class="btn1" id = "index">PokeDex</button>
    </div>
      `
    );
}

function cover(){
  document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="box">
      <button class="btn">Click</button>
      <button class="btn" id="change">Answer</button>
      <input type="text" class="input">
    </div>
      `
    );
}

function choose(){
  document.querySelector("#play").addEventListener("click", function(){
    document.querySelector(".box").remove()
    cover()
    check()
    call()
  })
  document.querySelector("#index").addEventListener("click", function(){
    popup()
  })
}


// Takes all the pokemon information from the API and returns list of that information
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
async function getData2() {
  const len = list2.length;
  const y = Math.floor(Math.random() * len);
  console.log(y);
  const num = list2[y - 1];
  console.log(num);

  try {
    const response = await fetch(num);
    console.log(response);
    // 200-299
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    data2 = data;
    console.log(data2);
    name2 = data.name;
    console.log(data.name);
  } catch (error) {
    document.querySelector("h1").textContent = error;
    document.querySelector("h1").textContent =
      "Please search for something else GetData2.";
  }
}

// Creates a card containing the pokemon.
async function create() {
  await getData2();
  document.querySelector(".box").insertAdjacentHTML(
    "beforeend",
    `<div class="item">
    <img class = "img" src=${data2.sprites.front_default} alt="This is ${data2.name}">
    </div>
    `
  );
}

// Push all the existing cards into a list, itemBox.
// Deletes all the cards in itemBox.
function deleted() {
  document.querySelectorAll(".item").forEach((item) => itemBox.push(item));
  console.log(itemBox);
  itemBox.forEach((item) => item.remove());
}

// Gets all the pokemons and puts them in list2.
// When the button with class btn is clicked, style changes and
// checks if again is true.
// If it is delete all cards and create card
// again becomes false
async function call() {
  await getList();
  // console.log(list2);

  document.querySelector(".btn").addEventListener("click", async function () {
    if (document.querySelector(".btn").innerHTML === "Click") {
      document.querySelector(".btn").innerHTML = "Next";
    }

    if (again) {
      document.querySelector(".input").value = "";
      deleted();
      await create();

      console.log(document.querySelector(".input").value);
      again = false;
      console.log(again);
    }

  });
}

// Why does the getData2 function not work here? It works when called above.
// Get list of pokemons
// get specific pokemon different from the first one(actually based on calling functions, this is the first one)
// if button with id change is clicked,
// check if again is false
// if it is add 1 to tries
// delete all text for tries left
// create text for tries left
async function check() {
  let tries = 0;
  await getList();
  await getData2();
  document.querySelector("#change").addEventListener("click", function () {
    if (again != true) {
      tries++;
      document
        .querySelectorAll(".batmen")
        .forEach((item) => itemBox.push(item));
      console.log(itemBox);
      itemBox.forEach((item) => item.remove());
      console.log(tries);
      if (
        document.querySelector(".input").value.toLowerCase() === name2 ||
        document.querySelector(".input").value.toLowerCase() === "pick a chu"
      ) {
        again = true;
        const class1 = document.querySelector(".img");
        class1.classList.remove("img");
        class1.classList.add("imgsee");
        tries = 0;
      } else if (tries >= 5 && again != true) {
        tries = 0;
        loses++;
        // why is this here??
        again = true;
        deleted();
        create();

        console.log(document.querySelector(".input").value);
        again = false;
        console.log(again);
        console.log("YOU FAILED");
<<<<<<< Updated upstream
        if (loses > 5) {
          document.querySelector(".box").remove();
          fail();
          while (true) {
            popup();
=======
        if(loses > limit){
          document.querySelector(".box").remove()
          fail()
          while (true){
            popup()
>>>>>>> Stashed changes
          }
        }
      }
      document.querySelector(".input").value = "";
      document.querySelector(".box").insertAdjacentHTML(
        "afterbegin",
        `<div class = "batmen">
        <h2>You have ${5 - tries} tries left.</h2>
        </div>
        `
      );
      console.log(again);
      console.log("YOU Have", loses);
      if (loses > 5) {
        gaming = false;
      }
    }
  });
}

<<<<<<< Updated upstream
function fail() {
=======
// deletes everything
function fail(){
>>>>>>> Stashed changes
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class = "box2">
        <h1>You lose</h1>
        </div>
        `
  );
}
<<<<<<< Updated upstream
check();
call();
=======
>>>>>>> Stashed changes

// crashes the website.
function popup() {
  window.open("open.html", "opening", "popup");
}
<<<<<<< Updated upstream
=======

begin()
choose()
getData(URL2)



>>>>>>> Stashed changes
