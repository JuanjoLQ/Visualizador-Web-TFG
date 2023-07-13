import React from "react";

// Importamos los estilos CSS de la App
import "./App.css";

// Importar componentes
import NavbarPage from "./components/navbarPage"; // Barra de navegación superior
import ControlPanel from "./components/ControlPanel"; // Panel de control principal
import Sidebar from "./components/Sidebar"; // Barra lateral de navegación
import Container from "react-bootstrap/Container"; // Contenedor de Bootstrap
import Row from "react-bootstrap/Row"; // Fila de Bootstrap
import Col from "react-bootstrap/Col"; // Columna de Bootstrap
import PieChartRechart from "./components/charts/PieChartRechart";

import { HelloWorld } from "./components/HelloWorld";

import { Link, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const Home = () => <h1>Home</h1>;

const About = () => <h1>About</h1>;

// Componente principal de la aplicación
function App() {
  return (
    <>
      {/* <PieChartRechart /> */}
      {/* <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/hello">Hello World!</a></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/hello' element={<HelloWorld />} />
      </Routes> */}

      <div className="color-navbar">
        <NavbarPage />
      </div>
      {/* <Loading /> */}
      <Container fluid>
        {/* Sidebar */}
        <Row>
          {/* <Col className="col-xl-2 col-md-2 col-sm-3 col-4 color-sidebar">
            <div className="container d-flex sidebar color-sidebar">
              <Sidebar />
            </div>
          </Col> */}
          {/* ControlPanel */}
          <Col className="col-xl-12 col-md-12 col-sm-12 col-12 mb-1">
            <ControlPanel />
            <br />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
