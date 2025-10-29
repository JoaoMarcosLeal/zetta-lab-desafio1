import Card from "react-bootstrap/Card";
import "./MovieCard.scss";
import type { Movie } from "../../types/Movie";
import StarRating from "../StarRating/StarRating";

export default function MovieCard(movie: Movie) {
  return (
    <Card className="card h-100">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        className="card-image"
        alt={movie.title}
      />
      <div className="card-overlay">
        <Card.Title className="overlay-title">{movie.title}</Card.Title>
        <StarRating rating={movie.vote_average} />
        <Card.Text className="overlay-text">{movie.overview}</Card.Text>
      </div>
    </Card>
  );
}
