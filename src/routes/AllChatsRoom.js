import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import jwt_decode from "jwt-decode";

import { AuthContext } from "../componentes/providers/AuthProvider";
import { Chat } from "../componentes/Chat/Chat";

import { useRemoteChats } from "../herramientas/useRemoteChats";
import { useRemoteUser } from "../herramientas/useRemoteUser";

import "./AllChatsRoom.css";

export function AllChatsRoom() {
  const [token] = useContext(AuthContext);
  const [chats] = useRemoteChats("");

  let payload = null;
  if (token) {
    payload = jwt_decode(token);
  }
  const [user] = useRemoteUser(payload.id);

  let showedChats;
  if (chats) {
    showedChats = chats.reduce((stats, chat) => {
      const foundChat = stats.find(
        (alternativo) =>
          alternativo.id_vendedor === chat.id_vendedor &&
          alternativo.id_comprador === chat.id_comprador &&
          alternativo.id_articulo === chat.id_articulo
      );
      if (!foundChat) {
        stats.push(chat);
      }
      return stats;
    }, []);
  }

  return !token ? (
    <Redirect to="/login" />
  ) : !showedChats ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="AllChatsRoom-cabecera">
        <img
          className="AllChatsRoom-imagen-perfil"
          src={`http://localhost:8081/images/profiles/${user.foto}`}
          alt="imagen-perfil"
        ></img>
        <h2 className="AllChatsRoom-h2">Chats</h2>
      </div>
      <div className="AllChatsRoom-chats">
        {showedChats.map((chat) => {
          return (
            <Chat
              key={chat.id}
              titulo={chat.titulo}
              foto={chat.foto1}
              usuario={chat.id_usuario}
              ultimoMensaje={chat.mensaje}
              idArticulo={chat.id_articulo}
              idVendedor={chat.id_vendedor}
              idComprador={chat.id_comprador}
              idUsuario={
                chat.id_vendedor === payload.id
                  ? chat.id_comprador
                  : chat.id_vendedor
              }
            />
          );
        })}
      </div>
    </>
  );
}
