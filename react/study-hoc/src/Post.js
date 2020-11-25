import React from "react";
import withRequest2 from "./withRequest2";

const Post = (data) => {
  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
};

export default withRequest2("https://jsonplaceholder.typicode.com/posts/1")(
  Post
);
