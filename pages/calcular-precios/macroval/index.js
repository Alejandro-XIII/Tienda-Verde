import Link from 'next/link';

export default function Macroval() {
    const handleProductClick = async (productId) => {
        // Pedir al usuario que ingrese un valor total
        const total = parseFloat(prompt('VLR UNIT:'));
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
            <h1 className="title">Macroval</h1>
            <div className="container">
                <button className="button" onClick={() => handleProductClick(12573123)}>COCOSETTE MINI WAFER 12(22X25G) CO</button>
                <button className="button" onClick={() => handleProductClick(12573132)}>COCOSETTE SANDWICH 24X767.2G PR 14/12 CO</button>
                <button className="button" onClick={() => handleProductClick(12450022)}>LA LECHERA DOY PACK 48X90G CO</button>
                <button className="button" onClick={() => handleProductClick(12403907)}>LA LECHERA LCARISTRA 12(26x25G) CO</button>
                <button className="button" onClick={() => handleProductClick(12565493)}>MAGGI CALDO COSTILLA DSMZDO 80X9G CO</button>
                <button className="button" onClick={() => handleProductClick(12565464)}>MAGGI CALDO GALLINA DMZD 80X9G CO</button>
                <button className="button" onClick={() => handleProductClick(12056094)}>MAGGI SOPA COSTILLA FIDEO 24X65G CO</button>
                <button className="button" onClick={() => handleProductClick(12056092)}>MAGGI SOPA GALLINA CON FIDEOS 24X65G CO</button>
                <button className="button" onClick={() => handleProductClick(12235678)}>NESCAFE TRADICION 7(12X30G)</button>
                <button className="button" onClick={() => handleProductClick(12336165)}>NESCAFE TRADICION DISPLAY 8(144X1.5G) CO</button>
                <button className="button" onClick={() => handleProductClick(12575767)}>NESTLE KLIM FORTICRECE 40(16X26G) N1 CO</button>
                <button className="button" onClick={() => handleProductClick(12408820)}>SALTINAS DORE 24(9X23G) CO</button>
                <Link href="/calcular-precios"><button className="button">Volver</button></Link>
            </div>
        </div>
    );
}
