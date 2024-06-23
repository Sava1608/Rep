import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/hook.redux";
import {moviesActions} from "../../../redux/slice/slice";
import GenreCard from "../Card/GenreCard";

const GenreList = () => {
    const dispatch = useAppDispatch();
    const {genres,arrIdGenres, } = useAppSelector(state => state.moviesReducer);

    useEffect(() => {
        dispatch(moviesActions.getGenres)
    }, [dispatch]);
    useEffect(() => {
        dispatch(moviesActions.getMoviesByGenre(arrIdGenres.toString()));
    }, [dispatch,arrIdGenres]);

    const res = () => {
        dispatch(moviesActions.pushIdGenres([]))
    }
    return (
        <div className="container mt-4">
            <div className="row">
                {!genres ? (
                    <div className="col-12 text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">=(</span>
                        </div>
                    </div>
                ) : (
                    genres.genres.map(genre =>  <GenreCard key={genre.id} genre={genre}/>)
                )}
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <button type="button" onClick={res} className="btn btn-danger mt-3">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GenreList;