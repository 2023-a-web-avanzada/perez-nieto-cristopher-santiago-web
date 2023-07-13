import {useEffect, useState} from "react";

export type PropiedadesComponente = {
    colorIteraciones: string;
}

export default function Carrito(props: PropiedadesComponente) {
    const {
        ordenes = 0,
        colorIteraciones = "bg-white",
        mode = "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    } = props;

    // useState
    const [numOrdenesLocal, setNumOrdenesLocal] = useState(
        ordenes
    )
    const [colorIteracionesLocal, setColorIteracionesLocal] = useState(
        colorIteraciones
    )
    const [modeLocal, setModeLocal] = useState(
        mode
    )

    // useEffect
    useEffect(() => {
        console.log('Has agregado un nuevo producto al carrito');
    }, [numOrdenesLocal])

    return (
        <main className="flex max-h-0.025 flex-col justify-between bg-white">
            <div className={colorIteracionesLocal}>
                <header className="flex flex-row">
                    <div className="basis-1/4 border-solid border-2 border-red-500">
                        <a href="../">
                            <img className="mx-auto" src="/images/KFC_Logo.svg.png" alt="Logo de KFC" width="100"/>
                        </a>
                    </div>
                    <div className="basis-1/2 border-solid border-2 border-red-500">
                        barra de búsqueda
                    </div>
                    <div className="basis-1/4 border-solid border-2 border-black">
                        <div className="flex flex-row justify-center gap-10">
                            <div className="basis-1/10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6 basis-1/3">
                                    <path fill-rule="evenodd"
                                          d="M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div className="basis-1/10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6 basis-1/3">
                                    <path fill-rule="evenodd"
                                          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div className="basis-1/10">
                                <div className="flex flex-row">
                                    <div className="basis-1/2">
                                        <a href="/carrito">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6 basis-1/3">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="basis-1/2">
                                        {numOrdenesLocal}
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6" onClick={
                                    (event) => {
                                        //setOrdenLocal(ordenLocal + 1);
                                        if (colorIteracionesLocal == "bg-white") {
                                            setColorIteracionesLocal('bg-gray-400');
                                            setModeLocal('M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z');
                                        } else {
                                            setColorIteracionesLocal('bg-white');
                                            setModeLocal('M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z');
                                        }
                                    }
                                }>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d={modeLocal}/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="flex flex-row border-solid border-2 border-black">
                    barra de navegación
                </div>
            </div>
            <section className={colorIteracionesLocal``}>
                TU CARRO DE COMPRA
                <div className="container border-solid border-2 border-black text-center">
                    <img src="" alt="Logo del carrito vacío"/>
                    Tu carro de compras está vacio.
                </div>
            </section>
            <footer className={colorIteracionesLocal}>
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