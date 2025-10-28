import MovieCard from "../MovieCard/MovieCard";
import "./index.scss";

import type { Movie } from "../../types/Movie";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Carrega dados de uma array de objetos "Movie" e exibe na UI
export default function MovieList({ movies }: { movies: Array<Movie> }) {
  return (
    <Container fluid className="movies">
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id} xs={6} sm={4} md={3} lg={2}>
            <MovieCard
              title={movie.title}
              overview={movie.overview}
              poster_path={movie.poster_path}
              id={movie.id}
              vote_average={movie.vote_average}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
