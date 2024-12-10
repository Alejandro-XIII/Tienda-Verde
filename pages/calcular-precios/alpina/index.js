import Link from 'next/link';

export default function Alpina() {
    const handleProductClick = async (productId) => {
        // Pedir al usuario que ingrese un valor total
        const total = parseFloat(prompt('Precio U. +IVA:'));
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
                alert(`Precio anterior: ${result.product.precioAnterior}\nNuevo precio: ${result.product.precio}`);
            } else {
                alert(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    return (
        <div>
            <h1 className="title">Alpina</h1>
            <div className="container">
                <button className="button" onClick={() => handleProductClick(1)}>Arequipito</button>
                <button className="button" onClick={() => handleProductClick(2)}>Alpin</button>
                <button className="button" onClick={() => handleProductClick(3)}>Avena</button>
                <button className="button" onClick={() => handleProductClick(4)}>Boggy</button>
                <button className="button" onClick={() => handleProductClick(5)}>Bonyurt</button>
                <button className="button" onClick={() => handleProductClick(6)}>Yogo cereal</button>
                <button className="button" onClick={() => handleProductClick(7)}>Cuchareable</button>
                <button className="button" onClick={() => handleProductClick(8)}>Yogurt</button>
                <Link href="/calcular-precios">
                    <button className="button">Volver</button>
                </Link>
            </div>
        </div>
    );
}
