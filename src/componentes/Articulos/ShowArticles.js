import React from "react";
import { Link } from "react-router-dom";
import "./ShowArticles.css";

export function ShowArticles(props) {
  return (
    <Link to={`/articulo/${props.id}`} style={{ textDecoration: "none" }}>
      <div className="ArticuloHome-container">
        <div className="ArticuloHome-divImg">
          <img
            src={`http://localhost:8081/images/articulos/${props.foto}`}
            alt="gamecube"
          ></img>
        </div>

        <div className="ArticuloHome">
          <div className="ArticuloHome-container2">
            <h2 className="ArticuloHome-titulo">
              {props.titulo.toUpperCase()}
            </h2>
            <img
              className="ArticuloHome-corazon"
              src="./corazon-estrellas/corazonFav.png"
              alt="corazon"
            />
          </div>
          <p className="ArticuloHome-precio">{props.precio}€</p>
          <p className="ArticuloHome-descripcion">{props.descripcion}</p>
        </div>
      </div>
    </Link>
  );
}
