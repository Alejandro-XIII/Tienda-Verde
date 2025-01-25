import Link from 'next/link';

export default function Caceritas() {
    const handleProductClick = async (productId) => {
        // Pedir al usuario que ingrese un valor total
        const total = parseFloat(prompt('Ref. Precio:'));
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
            <h1 className="title">Caceritas</h1>
            <div className="container">
                <button className="button" onClick={() => handleProductClick(432001)}>Bocadillo Lonja X 100g</button>
                <button className="button" onClick={() => handleProductClick(407014)}>Mac Candy R Cereza X 30 Und</button>
                <button className="button" onClick={() => handleProductClick(407012)}>Mac Candy R Mango Biche X 30 Und</button>
                <button className="button" onClick={() => handleProductClick(408004)}>Nar Bocadillo Restaurante X50 Un</button>
                <button className="button" onClick={() => handleProductClick(421001)}>Papa Limon X 80 Gr</button>
                <Link href="/calcular-precios">
                    <button className="button">Volver</button>
                </Link>
            </div>
        </div>
    );
}
