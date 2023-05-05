//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
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
    episodeImgContainer.classList.add("episode-img-conteiner")
    movieCard.appendChild(episodeImgContainer);
    episodeImgContainer.src = episodeList[i].image["medium"];

    let episodeSummary = document.createElement("p");
    episodeSummary.classList.add("episode-summary");
    movieCard.appendChild(episodeSummary);
    episodeSummary.innerHTML = episodeList[i].summary;



  }
 
  
 
}

window.onload = setup;
