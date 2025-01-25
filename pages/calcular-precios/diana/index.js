import Link from 'next/link';

export default function Diana() {
    const handleProductClick = async (productId) => {
        // Pedir al usuario que ingrese un valor total
        const total = parseFloat(prompt('VR UNITARIO (Antes de impuestos):'));
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
                <button className="button" onClick={() => handleProductClick(3040520)}>AGUA GLACIAL PQ 18unx620mlPET</button>
                <button className="button" onClick={() => handleProductClick(3070454)}>GUSTOSITA BARRA CJ 24D X 4 X 125G</button>
                <Link href="/calcular-precios"><button className="button">Volver</button></Link>
            </div>
        </div>
    );
}
