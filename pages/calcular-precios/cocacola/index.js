import Link from 'next/link';

export default function CocaCola() {
    const handleProductClick = async (productId) => {
        // Pedir al usuario que ingrese un valor total
        const total = parseFloat(prompt('Valor unitario:'));
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
            <h1 className="title">Coca Cola</h1>
            <div className="container">
                <button className="button" onClick={() => handleProductClick(160047)}>AGUA BRISA PET 600ML (24)</button>
                <button className="button" onClick={() => handleProductClick(160168)}>BRISA PLAIN 280ML PET (24)</button>
                <button className="button" onClick={() => handleProductClick(135665)}>COCA COLA 2LT RP(9) Nvo</button>
                <button className="button" onClick={() => handleProductClick(135662)}>COCA COLA 3LT PET(6) Nvo</button>
                <button className="button" onClick={() => handleProductClick(120118)}>FRESH CITRUS 1.5LT PET(12)NVO</button>
                <button className="button" onClick={() => handleProductClick(120117)}>FRESH CITRUS 400ML PET (12)NVO</button>
                <button className="button" onClick={() => handleProductClick(160870)}>FRUTAL MANGO 500ML PET(6)</button>
                <button className="button" onClick={() => handleProductClick(56709)}>QUATRO CHOICE 1.5LT PET (12)</button>
                <button className="button" onClick={() => handleProductClick(56706)}>QUATRO CHOICE 400ML NR (12)</button>
                <Link href="/calcular-precios"><button className="button">Volver</button></Link>
            </div>
        </div>
    );
}
