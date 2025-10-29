import { useEffect, useState } from "react";
import type { MovieFilters } from "../../types/MovieFilter";

import "./MovieFilters.scss";

import InputGroup from "react-bootstrap/esm/InputGroup";
import Form from "react-bootstrap/esm/Form";

import "bootstrap-icons/font/bootstrap-icons.css";
import { useDebounce } from "../../hooks/useDebounce";

type MovieFilterProps = {
  onChange: (filters: MovieFilters) => void;
};

export default function MovieFilters({ onChange }: MovieFilterProps) {
  const [search, setSearch] = useState<MovieFilters["search"]>("");
  const [category, setCategory] = useState<MovieFilters["category"]>("popular");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    onChange({ category, search: debouncedSearch });
  }, [category, debouncedSearch]);

  return (
    <div className="d-flex align-items-center w-100 filter-container">
      <InputGroup className="search-bar me-3">
        <InputGroup.Text className="custom-input-group-text">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
        <Form.Control
          placeholder="Pesquisar..."
          aria-label="pesquisa"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="custom-form-control"
        />
      </InputGroup>
      <Form.Select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as MovieFilters["category"])
        }
        className="custom-select"
      >
        <option value="popular">Filmes mais populares</option>
        <option value="now_playing">Filmes em cartaz</option>
        <option value="top_rated">Filmes com maior nota</option>
      </Form.Select>
    </div>
  );
}
