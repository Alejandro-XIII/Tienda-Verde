import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <Image src="/titulo.png" width={200} height={100} priority />
      </div>
      <div class="container">
      <Link href="/calcular-precios-prueba">
          <button class="button">Calcular precios prueba</button>
        </Link>
        <Link href="/calcular-precios">
          <button class="button">Calcular precios</button>
        </Link>
        <Link href="/hacer-pedidos">
          <button class="button">Hacer pedidos</button>
        </Link>
      </div>
    </div>
  );
}