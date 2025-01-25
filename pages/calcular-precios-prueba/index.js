import { useState } from 'react';
import dynamic from 'next/dynamic';

const QrScanner = dynamic(() => import('react-qr-scanner'), { ssr: false });

export default function CalcularPreciosPrueba() {
    const [qrData, setQrData] = useState('No se ha escaneado ningún código QR');

    const handleScan = (data) => {
        if (data) {
            setQrData(data.text); // Almacena el texto del QR escaneado
        }
    };

    const handleError = (err) => {
        console.error('Error al escanear el QR:', err);
    };

    const previewStyle = {
        height: 240,
        width: 320,
    };

    return (
        <div>
            <h1 className="title">Calcular precios</h1>
            <div className="container">
                <QrScanner
                    delay={300}
                    style={previewStyle}
                    onError={handleError}
                    onScan={handleScan}
                />
                <p>Resultado: {qrData}</p>
            </div>
        </div>
    );
}