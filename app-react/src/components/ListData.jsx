import React from 'react'

export const ListData = ({ data }) => {
    
    // const datal = [
    //     { name: "john", age: "7"},
    //     { name: "juan", age: "8"},
    //     { name: "jose", age: "9"},

    // ]

    // const datal = data
    // console.log("El objeto es: " + {data})
    // console.log("Typeof" + typeof {data})

    // for (const [clave, valor] of Object.entries({data})) {
    //     console.log("Iterando...");
    //     console.log("La clave es: " + clave);
    //     console.log("El valor es: " + valor);
    // }
    console.log("en componente")
    console.log(data)
    console.log(Object.entries({data}))
    // return (
    //     <div>
    //         {
    //             datal.map((info) => {
    //                 return <h1>Age: {info.Cerradora_1_Unidades_Reales}</h1>
    //             })
    //         }

    //     </div>
    // );



}