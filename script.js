//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();
function setup() {
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  for (let i = 0; i < episodeList.length; i++) {
    let movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    rootElem.appendChild(movieCard);

    let episodeTittle = document.createElement("h2");
    episodeTittle.classList.add("episode-tittle");
    movieCard.appendChild(episodeTittle);

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    episodeTittle.appendChild(cardHeader);
    cardHeader.innerHTML = `${episodeList[i].name} - S0${episodeList[i].season}E0${episodeList[i].number}`;

    let episodeImgContainer = document.createElement("img");
    episodeImgContainer.classList.add("episode-img-conteiner");
    movieCard.appendChild(episodeImgContainer);
    episodeImgContainer.src = episodeList[i].image["medium"];

    let episodeSummary = document.createElement("p");
    episodeSummary.classList.add("episode-summary");
    movieCard.appendChild(episodeSummary);
    episodeSummary.innerHTML = episodeList[i].summary;
  }

  const inputHTML = document.getElementById("search-input");
  console.log(inputHTML);
  // inputHTML.episodes = episodeList;
  inputHTML.addEventListener("keyup", searchMovie);

  function searchMovie(event) {
    let selectedMovies;
    let searchContent = event.target.value;
    // let allEpisodes = event.target.episodes;
    if (searchContent == "") {
      setup();
    } else {
      let searchContentInsensitive = new RegExp(searchContent, "i");
      selectedMovies = allEpisodes.filter((episode) => {
        if (
          episode.name.match(searchContentInsensitive) !== null ||
          episode.summary.match(searchContentInsensitive) !== null
        ) {
          console.log(episode);
          return episode;
        }
      });
      makePageForEpisodes(selectedMovies);
    }
  }
}

window.onload = setup;
