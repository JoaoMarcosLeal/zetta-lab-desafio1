import { useState } from "react";

import type { Movie } from "../../types/Movie";

import "./MainPage.scss";

import MovieList from "../MovieList/MovieList";
import Header from "../Header/Header";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

// Exibe a página principal da aplicação
export default function MainPageTest() {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  return (
    <Container fluid className="p-0">
      <div className="d-grid gap-3">
        <header className="mb-4">
          <Header onChange={(newMovies) => setMovies(newMovies)}></Header>
        </header>

        <Row className="mx-0 px-3">
          <Col>
            <main>
              <MovieList movies={movies} />
            </main>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
