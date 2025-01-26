import Link from 'next/link';

export default function CalcularPrecios() {
    return (
        <div>
            <h1 class="title">Calcular precios</h1>
            <div class="container">
                <Link href="/calcular-precios/alpina"><button class="button">Alpina</button></Link>
                <Link href="/calcular-precios/caceritas"><button class="button">Caceritas</button></Link>
                <Link href="/calcular-precios/caceritas"><button class="button">Caceritas</button></Link>
                <Link href="/calcular-precios/cocacola"><button class="button">Coca Cola</button></Link>
                <Link href="/calcular-precios/distrimarcas"><button class="button">Distrimarcas</button></Link>
                <Link href="/calcular-precios/distrimundo"><button class="button">Distrimundo</button></Link>
                <Link href="/calcular-precios/je"><button class="button">Distribuciones JE</button></Link>
                <Link href="/calcular-precios/expertiendas"><button class="button">Expertiendas</button></Link>
                <Link href="/calcular-precios/macroval"><button class="button">Macroval</button></Link>
                <Link href="/calcular-precios/serdistat"><button class="button">Serdistat</button></Link>
                <Link href="/"><button class="button">Volver</button></Link>
            </div>
        </div>
    );
}
