//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();

function setup() {
  makePageForEpisodes(allEpisodes);
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

  // Level 200

  let episodesCounter = document.getElementById("episode-counter");

  document
    .getElementById("search-input")
    .addEventListener("input", searchMovie);

  function searchMovie() {
    const searchContent = document
      .getElementById("search-input")
      .value.toLowerCase();

    const selectedMovies = allEpisodes.filter((episode) => {
      if (
        episode.name.toLowerCase().includes(searchContent) ||
        episode.summary.toLowerCase().includes(searchContent)
      ) {
        return episode;
      }
    });
    episodesCounter.innerText = `Displaying ${selectedMovies.length} of ${allEpisodes.length}`;
    makePageForEpisodes(selectedMovies);
  }
}

window.onload = setup;
