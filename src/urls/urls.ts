const baseURL = 'https://api.themoviedb.org/3';
const postURL = 'https://image.tmdb.org/t/p/w500/';
const urls = {
    homePage: '/discover/movie',
    genreList: '/genre/list',
    movie: '/movie/',
    videos: '/videos',
    page: '?page=',
    search: '/search/movie?query=',
    genreId: '?with_genres=',
    infoId: '/movie/'
}

export {
    baseURL,
    postURL,
    urls
}