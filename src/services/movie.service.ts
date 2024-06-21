import {IRes} from "../type/res.type";
import {IMovies} from "../interfaces/IMovies";
import {axiosService} from "./api.service";
import {urls} from "../urls/urls";
import {IGenre} from "../interfaces/IGenre";
import {IVideo} from "../interfaces/IVideo";

const movieService = {
    getMovies:(page: number = 1): IRes<IMovies> => axiosService.get(urls.homePage,{params:{page}}),
    getGenre:(): IRes<IGenre> => axiosService.get(urls.genreList),
    search:(title: string): IRes<IMovies> => axiosService.get(`${urls.search}${title}`),
    getVideoId:(id:number): IRes<IVideo> => axiosService.get(`${urls.movie}${id}${urls.videos}`),
    getGenreId: (id: string): IRes<IMovies> => axiosService.get(`${urls.homePage}${urls.genreId}${id}`)
}

export {
    movieService
}