import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Home:FC = () => {

    return (
        <div>
            <Link to={'/movies?page=1'}>
                <button type="button" className="btn btn-primary">
                    Home
                </button>
            </Link>
        </div>
    );
};

export default Home;