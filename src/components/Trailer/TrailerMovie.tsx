import React from 'react';
import {useAppSelector} from "../../hooks/hook.redux";

const TrailerMovie = () => {

    const {videos} = useAppSelector(state => state.movieReducer)

    return (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${videos && videos.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default TrailerMovie;