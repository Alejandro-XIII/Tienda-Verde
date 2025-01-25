import Link from 'next/link';

export default function Distrimarcas() {
    const handleProductClick = async (productId) => {
        // Pedir al usuario que ingrese un valor total
        const total = parseFloat(prompt('Vlr/unitario:'));
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
            <h1 className="title">Distrimarcas</h1>
            <div className="container">
                <button className="button" onClick={() => handleProductClick(69695034)}>3D POLVO MULTIUSOS 22 X 500 GR</button>
                <button className="button" onClick={() => handleProductClick(19171558)}>BOKA 2L COROZO DP/10 UND</button>
                <button className="button" onClick={() => handleProductClick(10170045)}>BOKA 2L GUANABANA 24 DP X 10 UND</button>
                <button className="button" onClick={() => handleProductClick(19171559)}>BOKA 2L LIMA PANELA 24 DP X 10 UND</button>
                <button className="button" onClick={() => handleProductClick(68775732)}>DOVE ACONDI SUPER 60 MIN 20DPx12SOBx12ML</button>
                <button className="button" onClick={() => handleProductClick(19010349)}>FRUTIÑO 2L COROZO DISPLAY X 20 UND</button>
                <button className="button" onClick={() => handleProductClick(10010055)}>FRUTIÑO 2L FRESA-SANDIA DISPLAY X 20 UND</button>
                <button className="button" onClick={() => handleProductClick(19010342)}>FRUTIÑO 2L FRUTOS ROJOS DISPLAY X 20 UND</button>
                <button className="button" onClick={() => handleProductClick(10010047)}>FRUTIÑO 2L LIMON DISPLAY X 20 UND</button>
                <button className="button" onClick={() => handleProductClick(19010341)}>FRUTIÑO 2L MANGO DE AZUCAR DISPLAY X 20 UND</button>
                <button className="button" onClick={() => handleProductClick(10010054)}>FRUTIÑO 2L MARACU PIÑA DISPLAY X 20 UND</button>
                <button className="button" onClick={() => handleProductClick(19010338)}>FRUTIÑO 2L PIÑA DISPLAY X 20 UND</button>
                <button className="button" onClick={() => handleProductClick(10010042)}>FRUTIÑO 2L SALPICON DISPLAY X 20 UND</button>
                <button className="button" onClick={() => handleProductClick(19010339)}>FRUTIÑO 2L UVA DISPLAY X 20 UND</button>
                <button className="button" onClick={() => handleProductClick(19100113)}>PANELADA SABOR A LIMON 1.5 64x29 CP</button>
                <Link href="/calcular-precios"><button className="button">Volver</button></Link>
            </div>
        </div>
    );
}
