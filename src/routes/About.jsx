import { NavLink, Outlet } from 'react-router-dom';

const About = () => (
  <main>
    <div className="container padding">
      <h1 style={{ margin: '2rem 0' }}>About page.</h1>
      <div className="about">
        <ul className="about_list">
          <li>
            <NavLink to="about-app">About app</NavLink>
          </li>
          <li>
            <NavLink to="about-developer">About developer</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  </main>
);

export default About;
