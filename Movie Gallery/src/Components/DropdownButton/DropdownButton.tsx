import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import type { MovieFilters } from "../../types/MovieFilter";
import { useState, useCallback } from "react";

// Títulos para cada categoria
const CATEGORY_TITLES = {
  popular: "Filmes Populares",
  top_rated: "Mais Bem Avaliados",
  now_playing: "Filmes Em Cartaz",
};

type MovieListFilttersProps = {
  onChange: (filters: MovieFilters) => void;
};

export default function DropdownHeader({ onChange }: MovieListFilttersProps) {
  const initialCategory: MovieFilters["category"] = "popular";

  const [dropdownTitle, setDropdownTitle] = useState(
    CATEGORY_TITLES[initialCategory]
  );

  // Função pra tratar a seleção de uma categoria
  const handleSelect = useCallback(
    (eventKey: string | null) => {
      if (eventKey) {
        const newCategory = eventKey as MovieFilters["category"];
        
        setDropdownTitle(CATEGORY_TITLES[newCategory]);

        onChange({
          category: newCategory,
        } as MovieFilters);
      }
    },
    [onChange]
  );

  return (
    <DropdownButton
      className="dropdown-button"
      variant="Secondary"
      title={dropdownTitle}
      data-bs-theme="dark"
      onSelect={handleSelect}
    >
      <Dropdown.Item eventKey="popular">Filmes Populares</Dropdown.Item>
      <Dropdown.Item eventKey="top_rated">Mais Bem Avaliados</Dropdown.Item>
      <Dropdown.Item eventKey="now_playing">Filmes Em Cartaz</Dropdown.Item>
    </DropdownButton>
  );
}
