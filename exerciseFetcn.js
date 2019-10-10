/**
 * 1) Fetch a list of planets from the Star Wars Universe (https://swapi.co/api/planets/)
 * 2) Reduce the list to only those planets with known population (population !== 'unknown')
 * 3) Sort them by population, diameter or orbital period (choose one)
 * 4) Return an array of planets, where each planet is an object with these properties:
 *  name, population, surface_water and terrain
 *
 * - Feel free to search whatever you want to
 * - Share your screen at all times
 */
const url = "https://swapi.co/api/planets/";

getPlanets(url);
function getPlanets(url) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let data = myJson.results;
      let filterData = data.filter(Reduce);
      filterData.sort((a, b) =>
        a.rotation_period > b.rotation_period ? 1 : -1
      );
      let datafinal = makeArray(filterData);
      console.log(datafinal);
      return datafinal;
    });
}

function makeArray(obj) {
  let planetArray = [];
  obj.forEach(element => {
    planetArray.push({
      name: element.name,
      population: element.population,
      surface_water: element.surface_water,
      terrain: element.terrain
    });
  });
  return planetArray;
}

function Reduce(planets) {
  if (planets.population !== "unknown") {
    return planets;
  }
}
