import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AllMovie from "./components/Movie/AllMovie";
import MovieInfo from "./components/Movie/MovieInfo";
import MoviesGenres from "./components/Genre/MoviesGenres";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'movies'}/>}/>
        <Route path={'movies'} element={<AllMovie/>}/>;
        <Route path={'info'} element={<MovieInfo/>}/>;
        <Route path={'genre'} element={<MoviesGenres/>}/>;
      </Route>
    </Routes>
  );
}

export default App;
