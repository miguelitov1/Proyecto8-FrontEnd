import { useState, useEffect } from "react";
// import { AuthContext } from "../index";

export const useRemotePicturesByArticleId = (idArticulo) => {
  const [fotos, setFotos] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  // const [random, setRandom] = useState(Math.random());
  // const [token, setToken] = useContext(AuthContext);

  // const refetch = () => {
  //   setRandom(Math.random());
  // };

  useEffect(() => {
    const loadArticle = async () => {
      const response = await fetch(
        `http://localhost:8081/api/v1/proyecto8/articulos/${idArticulo}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const json = await response.json();
        setFotos(json);
        setErrorMsg("");
      } else {
        setErrorMsg("Ha sucedido un error");
      }
    };
    loadArticle();
  }, []);
  return fotos;
};
