import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export interface Props {
  rating: number;
}

export default function StarRating(rating: Props) {
  // número de estrelas que um filme pode ter (max: 5)
  const stars = Math.round(rating.rating);

  const fullStars = [];
  const emptyStars = [];

  // loop usado para determinar o número de estrelas, cheias e vazias, necessárias para representar a nota do filme
  for (let i = 0; i < 10; i++) {
    if (i < stars) {
      fullStars.push(i);
    } else {
      emptyStars.push(i);
    }
  }

  return (
    <>
      {fullStars.map((index) => (
        <i className="bi bi-star-fill" key={index}></i>
      ))}
      {emptyStars.map((index) => (
        <i className="bi bi-star" key={index}></i>
      ))}
    </>
  );
}
