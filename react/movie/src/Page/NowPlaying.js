import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";

const NowPlaying = ({ state }) => {
  console.log(state.movieState);
  return (
    <>
      <h2>NowPlaying</h2>
      <ul className="movie-list clearfix">
        {state.movieState.map(
          ({
            id,
            title,
            release_date,
            poster_path,
            overview,
            vote_average,
          }) => (
            <Link to={"/NowPlaying/" + id} key={`link` + id}>
              <li key={id} className="movie">
                <h4>{title}</h4>
                <i class="fas fa-star-of-life"></i>
                <em>{vote_average}</em>
                <img
                  className="movie_img"
                  src={`https://image.tmdb.org/t/p/w500/` + poster_path}
                  alt={title}
                />
                {/* <span className="overview">{overview}</span> */}
                <span className="date">{release_date}</span>
              </li>
            </Link>
          )
        )}
      </ul>
    </>
  );
};

export default NowPlaying;
