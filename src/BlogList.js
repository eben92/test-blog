// this is a reuasable component
// props
import { Link } from "react-router-dom";
function BlogList({ propsBlogs, title }) {
  const blogs = propsBlogs;
  // this code above a reauseable and its being imported to the Home.js component

  return (
    <div className='blog-list'>
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h4>{blog.title}</h4>
            <h5>written by : {blog.author}</h5>
            <p>{blog.body}</p>
          </Link>

          {/* <button onClick={() => deleteBlog(blog.id)}>Delete blog</button> */}
        </div>
      ))}
    </div>
  );
}

export default BlogList;
