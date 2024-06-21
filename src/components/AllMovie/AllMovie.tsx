import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hook.redux";
import {useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux/slice/slice";

const AllMovie = () => {
    const dispatch = useAppDispatch();
    const [query,] = useSearchParams();
    const {movies, toggle} = useAppSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getMovies(+query.get('page')));
    }, [dispatch,query]);

    return (
        <div>

        </div>
    );
};

export default AllMovie;