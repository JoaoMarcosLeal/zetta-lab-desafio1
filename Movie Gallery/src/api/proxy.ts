import axios from "axios";
import express from "express";
import cors from "cors";
import "dotenv/config";

const PORT: number = 8080;
const app = express();
app.use(cors());

app.get("/movies/popular", (_req, res) => {
  const options = {
    method: "get",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: {
      language: "pt-BR",
      api_key: process.env.REACT_APP_TMDB_KEY,
    },
  };
  axios.request(options).then((response) => {
    res.json(response.data.results);
  });
});

app.get("/movies/now_playing", (_req, res) => {
  const options = {
    method: "get",
    url: "https://api.themoviedb.org/3/movie/now_playing",
    params: {
      language: "pt-BR",
      api_key: process.env.REACT_APP_TMDB_KEY,
    },
  };
  axios.request(options).then((response) => {
    res.json(response.data.results);
  });
});

app.get("/movies/top_rated", (_req, res) => {
  const options = {
    method: "get",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: {
      language: "pt-BR",
      api_key: process.env.REACT_APP_TMDB_KEY,
    },
  };
  axios.request(options).then((response) => {
    res.json(response.data.results);
  });
});

app.get("/movies/search", (req, res) => {
  const query = req.query;

  console.log(query.query);

  const options = {
    method: "get",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      language: "pt-BR",
      api_key: process.env.REACT_APP_TMDB_KEY,
      query: query.query,
    },
  };

  axios.request(options).then((response) => {
    res.json(response.data.results);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
