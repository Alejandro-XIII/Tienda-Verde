import Link from 'next/link';

export default function Expertiendas() {
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
            <h1 className="title">Expertiendas</h1>
            <div className="container">
                <button className="button" onClick={() => handleProductClick(7204366)}>18 PROTECTORES DIARIOX15</button>  
                <button className="button" onClick={() => handleProductClick(7204099)}>24 FAMILIAR</button>  
                <button className="button" onClick={() => handleProductClick(7204373)}>24 MEGA EXTRACONT</button>
                <button className="button" onClick={() => handleProductClick(201749)}>N. CLASICA X10</button>                
                <Link href="/calcular-precios"><button className="button">Volver</button></Link>
            </div>
        </div>
    );
}
