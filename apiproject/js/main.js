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
    data.results.forEach((urls) => list.push(urls.url));
    console.log(list);
    // document.querySelector("h1").textContent = data.name;
    // document.querySelector("img").src = data.sprites.front_default;
    // document.querySelector(".box").insertAdjacentHTML("beforeend", `hi joe`);
    // Object.keys(data).forEach((keys) => {
    //   data[keys];
    // });
  } catch (error) {
    document.querySelector("h1").textContent = error;
    document.querySelector("h1").textContent =
      "Please search for something else.";
  }
}
getData(URL);
// function popup() {
//   window.open("open.html", "opening", "popup");
// }

// popup();
