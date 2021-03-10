import React, { useState } from "react";
import { useRemoteArticles } from "../herramientas/useRemoteArticles";
import { ShowArticles } from "../componentes/Articulos/ShowArticles";
import "../componentes/Articulos/ShowArticles.css";
// import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function ListaArticulos(props) {
  // const [articuloSeleccionado, setArticuloSeleccionado] = useState("");
  const [articulos, setArticulo] = useRemoteArticles(props.path);

  return (
    <div className="Lista-articulos-body">
      <h2>{props.titulo}</h2>
      {articulos.map((articulo) => (
        <ShowArticles
          key={articulo.id}
          id={articulo.id}
          descripcion={articulo.descripcion}
          titulo={articulo.titulo}
          precio={articulo.precio}
          foto={articulo.foto1}
        />
      ))}
    </div>
  );
}
