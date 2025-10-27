import Card from "react-bootstrap/Card";
import "./index.scss";
import type { Movie } from "../../types";

export default function MovieCard(props: Movie) {
  return (
    <Card style={{ width: "20rem" }} className="card">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
        className="card-image"
      />
      <div className="card-overlay">
        <Card.Title className="overlay-title">{props.title}</Card.Title>
        <Card.Text className="overlay-text">{props.overview}</Card.Text>
      </div>
    </Card>
  );
}
