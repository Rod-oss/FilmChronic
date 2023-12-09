import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <header
      className={`navbar navbar-expand-lg fixed-top border-bottom mb-5 ${styles.navbar}`}
      data-bs-theme="dark"
    >
      <nav
        className="container-fluid d-flex align-items-center justify-content-around"
        id="navbar"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}
          ></span>
        </button>

        <ul
          className="collapse navbar-collapse navbar-nav col-lg-4 order-2 order-lg-0 justify-content-center gap-4 gap-lg-1 my-3 my-lg-0"
          id="navbarToggler"
        >
          <Link
            to="/category/Película instantánea"
            className={` nav-item nav-link ${styles.navLink}`}
          >
            Película instantánea
          </Link>
          <Link
            to="/category/35 mm"
            className={` nav-item nav-link ${styles.navLink}`}
          >
            35 mm
          </Link>
          <Link
            to="/category/120 mm"
            className={` nav-item nav-link ${styles.navLink}`}
          >
            120 mm
          </Link>
        </ul>

        <div className="col-lg-4 text-center">
          <Link
            to="/"
            className={`fs-1 navbar-brand d-inline-flex py-0 mx-0 ${styles.navbarBrand}`}
          >
            <img src={"/logo80.png"} alt="Logo de Film Chronic" />
          </Link>
        </div>

        <div className="col-lg-4 text-center d-flex justify-content-center">
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
