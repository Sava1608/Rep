import React, {Component, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hook.redux";
import {Link, useLocation} from "react-router-dom";
import {IMoviesResult} from "../../interfaces/IMovies";
import {moviesActions} from "../../redux/slice/slice";
import StarRatings from 'react-star-ratings';
import {postURL} from "../../urls/urls";
import TrailerMovie from "../Trailer/TrailerMovie";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieInfo = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const {
        id,
        title,
        poster_path,
        overview,
        release_date,
        genre_ids,
        vote_average,
    } = location.state as IMoviesResult;
    const {genres} = useAppSelector(state => state.moviesReducer);
    const filter = genres?.genres.filter(genre => genre_ids.includes(genre.id));
    const search = (id) => {
        dispatch(moviesActions.getMoviesByGenre(id));
    }
    useEffect(() => {
        dispatch(moviesActions.getVideos(id));
    }, [dispatch, id]);
    class kit extends Component {
        render() {
            return (
                <StarRatings numberOfStars={10}
                             rating={vote_average}
                             starDimension='20px'
                             starSpacing='5px'
                />
            )
        }
    }
    const star = new kit(StarRatings);
    const imgPoster = poster_path ? `${postURL}${poster_path}` : `${poster_path}`;
    return (
        <div className="container mt-4">
            <div className="row">
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <img src={imgPoster} alt={title} className="img-fluid"/>
                </div>
                <div className="col-md-8">
                    <h2>{title}</h2>
                    <h6>{release_date}</h6>
                    <p>{overview}</p>
                    <div>{star.render()}</div>
                    <div className="mt-3">
                        {
                            !genres ?
                                <Link to={'/movies'}>
                                    <button className="btn btn-primary">Load Genre</button>
                                </Link> :
                                filter?.map(g =>
                                    <Link key={g.id} to={'/genre'}>
                                        <button className="btn btn-secondary me-2" onClick={() => {
                                            search(g.id)
                                        }}>{g.name}</button>
                                    </Link>)
                        }
                        <div className="row mt-4">
                            <div className="col-12">
                                <TrailerMovie/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;