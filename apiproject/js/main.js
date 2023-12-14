// use template literals
const URL = `https://pokeapi.co/api/v2/pokemon/?limit=900`;
const URL3 =
  "https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon%20Card%20Game&sortdirection=asc";
// take the url and then redo this whole thing but with the url
// let correct = true;
let list2 = [];
let itemBox = [];
let again = true;

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
    console.log(data);
    document.querySelector(".box").insertAdjacentHTML(
      "beforeend",
      `<div class="item">
      <img src=${data.sprites.front_default} alt="This is ${data.name}">
      </div>
      `
    );
    console.log(data.name);
    return data.name;
  } catch (error) {
    document.querySelector("h1").textContent = error;
    document.querySelector("h1").textContent =
      "Please search for something else.";
  }
}

async function getData3() {
  const data = await getData(URL);
  data.forEach((push) => list2.push(push));
}

async function getData4() {
  console.log("getData4");
}

function clear() {
  document.querySelector(".input").value = "";
}

function submit() {
  document.querySelector("#change").addEventListener("click", function () {
    if ((document.querySelector(".input").value = getData2())) {
    }
  });
}
async function call() {
  await getData3();
  // console.log(list2);
  if (again === true) {
    document.querySelector(".btn").addEventListener("click", async function () {
      // document.querySelector(".item").remove();
      document.querySelectorAll(".item").forEach((item) => itemBox.push(item));
      console.log(itemBox);
      // const reverseBox = itemBox.reverse()
      // const goAway = reverseBox.filter((item)=> reverseBox.indexOf(item) != 0)
      // const goAway1 = reverseBox.filter((item)=> reverseBox.indexOf(item) === 0)
      // console.log(goAway)
      // console.log(goAway1)
      // Does not work because it leaves the last pokemon from the previous press
      itemBox.forEach((item) => item.remove());
      await getData2();
      console.log(document.querySelector(".input").value);
      console.log(again);
    });
  }
}

document.querySelector("#change").addEventListener("click", function () {
  again = false;
  console.log("apple");
});
call();
