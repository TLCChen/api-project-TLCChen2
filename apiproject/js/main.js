// use template literals
const URL = `https://pokeapi.co/api/v2/pokemon/?limit=900`;
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

async function getData2() {
  const listLen = await getData(URL);
  const len = listLen.length;
  const y = Math.floor(Math.random() * len);
  console.log(y);

  try {
    const response = await fetch(listLen[y - 1]);
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
  } catch (error) {
    document.querySelector("h1").textContent = error;
    document.querySelector("h1").textContent =
      "Please search for something else.";
  }
}

document.querySelector(".btn").addEventListener("click", function () {
  getData2();
  // removes the first element with class called "item"
  document.querySelector(".item").remove();
});

// data.results.forEach((urls) => list.push(urls.url));
// console.log(list);
// function popup() {
//   window.open("open.html", "opening", "popup");
// }

// popup();
