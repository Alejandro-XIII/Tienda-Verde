import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Tienda Verde</h1>
      <div class="container">
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