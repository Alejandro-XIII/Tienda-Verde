import { useState } from "react";
import dynamic from "next/dynamic";

// Cargar react-qr-scanner dinámicamente para evitar problemas en el SSR
const QrScanner = dynamic(() => import("react-qr-scanner"), { ssr: false });

export default function CalcularPreciosPrueba() {
  const [qrData, setQrData] = useState("No se ha escaneado ningún código QR");

  const handleScan = (data) => {
    if (data) {
      setQrData(data.text); // Almacena el texto del QR escaneado
    }
  };

  const handleError = (err) => {
    console.error("Error al escanear el QR:", err);
  };

  const previewStyle = {
    height: 300,
    width: 300,
    position: "relative",
  };

  const videoConstraints = {
    facingMode: { exact: "environment" }, // Usar cámara trasera
  };

  return (
    <div>
      <h1 className="title">Calcular precios</h1>
      <div className="container" style={{ textAlign: "center" }}>
        <div style={previewStyle}>
          <QrScanner
            delay={300}
            style={{ height: "100%", width: "100%" }}
            onError={handleError}
            onScan={handleScan}
            constraints={{ video: videoConstraints }}
          />
          {/* Línea roja para simular un escáner */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              right: "10%",
              height: "2px",
              backgroundColor: "red",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
          ></div>
        </div>
        <p>Resultado: {qrData}</p>
      </div>
    </div>
  );
}