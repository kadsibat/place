
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="text-white bg-dark w-100">
        <ul className="nav justify-content-center ">
          <li className="nav-item ">
            <a className="nav-link" href="#">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">FOR YOU</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SERVİCES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">VLOG</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">BLOG</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
