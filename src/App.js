import { About, Clergy, Contact } from './Views';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from './assets/logo-1.png'
import './globals.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <nav className="navbar bg-success py-2 fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand church-logo" to="/"><img src={logo} alt="church logo" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end bg-success" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">St. Mark Orthodox Church</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/bulletins">Bulletins</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="!#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </a>
                    <ul className="dropdown-menu nav-item">
                      <li><a className="dropdown-item nav-link" href="/about">About</a></li>
                      <li><a className="dropdown-item nav-link" href="/about/clergy">Clergy</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/calendar">Calendar</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/donate">Donate</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/about/clergy" element={<Clergy />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/calendar" element={<Calendar />} /> */}
          {/* <Route path="/donate" element={<Donate />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;