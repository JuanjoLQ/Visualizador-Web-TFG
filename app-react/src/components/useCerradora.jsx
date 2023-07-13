import { useEffect, useState } from "react";

export const useCerradora = (url, cerradora) => {
    const [dataCerradora, setDataCerradora] = useState(null);
    const [loadingCerradora, setLoadingCerradora] = useState(true);
    const [producto, setProducto] = useState(true);

    const [formato, setFormato] = useState(null);
    const [of, setOf] = useState(null);
    const [unidadesOf, setUnidadesOf] = useState(null);
    const [bpmOF, setBpmOF] = useState(null);
    const [bpmRealesMedia, setBpmRealesMedia] = useState(null);

    const [paradas, setParadas] = useState([]);

    useEffect(() => {
        setLoadingCerradora(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (Object.keys(data).length > 0 && data.mensaje !== "No se encontraron resultados para la fecha especificada") {
                    // El objeto tiene información
                    setProducto(data[0][cerradora + "_Producto"])
                    console.log("Longitud del JSON: " + data.length)

                    setParadas([
                        { name: cerradora + "_Porcentaje_Paradas_Cerradora", value: data[data.length - 1][cerradora + "_Porcentaje_Paradas_Cerradora"] },
                        { name: cerradora + "_Porcentaje_Paradas_Entrada", value: data[data.length - 1][cerradora + "_Porcentaje_Paradas_Entrada"] },
                        { name: cerradora + "_Porcentaje_Paradas_Salida", value: data[data.length - 1][cerradora + "_Porcentaje_Paradas_Salida"] },
                        { name: cerradora + "_Porcentaje_Paradas_Sin_producto", value: data[data.length - 1][cerradora + "_Porcentaje_Paradas_Sin_producto"] },
                        { name: cerradora + "_Porcentaje_Paradas_Tapas", value: data[data.length - 1][cerradora + "_Porcentaje_Paradas_Tapas"] },
                        { name: cerradora + "_Porcentaje_Paradas_Temperatura", value: data[data.length - 1][cerradora + "_Porcentaje_Paradas_Temperatura"] }
                    ]);

                    setFormato(data[0][cerradora + "_Formato"])
                    setOf(data[0][cerradora + "_OF"])
                    setUnidadesOf(data[0][cerradora + "_Unidades_OF"])
                    setBpmOF(data[0][cerradora + "_BPM_OF"])
                    setBpmRealesMedia(data[0][cerradora + "_BPM_Reales_Media"])

                    setDataCerradora(data);
                    setLoadingCerradora(false)
                } else {
                    // El objeto está vacío
                    setDataCerradora(false)
                    setLoadingCerradora(false)
                }
            })
    }, [url]);

    return { dataCerradora, loadingCerradora, producto, formato, of, unidadesOf, bpmOF, bpmRealesMedia, paradas };
};
