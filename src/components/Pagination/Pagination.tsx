import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

const Pagination:FC = () => {
     const [query, setQuery]= useSearchParams({page:'1'});
     const next = () => {
         setQuery(prev1 => ({...prev1, page: +prev1.get('page') + 1}));
     }
     const prev = () => {
         setQuery(prev1 => ({...prev1, page: +prev1.get('page') - 1}));
     }
    return (
        <div className="d-flex justify-content-around mt-3">
            <button
                type="button"
                className="btn btn-primary"
                disabled={+query.get('page') <= 1}
                onClick={prev}
            >
                Prev
            </button>
            <button
                type="button"
                className="btn btn-primary"
                disabled={+query.get('page') >= 500}
                onClick={next}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;