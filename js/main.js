let movieID;
const imgURL = 'https://image.tmdb.org/t/p/w300';
const movieInfoSection = document.querySelector('#movie-info');
document.querySelector('#search-btn').addEventListener('click', getID);
getTrend();

//show trending
function getTrend() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

  fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
      console.log(data);
      data.results.slice(0, 7).forEach(item => {
        const link = document.createElement('a');
        document.querySelector('#trending').appendChild(link);
        const img = document.createElement('img');
        img.src = `${imgURL}${item.poster_path}`;
        link.appendChild(img)
        img.addEventListener('click', () => {
          movieID = item.id
          getMovieInfo(movieID)
          recommendMovies(movieID)
        });
      })
    })
    .catch(err => {
      console.log(`error ${err}`);
    }); 
}

//get ID of searched title
function getID() {
    const input = document.querySelector('input').value
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`

    fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
      //get id of the first search result
      console.log(data.results[0].id);
      movieID = data.results[0].id;
      //get movie info of the searched title
      getMovieInfo(movieID);
      //get movie recommendations based on the title id
      recommendMovies(movieID);
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}

//get movie info based on movie id
function getMovieInfo(id) {
  document.querySelector('#movie-info').classList.remove('hidden')
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
      console.log(data);
      clearInfo();
      //------movie image------
      const img = document.createElement('img');
      img.src = `${imgURL}${data.poster_path}`;
      document.querySelector('#info-img').appendChild(img);
      //------movie details------
      const movieGenres = getGenresHTML(data.genres)
      document.querySelector('#info-text').innerHTML = `
      <h3>${data.title}</h3>
      <div class="rating-cont">
        <i class="fa-solid fa-star" style="color: #fec700;"></i>
        <span>${data.vote_average}</span>
        <span>(${data.vote_count} votes)</span>
      </div>
      <div class="year-runtime-cont flex">
        <span>${data.release_date.slice(0, 4)}</span>
        <span>${data.runtime} min</span>
      </div>
      <div class="genre-cont flex">
        ${movieGenres.join('')}
      </div>
      <div class="plot-cont">
        <p>${data.overview}</p>
      </div>
      `;
      scrollToInfo();
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}

//get movie recommendations
function recommendMovies(id) {
  document.querySelector('.movie-rec').classList.remove('hidden')
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`

  fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
      console.log(data);
      clearRecs();
      document.querySelector('#movie-rec-title').innerText = 'Recommended Movies For You';
      data.results.slice(0, 16).forEach(item => {
        if (item.poster_path) {
          const recCont = document.createElement('div');
          document.querySelector('#rec-results').appendChild(recCont);
          const recLink = document.createElement('a');
          recCont.appendChild(recLink);
          const img = document.createElement('img');
          img.src = `${imgURL}${item.poster_path}`
          recLink.appendChild(img);
          let title = document.createElement('h4');
          title.textContent = item.title;
          recCont.appendChild(title);
          img.addEventListener('click', () => {
            movieID = item.id
            getMovieInfo(movieID)
            recommendMovies(movieID)
          })
        }
      })
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}

//get movie genres HTML
function getGenresHTML(genres) {
  return genres.map(genre => `<div><span>${genre.name}</span></div>`);
}

//clear movie info content
function clearInfo() {
  while (document.querySelector('#info-img').firstChild) {
    document.querySelector('#info-img').removeChild(document.querySelector('#info-img').firstChild);
  }
  while (document.querySelector('#info-text').firstChild) {
    document.querySelector('#info-text').removeChild(document.querySelector('#info-text').firstChild);
  }
}
//clear movie recommendations content
function clearRecs() {
  while (document.querySelector('#rec-results').firstChild) {
    document.querySelector('#rec-results').removeChild(document.querySelector('#rec-results').firstChild);
  }
}
// Scroll to the movie info section
function scrollToInfo() {
  movieInfoSection.scrollIntoView({ behavior: 'smooth' });
}