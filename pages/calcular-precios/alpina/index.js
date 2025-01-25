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
                <button className="button" onClick={() => handleProductClick(8110)}>AREQUIPITO 10 X 50G</button>                             
                <button className="button" onClick={() => handleProductClick(11696)}>BOGGY CEREZA 108G</button>
                <button className="button" onClick={() => handleProductClick(11697)}>BOGGY FRE VASO 108 GR</button>
                <button className="button" onClick={() => handleProductClick(11698)}>BOGGY MORA VASO 108 GR</button>
                <button className="button" onClick={() => handleProductClick(11699)}>BOGGY NARANJA 108G</button>
                <button className="button" onClick={() => handleProductClick(11700)}>BOGGY UVA VASO 108 GR</button>
                <button className="button" onClick={() => handleProductClick(8602)}>BONYURT CON ZUCARITAS 170G</button>
                <button className="button" onClick={() => handleProductClick(14483)}>MPL X12 ALPIN CHOC BOL 180GR</button>
                <button className="button" onClick={() => handleProductClick(16306)}>MPLX12 AVENA ORIGINAL BOLSA 200G</button>
                <button className="button" onClick={() => handleProductClick(11656)}>PAQ X 6 ALPIN CHOCOLATE BOLSA 180G</button>
                <button className="button" onClick={() => handleProductClick(10670)}>YOGO CER NAT VASO 130G</button>
                <button className="button" onClick={() => handleProductClick(15536)}>YOGO CUCHAREABLE FRESA 100G</button>
                <button className="button" onClick={() => handleProductClick(15537)}>YOGO CUCHAREABLE MELO 100G</button>
                <button className="button" onClick={() => handleProductClick(4766)}>YOGO YOGO FRESA VASO AC 150G</button>
                <button className="button" onClick={() => handleProductClick(4768)}>YOGO YOGO MELOCOTON VASO AC 150G</button>
                <button className="button" onClick={() => handleProductClick(4767)}>YOGO YOGO MORA VASO AC 150G</button>
                <Link href="/calcular-precios">
                    <button className="button">Volver</button>
                </Link>
            </div>
        </div>
    );
}
