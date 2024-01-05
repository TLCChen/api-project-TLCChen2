URL2 = "https://pokeapi.co/api/v2/type/"
const list2 = []

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

async function getList() {
    const data = await getData(URL2);
    data.forEach((push) => list2.push(push));
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
  
async function call(){
    await getList()
    getData2()
}
call()