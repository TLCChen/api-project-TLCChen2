// use template literals
const URL = `https://pokeapi.co/api/v2/pokemon/?limit=900`;
const URL3 =
  "https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon%20Card%20Game&sortdirection=asc";
// take the url and then redo this whole thing but with the url
let again = true;
let correct = true;
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
    // const num = list.length;
    // console.log(num);
    // return num;

    // data.results.forEach((urls) => list.push(urls.url));
  } catch (error) {
    document.querySelector("h1").textContent = error;
    document.querySelector("h1").textContent =
      "Please search for something else.";
  }
}
async function getData3() {
  const data = await getData(URL);
  console.log("aehirhea", data);
  list2 = data;
  console.log("cat", list2);
}
async function getData2() {
  const listLen = await getData(URL);
  const len = listLen.length;
  const y = Math.floor(Math.random() * len);
  console.log(y);
  const num = listLen[y - 1];

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

// document.querySelector(".btn").addEventListener("click", async function () {
//   // the function on line 66 tries to remove first before the item is added so the item is not deleted because the item is generated too slowly. So 66 happens before 64.(The await)
//   console.log(again);
//   if (again) {
//     await getData2();
//     again = false;
//     correct = false;
//     console.log(document.querySelector(".input").value);
//     document.querySelector(".item").remove();
//   }
//   console.log(again);
//   // removes the first element with class called "item"
// });

// document.querySelector("#change").addEventListener("click", function () {
//   again = true;
// });

// if (document.querySelector(".input").value === getData2()) {
//   correct = true;
// }

// data.results.forEach((urls) => list.push(urls.url));
// console.log(list);
// function popup() {
//   window.open("open.html", "opening", "popup");
// }

// popup();
getData3();
