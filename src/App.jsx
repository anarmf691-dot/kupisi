import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
function App() {
  const [pantalla, setPantalla] = useState("inicio");

  if (pantalla === "inicio") {
    return (
      <main style={estilos.contenedor}>
        <h1>KUPISI</h1>

        <p>Emprende tu vuelo, ilumina tu entorno</p>

        <button
          style={estilos.botonPrincipal}
          onClick={() => setPantalla("menu")}
        >
          Entrar
        </button>
      </main>
    );
  }

  if (pantalla === "cuenta") {
    return (
      <main style={estilos.contenedor}>
        <h1>Mi Cuenta</h1>

        <section style={estilos.tarjeta}>
          <p>
            <strong>Nombre:</strong>
            <br />
            Ana
          </p>

          <p>
            <strong>Saldo disponible:</strong>
            <br />
            $250 Kupis
          </p>

          <p>
            <strong>Número de tarjeta:</strong>
            <br />
            KP-000001
          </p>
        </section>

        <button style={estilos.boton}>Ver movimientos</button>

        <button
  style={estilos.boton}
  onClick={() => setPantalla("qr")}
>
  Mostrar código QR
</button>

        <button
          style={estilos.botonRegresar}
          onClick={() => setPantalla("menu")}
        >
          Regresar
        </button>
      </main>
    );
  } 
  if (pantalla === "qr") {
  return (
    <main style={estilos.contenedor}>
      <h1>Código QR</h1>

      <QRCodeSVG
  value="https://:kupisi.vercel.app/?tarjeta=KP-000001"
  size={220}
/>
      
      <p>
        Tarjeta: KP-000001
      </p>
      

      <button
        style={estilos.botonRegresar}
        onClick={() => setPantalla("cuenta")}
      >
        Regresar
      </button>
    </main>
  );
}

  return (
    <main style={estilos.contenedor}>
      <h1>Menú principal</h1>

      <button
        style={estilos.boton}
        onClick={() => setPantalla("cuenta")}
      >
        🪪 Mi Cuenta
      </button>

      <button style={estilos.boton}>💳 Cobrar</button>

      <button style={estilos.boton}>🛍️ Vendedores</button>

      <button style={estilos.boton}>📊 Resultados</button>

      <button style={estilos.boton}>💡 Laboratorio de Ideas</button>

      <button style={estilos.boton}>⚙️ Configuración</button>

      <button
        style={estilos.botonRegresar}
        onClick={() => setPantalla("inicio")}
      >
        Salir
      </button>
    </main>
  );
}

const estilos = {
  contenedor: {
    minHeight: "100vh",
    backgroundColor: "white",
    color: "#222",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "14px",
    padding: "24px",
    textAlign: "center",
  },

  tarjeta: {
    width: "100%",
    maxWidth: "340px",
    border: "1px solid #cccccc",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "left",
    boxSizing: "border-box",
  },

  botonPrincipal: {
    width: "220px",
    padding: "14px",
    fontSize: "17px",
    cursor: "pointer",
  },

  boton: {
    width: "280px",
    maxWidth: "100%",
    padding: "13px",
    fontSize: "16px",
    cursor: "pointer",
  },

  botonRegresar: {
    width: "280px",
    maxWidth: "100%",
    padding: "11px",
    marginTop: "10px",
    cursor: "pointer",
  },
};

export default App;