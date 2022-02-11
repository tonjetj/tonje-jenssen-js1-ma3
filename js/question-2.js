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
    const resP = await fetch(apiUrl);
    const resU = await resP.json();
    console.log(resU.results);

    const facts = resU.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      console.log(facts[i].name);
      console.log(facts[i].rating);
      console.log(facts[i].tags);
      if (i === 8) {
        break;
      }
      resultsContainer.innerHTML += `<div class="result">
      Game: ${facts[i].name}
      Rating: ${facts[i].rating}
      Tags: ${facts[i].tags}</div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = err("error", error);
  }
}

getResults();
