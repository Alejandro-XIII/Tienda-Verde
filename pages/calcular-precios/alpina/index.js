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
            <h1 className="title">Alpina</h1>
            <div className="container">
                <button className="button" onClick={() => handleProductClick(8110)}>Arequipito</button>
                <button className="button" onClick={() => handleProductClick(11656)}>Alpin de chocolate x6</button>
                <button className="button" onClick={() => handleProductClick(14483)}>Alpin de chocolate x12</button>
                <button className="button" onClick={() => handleProductClick(16306)}>Avena bolsa</button>
                <button className="button" onClick={() => handleProductClick(15536)}>Cuchareable de fresa</button>
                <button className="button" onClick={() => handleProductClick(15537)}>Cuchareable de melocotón</button>
                <button className="button" onClick={() => handleProductClick(11696)}>Boggy de cereza</button>
                <button className="button" onClick={() => handleProductClick(11697)}>Boggy de fresa</button>
                <button className="button" onClick={() => handleProductClick(11698)}>Boggy de mora</button>
                <button className="button" onClick={() => handleProductClick(11699)}>Boggy de naranja</button>
                <button className="button" onClick={() => handleProductClick(11700)}>Boggy de uva</button>
                <button className="button" onClick={() => handleProductClick(8602)}>Bonyurt</button>
                <button className="button" onClick={() => handleProductClick(10670)}>Yogo cereal</button>
                <button className="button" onClick={() => handleProductClick(4766)}>Yogurt de fresa vaso</button>
                <button className="button" onClick={() => handleProductClick(4768)}>Yogurt de melocotón vaso</button>
                <button className="button" onClick={() => handleProductClick(4767)}>Yogurt de mora vaso</button>
                <Link href="/calcular-precios">
                    <button className="button">Volver</button>
                </Link>
            </div>
        </div>
    );
}
