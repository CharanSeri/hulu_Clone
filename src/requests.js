const API_KEY = '3bc7d6ace3ce80689836d2664ae1b1ac';

export default {
    fetchTrending: `trending/all/week?api_key=
    ${API_KEY}&language=en-US`,
    fetchTopRated: `movie/top_rated?api_key=
    ${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genrs=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genrs=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genrs=10749`,
    fetchMystery: `discover/movie?api_key=${API_KEY}&with_genrs=9648`,
    fetchSciFi: `discover/movie?api_key=${API_KEY}&with_genrs=878`,
    fetchWestern: `discover/movie?api_key=${API_KEY}&with_genrs=37`,
    fetchAnimation: `discover/movie?api_key=${API_KEY}&with_genrs=16`,
    fetchTV: `discover/movie?api_key=${API_KEY}&with_genrs=10770`,
};