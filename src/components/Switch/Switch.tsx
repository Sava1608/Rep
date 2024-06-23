import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hook.redux";
import {moviesActions} from "../../redux/slice/slice";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Switch.css';

const Switch: FC = () => {
    const {toggle} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    const toggleFunction = (): void => {
        const switcher = localStorage.getItem('switcher');
        const newSwitcher = switcher === 'false' ? 'true' : 'false';
        localStorage.setItem('switcher', newSwitcher);
        dispatch(moviesActions.switcher());
        document.body.classList.toggle('dark-theme', newSwitcher === 'true');
    };

    useEffect(() => {
        const switcher = localStorage.getItem('switcher');
        if (switcher !== "false") {
            dispatch(moviesActions.switcher());
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [dispatch]);

    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                checked={toggle}
                onChange={toggleFunction}
                type="checkbox"
                role="switch"
                id="themeSwitch"
            />
            <label className="form-check-label" htmlFor="themeSwitch">
                {toggle ? 'Dark Mode' : 'Light Mode'}
            </label>
        </div>
    );
};

export default Switch;