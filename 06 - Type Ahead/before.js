const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

function loadData() {
  return fetch(endpoint)
    .then((response) => response.json())
    .then((json) => displayData(json));
}

function displayData(items) {
  const li = document.createElement("li");
  const search = document.querySelector(".search");
  const container = document.querySelector(".suggestions");
  const mapItem = items.map((item) => ({
    city: item.city,
    state: item.state,
    population: item.population,
  }));


  if (search.value.includes(`${mapItem.city}`) || search.value.includes(`${mapItem.state}`)) {
    container.innerHTML = `<li>${mapItem.city}</li>`;
  }
}

loadData();
