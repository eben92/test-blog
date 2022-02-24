import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  console.log(id);
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/blogs/${id}`);

  return (
    <div>
      {isLoading && <div>Loadng ...</div>}
      {Error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          {/* <button onClick={()=>}>delete</button> */}
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
