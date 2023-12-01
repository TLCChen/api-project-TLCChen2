const URL = `https://pokeapi.co/api/v2/pokemon/ditto`;

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
    document.querySelector("h2").textContent = data.url;
    body.insertAdjacentHTML(
      //make this a DOMSselector object later.
      "beforeend",
      `<div class="item">
          
          <img src=${data.url} alt="This is ${data.name}">
        </div>
        `
    );
  } catch (error) {
    document.querySelector("h1").textContent = error;
    document.querySelector("h1").textContent =
      "Please search for something else.";
  }
}
getData(URL);
