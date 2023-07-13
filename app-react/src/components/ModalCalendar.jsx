// Importar las librerías y componentes necesarios
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Componente ModalCalendar que permite seleccionar una fecha
const ModalCalendar = ({ onSelect }) => {
    // Estados para controlar la visibilidad del modal y la fecha seleccionada
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    // Función para manejar la selección de fecha en el calendario
    const handleDateSelect = (date) => setSelectedDate(date);

    // Función para manejar el clic en el botón "Guardar" del modal
    const handleSaveClick = () => {
        onSelect(selectedDate);
        handleClose();
    };

    // Función para manejar el cierre del modal
    const handleClose = () => {
        setSelectedDate(null);
        setShow(false);
    };

    // Función para manejar la apertura del modal
    const handleShow = () => setShow(true);

    // Renderizar el componente ModalCalendar
    return (
        <>
            {/* Botón para abrir el modal */}
            <Button variant="primary" onClick={handleShow}>
                Abrir calendario
            </Button>

            {/* Modal para seleccionar la fecha */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Selecciona una fecha</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* Componente DatePicker para seleccionar la fecha */}
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateSelect}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                        placeholderText="yyyy-MM-dd"
                        shouldCloseOnSelect={false}
                    />
                </Modal.Body>
                <Modal.Footer>

                    {/* Botón para cerrar el modal */}
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>

                    {/* Botón para guardar la fecha seleccionada */}
                    <Button variant="primary" onClick={handleSaveClick} disabled={!selectedDate}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCalendar;
