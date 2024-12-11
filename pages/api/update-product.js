import { createClient } from '@supabase/supabase-js';

// Importar variables de entorno
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { productId, total } = req.body;

        if (!productId || !total) {
            return res.status(400).json({ error: 'Faltan parámetros.' });
        }

        try {
            // Consulta para obtener el producto correspondiente
            const { data: productData, error: fetchError } = await supabase
                .from('Productos')
                .select('*')
                .eq('id', productId)
                .single();

            if (fetchError) {
                return res.status(404).json({ error: 'Producto no encontrado.' });
            }

            const product = productData;
            const precioAnterior = parseFloat(product.precio_venta);
            const cantidad = parseFloat(product.cantidad);
            const porcentaje = parseFloat(product.porcentaje);
            const valor_extra = parseFloat(product.valor_extra);
            const porcentaje_extra = parseFloat(product.porcentaje_extra);

            if (isNaN(cantidad) || isNaN(porcentaje) || isNaN(precioAnterior) || isNaN(valor_extra) || isNaN(porcentaje_extra)) {
                return res.status(500).json({ error: 'Datos inválidos en la base de datos.' });
            }

            // Calcular el precio de compra y venta
            const precio_compra = (total / cantidad) + (total / cantidad) * (porcentaje_extra / 100);
            let precio_venta = precio_compra + precio_compra * (porcentaje / 100);
            precio_venta = Math.ceil(precio_venta / 100) * 100 + valor_extra;

            // Actualizar el precio de compra y venta en la base de datos
            const { error: updateError } = await supabase
                .from('Productos')
                .update({
                    precio_compra: parseFloat(precio_compra.toFixed(2)).toString(),
                    precio_venta: parseFloat(precio_venta.toFixed(2)).toString()
                })
                .eq('id', productId);

            if (updateError) {
                console.error('Error al actualizar precios:', updateError);
                return res.status(500).json({ error: 'Error al actualizar el producto.' });
            }


            // Retornar los valores calculados
            return res.status(200).json({
                success: true,
                precioAnterior: precioAnterior.toFixed(0),
                precio_venta: precio_venta.toFixed(0)
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error procesando la solicitud.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} no permitido`);
    }
}