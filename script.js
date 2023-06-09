//You can edit ALL of the code here
//const allEpisodes = getAllEpisodes();

function setup() {
  //const allEpisodes = getAllEpisodes();
  //makePageForEpisodes(allEpisodes);
  //searchMovie(allEpisodes);
  //selectAndDisplayEpisode(allEpisodes);
  fetchAllEpisodes(82);
  selectAndDisplayAllShows();
}
// Level 100
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";

  for (let i = 0; i < episodeList.length; i++) {
    let episodeCard = document.createElement("div");
    episodeCard.classList.add("episode-card");
    rootElem.appendChild(episodeCard);

    let episodeTittle = document.createElement("h2");
    episodeTittle.classList.add("episode-tittle");
    episodeCard.appendChild(episodeTittle);

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    episodeTittle.appendChild(cardHeader);
    cardHeader.innerHTML = `${episodeList[i].name} - S0${episodeList[i].season}E0${episodeList[i].number}`;

    let episodeImgContainer = document.createElement("img");
    episodeImgContainer.classList.add("episode-img-conteiner");
    episodeCard.appendChild(episodeImgContainer);
    episodeImgContainer.src = episodeList[i].image["medium"];

    let episodeSummary = document.createElement("p");
    episodeSummary.classList.add("episode-summary");
    episodeCard.appendChild(episodeSummary);
    episodeSummary.innerHTML = episodeList[i].summary;
  }
}
// Level 200 creating Search bar

function searchMovie(allEpisodes) {
  const searchContentEl = document.getElementById("search-input");

  searchContentEl.addEventListener("input", () => {
    const searchContent = searchContentEl.value.toLowerCase();
    const selectedMovies = allEpisodes.filter((episode) => {
      return (
        episode.name.toLowerCase().includes(searchContent) ||
        episode.summary.toLowerCase().includes(searchContent)
      );
    });
    console.log(selectedMovies);

    const numberCounter = document.getElementById("number-counter");
    numberCounter.innerText = `Displaying ${selectedMovies.length} of ${allEpisodes.length}`;

    makePageForEpisodes(selectedMovies);
  });
}

//level 300 Creating a Select input

//const searchWraper = document.createElement("search-wraper");
//searchWraper.appendChild(selectEpisodes);

function selectAndDisplayEpisode(episodes) {
  let selectEpisodes = document.getElementById("select-episodes");
  //const optionElement = document.createElement("option");
  //optionElement.innerText = "Select an episode";
  //selectEpisodes.appendChild(optionElement);
  selectEpisodes.innerHTML = "";
  for (let i = 0; i < episodes.length; i++) {
    let option = document.createElement("option");
    selectEpisodes.appendChild(option);
    option.value = i;
    option.innerText = `S${episodes[i].season
      .toString()
      .padStart(2, "0")}E${episodes[i].number.toString().padStart(2, "0")} - ${
      episodes[i].name
    }`;
  }

  selectEpisodes.addEventListener("change", (e) => {
    alert("Hello");
    let optionValue = e.target.value;
    console.log("You clicked option " + e.target.value);
    makePageForEpisodes([episodes[optionValue]]);
  });
}

//level 350

async function fetchAllEpisodes(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);

  let data = await response.json();
  console.log(data, "data");
  allEpisodes = data;
  makePageForEpisodes(data);
  searchMovie(data);
  selectAndDisplayEpisode(data);
}
window.onload = setup;

//level 400

function selectAndDisplayAllShows() {
  let selectShows = document.getElementById("select-shows");
  selectShows.textContent = "Select show...";
  const shows = getAllShows();
  for (let i = 0; i < shows.length; i++) {
    let option = document.createElement("option");
    selectShows.appendChild(option);
    option.value = shows[i].id;
    option.innerText = shows[i].name;
  }

  selectShows.addEventListener("change", (e) => {
    let optionValue = e.target.value;
    fetchAllEpisodes(optionValue);
    console.log(optionValue);
  });
}
