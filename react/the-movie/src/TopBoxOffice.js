import React, { useEffect } from "react";
import { useNowState, useNowDispatch, getTop } from "./MoviesContext";

const TopBoxOffice = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const state = useNowState();
  const dispatch = useNowDispatch();

  const { data: movieList, loading, error } = state.now;

  const fetchData = () => {
    getTop(dispatch);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러.</div>;
  if (!movieList) return null;

  console.log(movieList);
  return <div>TopBoxOffice</div>;
};

export default TopBoxOffice;
