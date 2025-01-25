import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function CalcularPreciosPrueba() {
  const qrCodeContainerRef = useRef(null);
  const [qrData, setQrData] = useState("No se ha escaneado ningún código QR");

  useEffect(() => {
    // Configuración del escáner
    const qrScanner = new Html5QrcodeScanner(
      qrCodeContainerRef.current.id,
      {
        fps: 10, // Cuadros por segundo
        qrbox: 250, // Tamaño del área de escaneo (en píxeles)
        aspectRatio: 1,
        videoConstraints: {
          facingMode: "environment", // Usar la cámara trasera
        },
      },
      false
    );

    qrScanner.render(
      (decodedText) => {
        setQrData(decodedText); // Guardar el texto del QR
        qrScanner.clear(); // Detener el escáner después de leer
      },
      (errorMessage) => {
        console.error("Error al escanear:", errorMessage);
      }
    );

    // Limpieza al desmontar el componente
    return () => {
      qrScanner.clear().catch((error) => console.error("Error limpiando:", error));
    };
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Calcular precios</h1>
      <div className="container" style={{ textAlign: "center" }}>
        <div
          id="qr-reader"
          ref={qrCodeContainerRef}
          style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}
        ></div>
        <p style={{ color: "white" }}>Resultado: {qrData}</p>
      </div>
    </div>
  );
}