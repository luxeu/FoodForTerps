import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Home.css';

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        FoodForTerps
      </Link>
      <ul>
        <CustomLink to="/aboutus">About Us</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default NavBar

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <p>
//           Food For Terps
//         </p>
//         <div className="navbar-container2">
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default NavBar
