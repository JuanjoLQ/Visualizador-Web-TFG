import React from 'react'

// Importamos los estilos CSS del Sidebar
import '../css/Sidebar.css'
import { Link } from 'react-router-dom'

// Este componente representa el menú lateral de navegación de la aplicación
function Sidebar() {
    const secciones = [
        'Company',
        'Department',
        'User',
        'Role',
        'Allowance',
        'Lead',
        'Customer',
        'Sales',
        'Product',
        'Warehouses',
        'Mileage',
    ]

    return (
        <>
            <div className="flex-shrink-0 mt-3 sidebar pt-2">
                <ul className="list-unstyled ps-0">

                    {/* Home */}
                    <li className="mb-1">

                        {/* Botón que al hacer click desplegará el contenido */}
                        <button className="btn btn-toggle align-items-center rounded collapsed colornavitemsidebar tam-text-nav" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Home
                        </button>

                        {/* Contenido desplegable */}
                        <div className="collapse show " id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="rounded color-text-navitem tam-text-navitem">Overview</a></li>
                                <li><a href="#" className="rounded color-text-navitem tam-text-navitem">Updates</a></li>
                                <li><a href="#" className="rounded color-text-navitem tam-text-navitem">Reports</a></li>
                            </ul>
                        </div>
                    </li>

                    {/* Sección Dashboard */}
                    <li className="mb-1">

                        {/* Botón que al hacer click desplegará el contenido */}
                        <button className="btn btn-toggle align-items-center rounded collapsed colornavitemsidebar tam-text-nav" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Dashboard
                        </button>

                        {/* Contenido desplegable */}
                        <div className="collapse" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="rounded color-text-navitem tam-text-navitem">Overview</a></li>
                                <li><a href="#" className="rounded color-text-navitem tam-text-navitem">Weekly</a></li>
                                <li><a href="#" className="rounded color-text-navitem tam-text-navitem">Monthly</a></li>
                                <li><a href="#" className="rounded color-text-navitem tam-text-navitem">Annually</a></li>
                            </ul>
                        </div>
                    </li>

                    {/* Sección Máquinas */}
                    {/* En esta sección se puede insertar dinámicamente según las necesidades de la aplicación */}

                    <li className="mb-1">

                        {/* Botón que al hacer click desplegará el contenido */}
                        <button className="btn btn-toggle align-items-center rounded collapsed colornavitemsidebar tam-text-nav" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Secciones
                        </button>

                        {/* Contenido desplegable */}
                        <div className="collapse" id="orders-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                {secciones.map(seccion => (
                                    <li key={seccion}>
                                        <Link to={`/seccion/${seccion}`}
                                            className="rounded color-text-navitem tam-text-navitem">{seccion}</Link>
                                    </li>
                                ))}
                                {/* <li><a href="#" className="link-dark rounded color-text-navitem">Cerradora 1</a></li>
                                <li><a href="#" className="link-dark rounded color-text-navitem">Cerradora 2</a></li>
                                <li><a href="#" className="link-dark rounded color-text-navitem">Cerradora 3</a></li>
                                <li><a href="#" className="link-dark rounded color-text-navitem">Cerradora 4</a></li> */}
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>

                    {/* Sección Cuenta */}
                    <li className="mb-1">

                        {/* Botón que al hacer click desplegará el contenido */}
                        <button className="btn btn-toggle align-items-center rounded collapsed colornavitemsidebar tam-text-nav" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Account
                        </button>

                        {/* Contenido desplegable */}
                        <div className="collapse" id="account-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded color-text-navitem tam-text-navitem text-light">New...</a></li>
                                <li><a href="#" className="link-dark rounded color-text-navitem tam-text-navitem text-light">Profile</a></li>
                                <li><a href="#" className="link-dark rounded color-text-navitem tam-text-navitem text-light">Settings</a></li>
                                <li><a href="#" className="link-dark rounded color-text-navitem tam-text-navitem text-light">Sign out</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar