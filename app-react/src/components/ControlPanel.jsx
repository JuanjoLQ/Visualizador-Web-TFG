import React from 'react'

// Importamos los estilos CSS del ControlPanel
import '../css/ControlPanel.css'

// Importamos componentes
import { Route, Routes } from 'react-router-dom';
import Template from './Template';
import BlankTemplate from './BlankTemplate';

// Definimos el componente ControlPanel
function ControlPanel() {

    // const Home = () => <h1>Home</h1>

    // const About = () => <h1>About</h1>

    return (
        <>
            <Routes>
                {/* <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/hello' element={<HelloWorld />} /> */}
                {/* <Route path='/cerradoras/:cerradora' element={<HeaderWithFourCards />} /> */}
                <Route path='/' element={<Template />} />
                <Route path='/home' element={<Template />} />
                <Route path='/seccion/:seccion' element={<Template />} />
            </Routes>
        </>
    )
}

export default ControlPanel
