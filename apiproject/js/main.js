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
    return list
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

async function getData2(URL) {
  try {
    const response = await fetch(URL);
    console.log(response);
    // 200-299
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    // take response from serve and convert it to JSON

    const listLen = await getData(URL);
    const y = Math.floor(Math.random() * listLen);
    console.log(y);
    const data = await response.json();
    document.querySelector(".box").insertAdjacentHTML(
      "afterbegin",
      `<img src="${}" alt="bob">`
    );

    // data.results.forEach((urls) => list.push(urls.url));
  } catch (error) {
    document.querySelector("h1").textContent = error;
    document.querySelector("h1").textContent =
      "Please search for something else.";
  }
}

(async () => {
  const listLen = await getData(URL);
  const y = Math.floor(Math.random() * listLen);
  console.log(y);
})();

// data.results.forEach((urls) => list.push(urls.url));
// console.log(list);
// function popup() {
//   window.open("open.html", "opening", "popup");
// }

// popup();
