// Make a call to the Rawg API

// loop through the results and display the following properties in HTML, but only for the first 8 results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)

// you can use either regular promise or async/await syntax to make the call
const resultsContainer = document.querySelector(".results");

async function getResults() {
  const apiUrl =
    "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=d84791b15e7947698d328295cb4e3946";
  try {
    const response = await fetch(apiUrl);
    const results = await response.json();
    console.log(results);
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = err("error", error);
  }
}

getResults();
