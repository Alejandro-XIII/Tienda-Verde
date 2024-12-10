import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { productId, total } = req.body;

        if (!productId || !total) {
            return res.status(400).json({ error: 'Faltan parámetros.' });
        }

        // Ruta al archivo productos.csv
        const filePath = path.join(process.cwd(), 'data', 'productos.csv');

        try {
            // Leer el archivo CSV
            const data = fs.readFileSync(filePath, 'utf8');
            const lines = data.split('\n');
            const headers = lines[0].split(',');

            // Parsear los datos del CSV
            const products = lines.slice(1).map(line => {
                const values = line.split(',');
                return headers.reduce((obj, key, index) => {
                    obj[key] = values[index];
                    return obj;
                }, {});
            });

            // Buscar el producto correspondiente
            const productIndex = products.findIndex(p => p.id === String(productId));
            if (productIndex === -1) {
                return res.status(404).json({ error: 'Producto no encontrado.' });
            }

            const product = products[productIndex];
            const precioAnterior = parseFloat(product.precio);
            const cantidad = parseFloat(product.cantidad);
            const porcentaje = parseFloat(product.porcentaje);
            const valor_extra = parseFloat(product.valor_extra);
            const porcentaje_extra = parseFloat(product.porcentaje_extra);

            if (isNaN(cantidad) || isNaN(porcentaje) || isNaN(precioAnterior)|| isNaN(valor_extra)|| isNaN(porcentaje_extra)) {
                return res.status(500).json({ error: 'Datos inválidos en el archivo CSV.' });
            }

            // Calcular el precio
            let precio = (total / cantidad) + (total / cantidad)*(porcentaje_extra / 100);
            precio = precio + precio*(porcentaje / 100);
            precio = Math.ceil(precio / 100) * 100  + valor_extra;

            // Actualizar el precio en el producto
            products[productIndex].precio = parseFloat(precio.toFixed(2)).toString();

            // Escribir los cambios en el archivo CSV
            const updatedData = [
                headers.join(','),
                ...products.map(p => `${p.id},${p.nombre},${p.precio},${p.cantidad},${p.porcentaje},${p.empresa},${p.valor_extra},${p.porcentaje_extra}`)
            ].join('\n');

            fs.writeFileSync(filePath, updatedData, 'utf8');

            // Retornar producto actualizado junto con el precio anterior
            return res.status(200).json({ 
                success: true, 
                product: { 
                    ...products[productIndex], 
                    precioAnterior: precioAnterior.toFixed(0) 
                } 
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error procesando el archivo.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} no permitido`);
    }
}
