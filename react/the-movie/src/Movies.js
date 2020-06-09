import React, { useEffect } from "react";
import { useNowState, useNowDispatch, getNow } from "./MoviesContext";

const Movies = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const state = useNowState();
  const dispatch = useNowDispatch();

  const { data: movieList, loading, error } = state.now;
  const fetchData = () => {
    getNow(dispatch);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러.</div>;
  if (!movieList) return null;

  console.log(movieList);

  return (
    <div>
      <h1>Now Playing</h1>
      <p>이 곳은 홈입니다.</p>
    </div>
  );
};

export default Movies;
