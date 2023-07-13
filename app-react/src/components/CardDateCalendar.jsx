import React, { useState } from 'react';

// Importamos el componente ModalCalendar
import ModalCalendar from './ModalCalendar';

// Definimos el componente CardDateCalendar y le pasamos como prop una función onDateSelect
const CardDateCalendar = ({ onDateSelect }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    // Definimos la función handleDateSelect que actualiza 
    // el estado selectedDate con la fecha seleccionada y llama a la función onDateSelect
    const handleDateSelect = (date) => {
        setSelectedDate(date);
        onDateSelect(date);
    };

    // Retornamos la estructura del componente con el ModalCalendar y la fecha seleccionada
    return (
        <div className="card">
            <div className="card-body text-center">
                <h5 className="card-title">Selecciona una fecha</h5>
                <ModalCalendar onSelect={handleDateSelect} />
                <p className="card-text">
                    Fecha:
                    {selectedDate ? selectedDate.toLocaleDateString('es-ES') : 'Ninguna'}
                </p>
            </div>
        </div>
    );
};

export default CardDateCalendar;
