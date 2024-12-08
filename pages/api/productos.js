import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'productos.csv');

  if (req.method === 'GET') {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      res.status(200).json({ data: fileContent });
    } catch (error) {
      res.status(500).json({ error: 'Error leyendo el archivo.' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido.' });
  }
}