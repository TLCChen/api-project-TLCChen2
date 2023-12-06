// use template literals
const URL = `https://pokeapi.co/api/v2/pokemon/?limit=1292`;
// take the url and then redo this whole thing but with the url

const list = [];

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
    // data.results.forEach((urls) => list.push(urls.url));
  } catch (error) {
    document.querySelector("h1").textContent = error;
    document.querySelector("h1").textContent =
      "Please search for something else.";
  }
}
getData(URL);

console.log(list);

const y = Math.floor(Math.random() * list.length);
console.log(y);
const URL2 = list[y - 1];
console.log(URL2);

async function getPokemon(URL2) {
  try {
    const response = await fetch(URL2);
    console.log(response);
    // 200-299
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    // take response from serve and convert it to JSON
    const data = await response.json();
    console.log(data);
  } catch (error) {
    document.querySelector("h1").textContent = error;
    document.querySelector("h1").textContent =
      "Please search for something else.";
  }
}
getPokemon(URL2);
// data.results.forEach((urls) => list.push(urls.url));
// console.log(list);
// function popup() {
//   window.open("open.html", "opening", "popup");
// }

// popup();
