import Link from 'next/link';

export default function CalcularPrecios() {
    return (
        <div>
            <h1 class="title">Calcular precios</h1>
            <div class="container">
                <Link href="/calcular-precios/alpina">
                    <button class="button">Alpina</button>
                </Link>
                <Link href="/">
                    <button class="button">Volver</button>
                </Link>
            </div>
        </div>
    );
}
