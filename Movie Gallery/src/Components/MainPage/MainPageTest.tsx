import { useEffect, useState } from "react";
import type { MovieFilters } from "../../types/MovieFilter";
import MovieListFilters from "../MovieListFilters/MovieListFilters";
import type { Movie } from "../../types/Movie";
import axios from "axios";
import MovieList from "../MovieList/MovieList";

// Exibe a página principal da aplicação
export default function MainPageTest() {
  const [search, setSearch] = useState<MovieFilters["search"]>("");
  const [category, setCategory] = useState<MovieFilters["category"]>("popular");
  const [movies, setMovies] = useState<Array<Movie>>([]);

  let path = "";
  useEffect(() => {
    // gambiarra para determinar o caminho(remover, se der tempo)
    if (search && search.length > 0) {
      path = `http://localhost:8080/movies/search?query=${search}`;
    } else {
      path = `http://localhost:8080/movies/${category}`;
    }

    const options = {
      method: "get",
      url: path,
    };

    axios
      .request(options)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar filmes:", error);
      });
  }, [search, category]);

  return (
    <>
      <div className="d-grid gap-3">
        <header className="d-flex justify-content-between py-3 mb-3 border-bottom header">
          <MovieListFilters
            onChange={(filters) => {
              setCategory(filters.category);
              setSearch(filters.search);
            }}
          />
        </header>
        <div>
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
}
