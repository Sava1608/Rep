import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hook.redux";
import {useSearchParams} from "react-router-dom";
import {moviesActions} from "../../redux/slice/slice";
import Search from "../Search/Search";
import GenreList from "../Genre/List/GenreList";
import Movie from "./Movie";
import Pagination from "../Pagination/Pagination";

const AllMovie = () => {
    const dispatch = useAppDispatch();
    const [query] = useSearchParams();
    const {movies,} = useAppSelector(state => state.moviesReducer);
    useEffect(() => {
        dispatch(moviesActions.getMovies(+query.get('page')));
    }, [dispatch,query]);
    return (
        <div>
            <div><Search/></div>
            <div><GenreList/></div>
            <div className={"row row-cols-md-4 g-4"}>
                {
                    !movies ? <div>Loading - - -</div> :
                        movies.results.map((movie) =>(<Movie key={movie.id} movie={movie}/>))
                }
            </div>
            <Pagination/>
        </div>
    );
};

export default AllMovie;