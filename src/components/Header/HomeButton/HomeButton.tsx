import React from 'react';
import {useAppSelector} from "../../../hooks/hook.redux";
import {Link} from "react-router-dom";

const HomeButton = () => {
    const {toggle} = useAppSelector(state => state.movieReducer);

    return (
        <div>
            <Link to={'/movies?page=1'}>
                <button>Home</button>
            </Link>
        </div>
    );
};

export default HomeButton;