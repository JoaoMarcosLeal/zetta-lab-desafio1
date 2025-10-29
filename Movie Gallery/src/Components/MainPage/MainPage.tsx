import { useState } from "react";

import type { Movie } from "../../types/Movie";

import "./MainPage.scss";

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
