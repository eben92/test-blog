import BlogList from "./BlogList";
import useFetch from "./useFetch";
function Home() {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/blogs");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   // the code above creates a new array of blogs and stores the undeleted blogs in it and then we
  //   // set that new blogs in the code below
  //   setBlogs(newBlogs);
  // };

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}

      {blogs && (
        <BlogList
          propsBlogs={blogs}
          title='Find All Blogs Here'
          // deleteBlog={handleDelete}
        />
      )}
      {/* this propsBlogs is a reusable component coming from the inside the bloglist compponent */}
    </div>
  );
}

export default Home;
