import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import "./index.scss";

import type { Movie } from "../../types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const options = {
      method: "get",
      url: "http://localhost:8080/movies/popular",
    };

    axios
      .request(options)
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
