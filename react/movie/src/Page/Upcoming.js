import React, { useEffect, useReducer } from "react";
import { movies } from "../api";
import { Link } from "react-router-dom";
import "../App.css";
import { reducer, initialState } from "../reducer/movieReducer";

const Upcoming = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const movieFunc = async () => {
      try {
        dispatch({ type: "LOADING" });
        let movieData = await movies.getUpcoming();
        // console.log(movieData.results);
        if (movieData.status === 200) {
          dispatch({ type: "SUCCESS", data: movieData.data.results });
        } else {
          dispatch({
            type: "ERROR",
            error: {
              state: true,
              message: movieData.statusText,
            },
          });
        }
      } catch (error) {
        dispatch({
          type: "ERROR",
          error: {
            state: true,
            message: error.message,
          },
        });
      }
    };

    movieFunc();
  }, []);
  console.log(state);

  return (
    <>
      <h2>Upcoming</h2>
      {/* <ul className="movie-list clearfix">
        {state.movieState.map(
          ({
            id,
            title,
            release_date,
            poster_path,
            overview,
            vote_average,
          }) => (
            <Link to={"/Upcoming/" + id}>
              <li key={id} className="movie">
                <h4>{title}</h4>
                <em>{vote_average}</em>
                <img
                  className="movie_img"
                  src={`https://image.tmdb.org/t/p/w500/` + poster_path}
                  alt={title}
                />
                <span className="date">{release_date}</span>
              </li>
            </Link>
          )
        )}
      </ul> */}
    </>
  );
};

export default Upcoming;
