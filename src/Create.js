import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setLoading(true);

    fetch("http://localhost:3000/blogs/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setLoading(false);
      setBody("");
      setTitle("");
      navigate("/");
    });
  };

  return (
    <div>
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title: </label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body: </label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}>
          required
        </textarea>
        <label>Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!loading && <button>Add blog</button>}
        {loading && <button>Adding blog...</button>}
        <p>title: {title}</p>
        <p>body: {body}</p>
        <p>author: {author}</p>

        <button
          onClick={(e) => {
            e.preventDefault();

            navigator.clipboard.writeText(body);
          }}
        >
          copy
        </button>
      </form>
    </div>
  );
}

export default Create;
