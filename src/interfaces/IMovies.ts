export interface IMoviesResult{
    adult: boolean;
    id: number;
    title: string;
    video: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    original_language: string;
    original_title: string;
    backdrop_path: string;
    genre_ids: [number];
}
export interface IMovies{
    page: number;
    results: [IMoviesResult];
    total_pages: number;
    total_results: number;
}