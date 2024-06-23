import React from 'react';
import {useAppSelector} from "../../hooks/hook.redux";

const TrailerMovie = () => {
    const {videos} = useAppSelector(state => state.moviesReducer)
    return (
        <div className="d-flex justify-content-center my-4">
            <div className="video-wrapper">
                <iframe
                    src={`https://www.youtube.com/embed/${videos && videos.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-iframe"
                    title="YouTube video player"
                />
            </div>
        </div>
    );
};

export default TrailerMovie;