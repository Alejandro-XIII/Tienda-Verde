import Link from 'next/link';

export default function JE() {
    const handleProductClick = async (productId) => {
        // Pedir al usuario que ingrese un valor total
        const total = parseFloat(prompt('Precio:'));
        if (isNaN(total) || total <= 0) {
            alert('Por favor, ingrese un número válido.');
            return;
        }

        try {
            // Enviar el total y el ID del producto al servidor
            const response = await fetch('/api/update-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId, total }),
            });
            const result = await response.json();

            if (response.ok) {
                alert(`Precio anterior: ${result.precioAnterior}\nNuevo precio: ${result.precio_venta}`);
            } else {
                alert(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    return (
        <div>
            <h1 className="title">Distribuciones JE</h1>
            <div className="container">
                <button className="button" onClick={() => handleProductClick(53002)}>AMOXICILINA CAPSULAS</button>
                <button className="button" onClick={() => handleProductClick(42008)}>BIG BON XXL COCO X 48U</button>
                <button className="button" onClick={() => handleProductClick(42006)}>BIG BON XXL X 48U</button>
                <button className="button" onClick={() => handleProductClick(25001)}>BOMBA LISA R9 BOLSA X 100U</button>
                <button className="button" onClick={() => handleProductClick(36025)}>CHICLE TATUAJE X 120U</button>
                <button className="button" onClick={() => handleProductClick(28020)}>CHUPA SILICONA PEQUENA</button>
                <button className="button" onClick={() => handleProductClick(56034)}>DES CAJA REXONA CLINICAL MUJER X 20U</button>
                <button className="button" onClick={() => handleProductClick(56038)}>DES REXONA ROLLON 30GR DAMA</button>
                <button className="button" onClick={() => handleProductClick(56039)}>DES REXONA ROLLON 30GR HOMBRE</button>
                <button className="button" onClick={() => handleProductClick(13008)}>DES. PRACTI-CREMA SPEED 30GR</button>
                <button className="button" onClick={() => handleProductClick(24031)}>ENCENDEDOR LED SURTIDO</button>
                <button className="button" onClick={() => handleProductClick(19001)}>GEL MINI BACHUE 20 GR SOBRE TIRA X 36</button>
                <button className="button" onClick={() => handleProductClick(23011)}>PEGA 8GR CARTON X 12U VERDE</button>
                <button className="button" onClick={() => handleProductClick(32025)}>PLASTILINA EGAR PEQUENA X 9U</button>
                <button className="button" onClick={() => handleProductClick(28007)}>SILICONA EN BARRA DELGADA</button>
                <Link href="/calcular-precios"><button className="button">Volver</button></Link>
            </div>
        </div>
    );
}
