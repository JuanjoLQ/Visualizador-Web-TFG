import React from "react";

import SimpleInfoCard from "./SimpleInfoCard";
import { URL_FLASK } from "../constants";

import { useParams } from "react-router-dom";
import { useCounts } from "../utils/useCounts";
function HeaderWithFourCards() {

  const { counts, loadingCounts } = useCounts(URL_FLASK + "/countBD");

  const cardInfoProps = [
    { title: "User", key: "User" },
    { title: "Department", key: "Department" },
    { title: "Sales", key: "Sales" },
    { title: "Customer", key: "Customer" },
    { title: "Warehouses", key: "Warehouses" },
    { title: "Role", key: "Role" },
  ];

  const CardInfoCols = cardInfoProps.map((prop) => (
    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 mt-2">
      {counts ? (
        <SimpleInfoCard
          key={prop.key}
          title={prop.title}
          text={counts[prop.key]}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  ));

  return (
    <div>
      {/* 4 Tarjetas para mostrar datos */}
      <div className="container-fluid d-flex justify-content-center mb-2 w-100">
        <div className="row w-100">{CardInfoCols}</div>
      </div>
    </div>
  );
}

export default HeaderWithFourCards;
