import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="layout_nav">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/store">Store</Link>
    </div>
  );
};

export default Nav;
