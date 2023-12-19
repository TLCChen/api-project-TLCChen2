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
  const response = await fetch(URL);
  console.log(response);

  const data = await response.json();
  console.log(data);
  list2 = data.results.map((take) => take.url);
  console.log(list2);
  return list2;
}

async function getList() {
  const list = getData();
  const len = list.length;
  const y = Math.floor(Math.random() * len);
  console.log(y);
  const num = list[y - 1];
  console.log(num);

  const response = await fetch(num);
  console.log(response);
  // 200-299
  const data = await response.json();
  console.log(data);
  console.log(data.names);
  const all = [data.name, data.sprites.front_default];
  return all;
}

async function getData5() {
  const data = getList();
  document.querySelector(".box").insertAdjacentHTML(
    "beforeend",
    `<div class="item">
    <img src=${data[1]} alt="This is ${data[0]}">
    </div>
    `
  );
  console.log(data[0]);
}

async function getData3() {
  const data = await getData(URL);
  data.forEach((push) => list2.push(push));
}

async function call(){
  getData(URL)
}

async function getDataInfinity() {
  // now you never nefunction
}