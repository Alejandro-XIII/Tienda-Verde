import Link from 'next/link';

export default function HacerPedidos() {
  return (
    <div class="container">
      <Link href="/hacer-pedidos">
        <button >Hacer pedidos</button>
      </Link>
      <Link href="/">
        <button >Volver</button>
      </Link>
    </div>
  );
}
