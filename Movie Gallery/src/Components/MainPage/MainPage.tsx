import DropdownHeader from "../DropdownButton/DropdownButton";
import SearchBar from "../SearchBar/SearchBar";
import MovieList from "../MovieList/MovieList";
import axios from "axios";
import type { Movie } from "../../types/Movie";
import type { MovieFilters } from "../../types/MovieFilter";
import { useState, useEffect, useCallback } from "react"; 

// Exibe a página principal da aplicação
export default function MainPage() {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [filters, setFilters] = useState<MovieFilters>({ category: "popular" });

  const getMovies = useCallback(() => {
    if (!filters.category) return;

    const options = {
      method: "get",
      url: `http://localhost:8080/movies/${filters.category}`,
    };

    axios
      .request(options)
      .then((response) => {
        setMovies(response.data);
        console.log(`Filmes carregados para a categoria: ${filters.category}`);
      })
      .catch((error) => {
        console.error("Erro ao carregar filmes:", error);
      });
  }, [filters]); 


  useEffect(() => {
    getMovies();
  }, [getMovies]); 


  const handleFilterChange = (newFilters: MovieFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <div className="d-grid gap-3">
        <div className="d-flex justify-content-center mt-3 ">
          <h1 className=""> Filmes </h1>
        </div>
        <header className="d-flex justify-content-between py-3 mb-3 border-bottom header">
          <DropdownHeader
            onChange={handleFilterChange} 
          />
          <SearchBar />
        </header>
        <div>{<MovieList movies={movies} />}</div>
      </div>
    </>
  );
}
