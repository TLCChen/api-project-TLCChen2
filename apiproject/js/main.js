const URL = `https://pokeapi.co/api/v2/pokemon/random`;

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
    document.querySelector("h1").textContent = data.name;
    document.querySelector("img").src = data.sprites.front_default;
    document.querySelector(".box").insertAdjacentHTML(
      "beforeend",
      `
    <div class="item">
      <img src="${data.sprites.front_default}" alt="">
    </div>`
    );
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
