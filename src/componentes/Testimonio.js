import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        src={require("../imagenes/testimonio-emma.png")}
        alt="Foto de Emma"
        className="imagen-testimonio"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera Spotify</p>
        <p className="texto-testimonio">Esto es el texto del testimonio</p>
      </div>
    </div>
  );
}
export default Testimonio;
