const global = {
  currentPage: window.location.pathname,
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
  api: {
    apiKey: 'a8500c5a90558ec8ae375b1874501089',
    apiUrl: 'https://api.themoviedb.org/3/',
  },
}
// fetch data from TMDB API
async function fetchAPIData(endpoint) {
  showSpinner()
  const response = await fetch(`${global.api.apiUrl}${endpoint}?api_key=${global.api.apiKey}&language=en-US`)
  const data = await response.json()
  hideSpinner()
  return data
}

//fetch data based on a query
async function searchAPIData() {
  showSpinner()
  const response = await fetch(
    `${global.api.apiUrl}search/${global.search.type}?query=${global.search.term}&api_key=${global.api.apiKey}`
  )
  const data = await response.json()
  hideSpinner()
  return data
}

async function search() {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  global.search.type = urlParams.get('type')
  global.search.term = urlParams.get('search-term')

  if (global.search.term !== '' && global.search.term !== null) {
    const { results, total_pages, page, total_results } = await searchAPIData()
    global.search.page = page
    global.search.totalResults = total_results
    global.search.totalPages = total_pages

    if (results.length === 0) showAlert('no result found')
    displaySearchResults(results)

    document.querySelector('#search-term').value = ''
  } else {
    showAlert('enter search term , dude')
  }
}

//create search result based on json data coming from server
function displaySearchResults(res) {
  res.forEach(result => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
          <a href="${global.search.type}-details.html?id=${result.id}">
          ${
            result.poster_path
              ? `<img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" class="card-img-top" alt="${result.name}" />`
              : `<img src="images/no-image.jpg" class="card-img-top"  alt="Movie Title" />`
          }
          </a>
          <div class="card-body">
            <h5 class="card-title">${global.search.type === 'movie' ? result.title : result.name}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${
                global.search.type === 'movie' ? result.release_date : result.first_air_date
              }</small>
            </p>
          </div> 
`
    document.querySelector('#search-results-heading').innerHTML = `
      <h2>${res.length} of ${global.search.totalResults} results for ${global.search.term}</h2>
      `
    document.querySelector('#search-results').appendChild(div)
  })
  displayPagination()
}

function displayPagination() {
  const div = document.createElement('div')
  div.classList.add('pagination')
  div.innerHTML = `
        <button class="btn btn-primary" id="prev">Prev</button>
        <button class="btn btn-primary" id="next">Next</button>
        <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>
  
  `

  document.querySelector('#pagination').appendChild(div)
}

async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular')

  results.forEach(result => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    
    <a href="movie-details.html?id=${result.id}">   
    ${
      result.poster_path
        ? `<img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" class="card-img-top" alt="${result.title}" />`
        : `<img src="images/no-image.jpg" class="card-img-top"  alt="Movie Title" />`
    }
    </a>
    <div class="card-body">
        <h5 class="card-title">${result.original_title}</h5>
        <p class="card-text">
            <small class="text-muted">Release: ${result.release_date}</small>
        </p>
    </div>
    `
    document.querySelector('#popular-movies').appendChild(div)
  })

  //   console.log(result)
}

// display popular shows
async function displayPopularShows() {
  const { results } = await fetchAPIData('tv/popular')

  results.forEach(show => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    
    <a href="movie-details.html?id=${show.id}">   
    ${
      show.poster_path
        ? `<img src="https://image.tmdb.org/t/p/w500/${show.poster_path}" class="card-img-top" alt="Movie Title" />`
        : `<img src="images/no-image.jpg" class="card-img-top" alt="${show.name}" />`
    }
    </a>
    <div class="card-body">
        <h5 class="card-title">${show.original_name}</h5>
        <p class="card-text">
            <small class="text-muted">Release: ${show.first_air_date}</small>
        </p>
    </div>
    `
    document.querySelector('#popular-shows').appendChild(div)
  })

  //   console.log(result)
}

//display movie details
async function displayMovieDetails() {
  const movieId = window.location.search.split('=')[1]
  const movie = await fetchAPIData(`movie/${movieId}`)
  console.log(movie)

  const div = document.createElement('div')
  div.classList.add('movie-details')
  div.innerHTML = `
  
  <div class="details-top">
  <div>
  ${
    movie.poster_path
      ? `<img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.title}" />`
      : `<img src="images/no-image.jpg" class="card-img-top"  alt="Movie Title" />`
  }
  </div>
  <div>
    <h2>${movie.title}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${movie.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Release Date: ${movie.release_date.split('-').join('/')}</p>
    <p>
      ${movie.overview}
    </p>
    <h5>Genres</h5>
    <ul class="list-group">
      ${movie.genres.map(genre => `<li>${genre.name}</li>`).join('')}
    </ul>
    <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Movie Info</h2>
  <ul>
    <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(movie.budget)}</li>
    <li><span class="text-secondary">Revenue:</span> ${addCommasToNumber(movie.revenue)}</li>
    <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
    <li><span class="text-secondary">Status:</span> ${movie.status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group"> ${movie.production_companies
    .map(company => `<span>${company.name}</span>`)
    .join(', ')} </div>
</div>
  `

  document.querySelector('section.container').appendChild(div)
}

//highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link')
  links.forEach(link => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active')
    }
  })
}

function showSpinner() {
  document.querySelector('.spinner').classList.add('show')
}

function hideSpinner() {
  document.querySelector('.spinner').classList.remove('show')
}

//show Alert
function showAlert(message, className) {
  const alertEl = document.createElement('div')
  alertEl.classList.add('alert', 'alert-danger')
  alertEl.appendChild(document.createTextNode(message))
  document.querySelector('#alert').appendChild(alertEl)

  setTimeout(() => alertEl.remove(), 3000)
}

function addCommasToNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

async function displaySlider() {
  const { results } = await fetchAPIData('movie/now_playing')

  results.forEach(movie => {
    const div = document.createElement('div')
    div.classList.add('swiper-slide')
    div.innerHTML = `

          <a href="movie-details.html?id=${movie.id}">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
          </a>
          <h4 class="swiper-rating">
            <i class="fas fa-star text-secondary"></i> ${movie.vote_average} / 10
          </h4>
 
    `
    document.querySelector('.swiper-wrapper').appendChild(div)
    initSwiper()
  })
}

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  })
}

function init() {
  switch (global.currentPage) {
    case '/flixx-app/':
    case '/flixx-app/index.html':
      console.log('home')
      displaySlider()
      displayPopularMovies()

      break

    case '/flixx-app/shows.html':
      console.log('Shows')
      displayPopularShows()
      break

    case '/flixx-app/movie-details.html':
      console.log('Movie Details')
      displayMovieDetails()
      break

    case '/flixx-app/tv-details.html':
      console.log('TV Details')
      break

    case '/flixx-app/search.html':
      console.log('Search')
      search()
      break

    default:
      console.log('404')
  }

  highlightActiveLink()
}

document.addEventListener('DOMContentLoaded', init)
