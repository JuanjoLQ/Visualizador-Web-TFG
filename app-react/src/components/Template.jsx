import React, { useState } from "react";

// Importar constantes
import { URL_FLASK } from "../constants";

// Importamos los componentes para crear los gráficos y las tarjetas
import LinearChart from "./charts/LinearChart";
import CardDateCalendar from "./CardDateCalendar";
import SimpleInfoCard from "./SimpleInfoCard";
import { useParams } from "react-router-dom";
import HeaderWithSixCards from "./HeaderWithSixCards";
import PieChartRechart from "./charts/PieChartRechart";
import { useSales } from "../utils/useSales";
import BarChartR from "./charts/BarChartR";
import StackedAreaChart from "./charts/StackedAreaChart";
import { useMileagexSubcategoryMileage } from "../utils/useMileagexSubcategoryMileage";
import { useCustomer } from "../utils/useCustomer";
import { useProductsValuexWarehouses } from "../utils/useProductsValuexWarehouses";
import SimpleBarChat from "./charts/SimpleBarChat";
import PieChartWithPaddingAngle from "./charts/PieChartWithPaddingAngle";
import { useCustomerDate } from "../utils/useCustomerDate";

function Template() {
  // Definimos el estado selectedDate con el hook useState y
  // su valor inicial es la fecha actual
  const seccion = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Función para actualizar el estado de la fecha seleccionada
  // cuando se selecciona una nueva fecha en el calendario
  const handleSelectedDate = (date) => {
    setSelectedDate(date);
  };

  let fechaOriginal = selectedDate.toLocaleDateString();

  // Inputs: CerradoraX
  // Output: Cerradora_X
  // let { cerradora } = null;
  // cerradora = cerradora.replace(/\d+/, `_${cerradora.match(/\d+/)[0]}`);

  // Inputs: selectedDate, fecha introcida por el usuario
  // Output: fechaFormateada, para buscar la fecha en la base de datos
  let fechaFormateada = null;

  if (fechaOriginal !== null) {
    const [dia, mes, anio] = fechaOriginal.split("/");
    fechaFormateada = `${anio}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
  } else {
    const today = new Date();
    fechaFormateada = today.toISOString().slice(0, 10);
  }

  const { dataCustomerDate, loadingCustomerDate } = useCustomerDate();

  const { dataCustomerxType, loadingCustomerxType } = useCustomer();

  const { dataMileageSubcategories, loadingMileageSubcategories } =
    useMileagexSubcategoryMileage("Mileage", "useMileagexSubcategoryMileage");
  const { dataSales, loadingSales } = useSales("Sales", "useSales");
  const {
    dataUseProductsValuexWarehouses,
    loadingUseProductsValuexWarehouses,
  } = useProductsValuexWarehouses();

  return (
    <>
      {/* 6 Tarjetas */}
      <HeaderWithSixCards />

      {/* 
            Gráfico de líneas con modal para filtrar por fecha 
            y un pie de página para mpstrar una descripción si es necesario 
            */}
      <div className="container-fluid d-flex justify-content-center">
        <div className="row w-100">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
            <h3 className="text-light d-flex justify-content-center align-items-center">
              Ventas (€)
            </h3>
            <LinearChart
              dataSales={dataSales}
              loadingSales={loadingSales}
              field="Ventas"
              color="#4168e1"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-3">
            <h3 className="text-light d-flex justify-content-center align-items-center">
              Clientes
            </h3>
            <LinearChart
              dataSales={dataCustomerDate}
              loadingSales={loadingCustomerDate}
              field="Clientes"
              color="red"
            />
          </div>
          {/* <div className="col-md-12 mt-3">
            <SimpleInfoCard title="Cerradora 1.9" />
          </div> */}
        </div>
      </div>

      <div className="container-fluid d-flex justify-content-center mt-4">
        <div className="row w-100">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <h3 className="text-light d-flex justify-content-center align-items-center">
              Valor Productos x Almacén
            </h3>
            <BarChartR
              data={dataUseProductsValuexWarehouses}
              param1="Store"
              param2="Sold"
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <h3 className="text-light d-flex justify-content-center text-center align-items-center">
              Tipos de transporte en kilometraje
            </h3>
            <PieChartRechart data={dataMileageSubcategories} />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <h3 className="text-light d-flex justify-content-center align-items-center">
              Tipos de clientes
            </h3>
            <PieChartWithPaddingAngle data={dataCustomerxType} />
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="row w-100">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3">
            {/* <PieChartRechart dataParadas={paradas} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Template;
