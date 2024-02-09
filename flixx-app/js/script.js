const global = {
  currentPage: window.location.pathname,
}

console.log(global.currentPage)

//fetch data from TMDB API

async function fetchAPIData(endpoint) {
  const API_KEY = 'a8500c5a90558ec8ae375b1874501089'
  const API_URL = 'https://api.themoviedb.org/3/'

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  )
  const data = await response.json()
  return data
}

async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular')

  results.forEach((result) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    
    <a href="movie-details.html?id=${result.id}">   
    ${result.poster_path 
        ? `<img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" class="card-img-top" alt="Movie Title" />` 
        : `<img src="images/no-image.jpg" class="card-img-top" alt="${result.title}" />`
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
    console.log(result)
  })

//   console.log(result)
    
}

//highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link')
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active')
    }
  })
}

function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('home')
      displayPopularMovies()
      break

    case '/shows.html':
      console.log('Shows')
      break

    case '/movie-details.html':
      console.log('Movie Details')
      break

    case '/tv-details.html':
      console.log('TV Details')
      break

    case '/search.html':
      console.log('Search')
      break

    default:
      console.log('404')
  }

  highlightActiveLink()
}

document.addEventListener('DOMContentLoaded', init)
