import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <h1>My Blog</h1>

        <Link to='/'>Home</Link>
        <Link to='/create'>New Blog</Link>
      </nav>
    </div>
  );
}

export default Navbar;
