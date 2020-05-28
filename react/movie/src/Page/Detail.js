/* eslint-disable no-undef */
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";

const Detail = () => {
  return (
    <>
      <div className="detail-wrapper">
        <h2>movie detail</h2>
        <div className="detail-img">
          <img
            className="movie_img"
            src={`https://image.tmdb.org/t/p/w500/` + poster_path}
            alt={title}
          />
        </div>
        <div className="detail-text">
          <h4>{title}</h4>
          <i className="fas fa-star-of-life"></i>
          <em>{vote_average}</em>
          <span className="date">{release_date}</span>
        </div>
      </div>
    </>
  );
};

export default Detail;
