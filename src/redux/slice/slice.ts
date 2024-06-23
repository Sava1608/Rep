
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IGenre } from "../../interfaces/IGenre";
import { IMovies } from "../../interfaces/IMovies";
import {IVideo, IVideoResult} from "../../interfaces/IVideo";
import {movieService} from "../../services/movie.service";

interface IState {
    genres: IGenre | null,
    arrIdGenres: string[],
    movies: IMovies | null,
    error: string | null,
    img: string | null,
    toggle: boolean,
    videos: IVideoResult | null;
}

const initialState: IState = {
    genres: null,
    movies: null,
    error: null,
    img: null,
    arrIdGenres: [],
    toggle: false,
    videos: null
}

const getMovies = createAsyncThunk<IMovies, number>(
    'moviesSlice/getMovies',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const getGenres = createAsyncThunk<IGenre, void>(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenre();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const search = createAsyncThunk<IMovies, string>(
    'searchSlice/search',
    async (title, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(title);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const getMoviesByGenre = createAsyncThunk<IMovies, string>(
    'genresSlice/getMoviesByGenre',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenreId(id.toString());
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const getVideos = createAsyncThunk<IVideo, number>(
    'genresSlice/getVideos',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getVideoId(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)


const slice = createSlice({
        name: 'moviesSlice',
        initialState,
        reducers: {
            pushIdGenres: (state, action) => {
                state.arrIdGenres = action.payload;
            },
            switcher: (state) => {
                state.toggle = !state.toggle;
            }

        },

        extraReducers: builder => {
            builder
                .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                    state.movies = action.payload;
                })
                .addCase(getMovies.fulfilled, (state, action) => {
                    state.movies = action.payload;
                })

                .addCase(search.fulfilled, (state, action) => {
                    state.movies = action.payload;
                })
                .addCase(getGenres.fulfilled, (state, action) => {
                    state.genres = action.payload;
                })
                .addCase(getVideos.fulfilled, (state, action) => {
                    const {results} = action.payload;
                    const trailer = results.find(official => official.name === 'Official Trailer');
                    state.videos = trailer ?? null;
                })


                .addMatcher(isFulfilled, state => {
                    state.error = null;
                })
                .addMatcher(isRejectedWithValue(), (state, action) => {
                    state.error = action.payload as any;
                })
        },
    }
)

const {actions, reducer: moviesReducer} = slice;

const moviesActions = {
    ...actions,
    search,
    getGenres,
    getMovies,
    getMoviesByGenre,
    getVideos
}

export {
    moviesReducer,
    moviesActions
}