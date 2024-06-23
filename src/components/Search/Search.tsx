import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {joi} from "../../validation/serach.validation";
import {useAppDispatch} from "../../hooks/hook.redux";
import {moviesActions} from "../../redux/slice/slice";

interface ISearch{
    title:string;
    page:string;
}
const Search:FC = () => {
    const {register,handleSubmit,reset,formState:{isValid}} = useForm({
        mode:'all',
        resolver:joiResolver(joi)
    })
    const dispatch = useAppDispatch();
    const searchMovie:SubmitHandler<ISearch> = ({title}) => {
        dispatch(moviesActions.search(title))
        reset();
    }
    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit(searchMovie)} className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search movie"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    {...register('title')}
                />
                <button
                    disabled={!isValid}
                    id="button-addon2"
                    className="btn btn-primary"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;