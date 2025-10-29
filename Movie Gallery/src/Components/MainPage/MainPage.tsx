import { useEffect, useState } from "react";

import type { MovieFilters } from "../../types/MovieFilter";
import type { Movie } from "../../types/Movie";

import MovieListFilters from "../MovieListFilters/MovieListFilters";

import "./MainPage.scss";

import axios from "axios";

import MovieList from "../MovieList/MovieList";
import Header from "../Header/Header";

// Exibe a página principal da aplicação
export default function MainPageTest() {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  return (
    <div className="d-grid gap-3">
      <Header onChange={(newMovies) => setMovies(newMovies)}></Header>
      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
