import React from "react";
import { Link } from "react-router-dom";
import Clock from "./Clock";

function navbarPage() {
  const secciones = [
    "Company",
    "Department",
    "User",
    "Role",
    "Allowance",
    "Lead",
    "Customer",
    "Sales",
    "Product",
    "Warehouses",
    "Mileage",
  ];

  return (
    // Barra de navegación con el logotipo y botón para abrir el menú en dispositivos móviles
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Navbar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación que se despliega en dispositivos móviles */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {/* Lista de opciones de navegación */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={`/home`} className="nav-link active text-light">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Secciones
              </a>
              <ul className="dropdown-menu">
                {secciones.map((seccion) => (
                  <li key={seccion}>
                    <Link
                      to={`/seccion/${seccion}`}
                      className="dropdown-item rounded tam-text-navitem text-dark"
                    >
                      {seccion}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled text-light"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li> */}
          </ul>
          <div className="me-5">
            <Clock />
          </div>

          {/* Formulario de búsqueda */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default navbarPage;
