export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-between bg-white">
            <header>
                <div className="flex flex-row border-solid border-2 border-black">
                    <div className="basis-1/4 border-solid border-2 border-red-500">
                        <a href="../">
                            <img className="mx-auto" src="/images/KFC_Logo.svg.png" alt="Logo de KFC" width="100"/>
                        </a>
                    </div>
                    <div className="basis-1/2 border-solid border-2 border-red-500">
                        barra de búsqueda
                    </div>
                    <div className="basis-1/4 border-solid border-2 border-red-500">
                        otros
                    </div>
                </div>
                <div className="flex flex-row border-solid border-2 border-black">
                    barra de navegación
                </div>
            </header>
            <section>
                TU CARRO DE COMPRA
                <div className="container border-solid border-2 border-black text-center">
                    <img src="" alt="Logo del carrito vacío"/>
                    Tu carro de compras está vacio.
                </div>
            </section>
            <footer>
                <div className="flex flex-row border-solid border-2 border-black">
                    <div className="basis-1/3 border-solid border-2 border-red-500">
                        <img src="" alt="KFC LOGO"/>
                        <p>Conoce donde se encuentran las ubicaciones de las tiendas de KFC en Ecuador, utiliza nuestro
                            mapa para localizar el local de KFC más cercano a ti.</p>
                    </div>
                    <div className="basis-1/3 border-solid border-2 border-red-500">
                        <h2>Contáctanos</h2>
                    </div>
                    <div className="basis-1/3 border-solid border-2 border-red-500">
                        <h3>Síguenos</h3>
                    </div>
                </div>
            </footer>
        </main>
    )
}