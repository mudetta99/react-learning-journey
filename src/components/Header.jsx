import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";



function CustomNavbar() {  
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div className="container">
        <a className="navbar-brand" href="#home">Reactify</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav"
                aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="basic-navbar-nav">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#link">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="basic-nav-dropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="basic-nav-dropdown">
                        <li><a className="dropdown-item" href="#action/3.1">Action</a></li>
                        <li><a className="dropdown-item" href="#action/3.2">Another action</a></li>
                        <li><a className="dropdown-item" href="#action/3.3">Something</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#action/3.4">Separated link</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>

  );
}

export default CustomNavbar;  
