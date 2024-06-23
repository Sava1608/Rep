import React from 'react';
import {useAppSelector} from "../../hooks/hook.redux";
import Movie from "../Movie/Movie";

const MoviesGenres = () => {
    const {movies} = useAppSelector(state => state.moviesReducer);
    const array = movies?.results;
    return (
        <div>
            <div className={"row row-cols-md-4 g-4"}>
                { ! array ? <div>loading</div> :
                    array.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

export default MoviesGenres;