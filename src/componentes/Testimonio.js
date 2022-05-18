import React from "react";
import "../estilos/Testimonio.css";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-emma.png")}
        alt="Foto de Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera Spotify</p>
        <p className="texto-testimonio">Esto es el dddddddddddddddddddddddddddddddddddddddddddddddddddtexto del testimonio</p>
      </div>
    </div>
  );
}
export default Testimonio;
