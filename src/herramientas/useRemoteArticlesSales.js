import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../componentes/providers/AuthProvider";

export const useRemoteArticlesSales = () => {
  const [articulos, setArticulos] = useState([]);
  const [, setErrorMsg] = useState("");
  // const [random, setRandom] = useState(Math.random());
  const [token, setToken] = useContext(AuthContext);

  // const refetch = () => {
  //   setRandom(Math.random());
  // };

  useEffect(() => {
    const loadArticle = async () => {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/usuarios/1/articulos`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const json = await response.json();
        setArticulos(json);
        setErrorMsg("");
      } else {
        setErrorMsg("Ha sucedido un error");
      }
    };
    loadArticle();
  }, []);
  return [articulos, setArticulos];
};