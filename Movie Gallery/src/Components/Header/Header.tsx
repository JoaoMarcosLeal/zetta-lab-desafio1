import { useCallback, useEffect, useState } from "react";

import MovieListFilters from "../MovieListFilters/MovieListFilters";

import type { MovieFilters } from "../../types/MovieFilter";
import type { Movie } from "../../types/Movie";

import axios from "axios";

type HeaderProps = {
  onChange: (movies: Array<Movie>) => void;
};

export default function Header({ onChange }: HeaderProps) {
  const [search, setSearch] = useState<MovieFilters["search"]>("");
  const [category, setCategory] = useState<MovieFilters["category"]>("popular");

  const getMovies = useCallback(() => {
    let path = "";
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
        onChange(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar filmes:", error);
      });
  }, [search, category, onChange]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handleFilterChange = useCallback((filters: MovieFilters) => {
    setCategory(filters.category);
    setSearch(filters.search || "");
  }, []);

  return (
    <>
      <header className="d-flex justify-content-between py-4 mb-3 border-bottom header align-items-center">
        <h1 className="header-title">Movie Gallery</h1>
        <MovieListFilters onChange={handleFilterChange} />
      </header>
    </>
  );
}
