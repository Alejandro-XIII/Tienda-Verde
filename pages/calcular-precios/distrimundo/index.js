import Link from 'next/link';

export default function Distrimundo() {
    const handleProductClick = async (productId) => {
        // Pedir al usuario que ingrese un valor total
        const total = parseFloat(prompt('Vr. Unit.:'));
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
            <h1 className="title">Distrimundo</h1>
            <div className="container">
                <button className="button" onClick={() => handleProductClick(7742)}>CHORIZO DE POLLO BUCANERO</button>
                <button className="button" onClick={() => handleProductClick(4950)}>MANGUERA X LIBRA PAULANDIA</button>
                <button className="button" onClick={() => handleProductClick(4490)}>PATAS MAKRO POLLO</button>
                <button className="button" onClick={() => handleProductClick(9928)}>PATAS Y CABEZAS PAULANDIA</button>
                <button className="button" onClick={() => handleProductClick(3960)}>PATAS Y PESCUEZ TIP TOP</button>
                <button className="button" onClick={() => handleProductClick(2195)}>RECORTE CORRIENTE DON POLLO</button>
                <Link href="/calcular-precios"><button className="button">Volver</button></Link>
            </div>
        </div>
    );
}
