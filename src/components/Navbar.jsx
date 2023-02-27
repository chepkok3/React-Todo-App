import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { path: 'React-Todo-App/', text: 'Home' },
  { path: 'React-Todo-App/about', text: 'About' },
  { path: 'React-Todo-App/profile', text: 'Profile' },
  { path: 'React-Todo-App/login', text: 'Login' },
];

const Navbar = () => (
  <nav>
    <ul className="nav-links">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? 'page-active' : undefined)}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
