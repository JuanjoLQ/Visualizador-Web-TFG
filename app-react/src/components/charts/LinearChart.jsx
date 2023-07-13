import React from 'react'

// Importamos componentes
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Linear Chart dato de ejemplo
// const dataLC = [
//     {
//         name: 'fecha',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
// ];

function LinearChart({ dataSales, loadingSales, field, color }) {

    // Este componente muestra la información de la cerradora para una fecha seleccionada
    // Inputs:
    //   - selectedDate: la fecha seleccionada por el usuario
    //   - loadingCerradora: un indicador de si los datos de la cerradora se están cargando o no
    //   - dataCerradora: los datos de la cerradora para la fecha seleccionada
    //   - producto: el nombre del producto de la cerradora
    // Output: un encabezado con la fecha seleccionada y un gráfico de líneas que muestra la información de la cerradora
    return (
        <>
            {
                loadingSales ? "Seleccione una fecha" : (dataSales ? (
                    <>
                        {/* Nombre del producto */}
                        {/* <h3 className='d-flex justify-content-center'>{producto}</h3> */}
                        <div style={{ position: 'relative', width: '100%', paddingBottom: '250px' }}>

                            {/* Contenedor del gráfico de líneas */}
                            <div
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    top: 0,
                                }}
                            >
                                {/* Gráfico de líneas */}
                                <ResponsiveContainer>
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={dataSales}
                                        margin={{
                                            top: 5,
                                            right: 5,
                                            left: 5,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey={field} stroke={color} activeDot={{ r: 8 }} />
                                        {/* <Line type="monotone" dataKey={`${cerradora}_BPM_Reales`} stroke="#82ca9d" /> */}
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </>
                ) : (
                    // Mensaje cuando no hay datos en la fecha solicitada
                    <p className='text-center'>No se encontraron resultados para la fecha especificada</p>
                ))
            }
        </>
    )
}

export default LinearChart