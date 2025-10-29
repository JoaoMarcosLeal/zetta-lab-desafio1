import { useEffect, useState } from "react";

import MovieListFilters from "../MovieListFilters/MovieListFilters";

import type { MovieFilters } from "../../types/MovieFilter";

import type { Movie } from "../../types/Movie";

import axios from "axios";

type HeaderProps = {
  onChange: (movies: Array<Movie>) => void;
};

export default function header({ onChange }: HeaderProps) {
  const [search, setSearch] = useState<MovieFilters["search"]>("");
  const [category, setCategory] = useState<MovieFilters["category"]>("popular");

  useEffect(() => {
    // gambiarra para determinar o caminho(remover, se der tempo)
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
  }, [search, category]);

  return (
    <header
      className="
        d-flex 
        flex-column flex-md-row          
        align-items-start align-items-md-center 
        justify-content-between 
        py-3 py-md-4                   
        mb-3 border-bottom 
        header
      "
    >
      <h1 className="header-title mb-2 mb-md-0">Movie Gallery</h1>
      <MovieListFilters
        onChange={(filters) => {
          setCategory(filters.category);
          setSearch(filters.search);
        }}
      />
    </header>
  );
}
