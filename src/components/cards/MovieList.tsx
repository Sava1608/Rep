import React, {FC} from 'react';
import {IMoviesResult} from "../../interfaces/IMovies";
import {useAppSelector} from "../../hooks/hook.redux";
import {Link} from "react-router-dom";

interface IProps{
    movies:IMoviesResult;
}

const MovieList:FC<IProps> = ({movies}) => {
    const {toggle} = useAppSelector(state => state.movieReducer);
    const {title, vote_average, poster_path, release_date} = movies;
    return (
            <div>
                <Link to={'/info'} state={...movies}>

                </Link>
            </div>
    );
};

export default MovieList;