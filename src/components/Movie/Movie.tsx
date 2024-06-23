import React, {FC} from 'react';
import {IMoviesResult} from "../../interfaces/IMovies";
import {postURL} from "../../urls/urls";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps {
    movie: IMoviesResult;
}

const Movie: FC<IProps> = ({ movie }) => {
    const { title, poster_path, release_date, vote_average } = movie;
    const img = poster_path ? `${postURL}${poster_path}` : `${poster_path}`;
    return (
            <div className="d-flex flex-center mb-1">
                <Link to={'/info'} state={{ ...movie }} className="text-decoration-none text-dark justify-content-center d-flex">
                <div className="card h-25 w-75">
                    <img src={img} alt={title} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            Release :{release_date?.slice(0, 4)}
                            <p>Average Rating: {vote_average} ★ IBMd</p>
                        </p>
                    </div>
                </div>
             </Link>
            </div>
    );
};

export default Movie;