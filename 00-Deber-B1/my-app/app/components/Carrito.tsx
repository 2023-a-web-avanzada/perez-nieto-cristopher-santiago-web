import {useEffect, useState} from "react";

export type PropiedadesComponente = {
    colorIteraciones: string;
}

export default function Carrito(props: PropiedadesComponente) {
    const {
        ordenes = 0,
        colorIteraciones = "bg-white text-black",
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

    // estilos
    const estiloBarra = {
        backgroundColor: "#E4002B",
        color: "#fff",
        fontStyle: "bold",
    }
    const estiloA = {
        color: "#E4002B",
    }

    return (
        <main className="flex max-h-0.025 flex-col justify-between bg-white">
            <div className={colorIteracionesLocal}>
                <header className="flex flex-row">
                    <div className="basis-1/4 py-4">
                        <a href="../">
                            <img className="ml-7" src="/images/kfclogo.png" alt="Logo de KFC" width="120"/>
                        </a>
                    </div>
                    <div className="basis-1/2 my-auto">
                        <div className="flex flex-row ml-20">
                            <div className="basis-2/3 border border-r-0 border-black rounded-l my-auto">
                                <input className={`w-full ${colorIteracionesLocal}`} type="text" name="" id=""/>
                            </div>
                            <div
                                className="basis-1/10 border-t border-r border-b border-l-0 border-black rounded-r my-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="basis-2/4 my-auto">
                        <div className="flex flex-row justify-center gap-10">
                            <div className="basis-1/10">
                                <div
                                    className="bg-black rounded text-white flex flex-row text-xs pl-2 pr-2 my-auto gap-3">
                                    <p className="basis-9/10 my-auto font-bold">
                                        ¿Tienes un código de descuento?
                                    </p>
                                    <div className="basis-1/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="w-6 h-6">
                                            <path fill-rule="evenodd"
                                                  d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
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
                                        if (colorIteracionesLocal == "bg-white text-black") {
                                            setColorIteracionesLocal('bg-gray-400 text-white');
                                            setModeLocal('M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z');
                                        } else {
                                            setColorIteracionesLocal('bg-white text-black');
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
                <div className="flex flex-row bg-color font-bold" style={estiloBarra}>
                    <div className="px-6 py-3" style={estiloA}>#</div>
                    <div className="px-7 py-3 border-l border-r">
                        <button className="rounded-none flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                            </svg>
                            <a href="/menu">
                                <span>MENÚ</span>
                            </a>
                        </button>
                    </div>
                    <div className="px-7 py-3 border-r">
                        <button className="flex rounded-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6">
                                <path fill-rule="evenodd"
                                      d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                                      clip-rule="evenodd"/>
                            </svg>

                            <a href="/menu">
                                PROMOCIONES
                            </a>
                        </button>
                    </div>
                    <div className="px-7 py-3 border-r">
                        <button className="rounded-none">
                            <a href="/menu">
                                SANDUCHES Y SNACKS
                            </a>
                        </button>
                    </div>
                    <div className="px-5 py-3 border-r">
                        <button className="rounded-none">
                            <a href="/menu">
                                NUESTRAS TIENDAS
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <section className={colorIteracionesLocal}>
                <br/>
                <br/>
                <div className="container px-28 text-center mx-auto">
                    <p className="text-left font-bold text-2xl">TU CARRO DE COMPRA</p>
                    <br/> <br/> <br/>
                    <svg xmlns="http://www.w3.org/2000/svg" height="250px" viewBox="0 0 82.644 91.651"
                         className="spree-icon shopping-cart-empty-image mx-auto">
                        <g fill="#E4002B">
                            <path
                                d="m105.3 120.583a2.97 2.97 0 0 0 2.95 2.664 3.012 3.012 0 0 0 .309-.016 2.969 2.969 0 0 0 2.648-3.258l-1.369-13.249a2.969 2.969 0 0 0 -5.906.61z"
                                transform="translate(-67.283 -62.867)"></path>
                            <path
                                d="m150.285 123.23a3.012 3.012 0 0 0 .309.016 2.969 2.969 0 0 0 2.95-2.664l1.369-13.249a2.969 2.969 0 0 0 -5.907-.61l-1.369 13.249a2.969 2.969 0 0 0 2.648 3.258z"
                                transform="translate(-93.687 -62.867)"></path>
                            <path
                                d="m82.253 185.088a9.191 9.191 0 1 0 9.19 9.19 9.2 9.2 0 0 0 -9.19-9.19zm0 12.444a3.253 3.253 0 1 1 3.252-3.254 3.257 3.257 0 0 1 -3.252 3.254z"
                                transform="translate(-48.644 -111.819)"></path>
                            <path
                                d="m159.693 185.088a9.191 9.191 0 1 0 9.191 9.19 9.2 9.2 0 0 0 -9.191-9.19zm0 12.444a3.253 3.253 0 1 1 3.253-3.254 3.257 3.257 0 0 1 -3.253 3.254z"
                                transform="translate(-95.428 -111.819)"></path>
                            <path
                                d="m93.4 59.345a2.969 2.969 0 0 0 -2.349-1.153h-59.179l-2.485-9.556a2.969 2.969 0 0 0 -2.874-2.222h-12.168a2.969 2.969 0 0 0 0 5.938h9.873l2.465 9.479c.012.053.026.106.041.158l9.167 35.25a2.969 2.969 0 0 0 2.874 2.222h43.1a2.969 2.969 0 0 0 2.874-2.222l9.188-35.33a2.97 2.97 0 0 0 -.527-2.564zm-13.833 34.178h-38.507l-7.644-29.393h53.8z"
                                transform="translate(-11.376 -28.041)"></path>
                            <path d="m89.978 30.872a2.969 2.969 0 1 0 4.2-4.2l-9.337-9.333a2.969 2.969 0 0 0 -4.2 4.2z"
                                  transform="translate(-52.696 -9.95)"></path>
                            <path
                                d="m154.643 31.742a2.96 2.96 0 0 0 2.1-.87l9.323-9.332a2.969 2.969 0 0 0 -4.2-4.2l-9.323 9.332a2.969 2.969 0 0 0 2.1 5.067z"
                                transform="translate(-96.136 -9.952)"></path>
                            <path
                                d="m130.476 19.124a2.969 2.969 0 0 0 2.969-2.968v-13.186a2.969 2.969 0 0 0 -2.964-2.97 2.969 2.969 0 0 0 -2.969 2.968v13.186a2.969 2.969 0 0 0 2.964 2.97z"
                                transform="translate(-81.536)"></path>
                        </g>
                    </svg>
                    <br/><br/><br/>
                    <p className="font-bold">Tu carro de compras está vacio.</p>
                    <br/><br/><br/>
                    <button style={estiloBarra}
                            className="mx-auto text-center font-bold text-xl py-6 px-36">
                        <a href="/menu">
                            VER MÁS PRODUCTOS
                        </a>
                    </button>
                </div>
                <br/><br/><br/><br/>
            </section>
            <footer className={`border-t border-b px-36 ${colorIteracionesLocal}`}>
                <br/>
                <div className="container flex flex-row gap-20 mx-auto">
                    <div className="basis-1/3">
                        <a href="../">
                            <img src="/images/kfclogo.png" alt="Logo de KFC" width="65"/>
                        </a>
                        <br/>
                        <p className="font-bold text-xs">Conoce donde se encuentran las ubicaciones de las tiendas de
                            KFC en Ecuador, utiliza nuestro
                            mapa para localizar el local de KFC más cercano a ti.</p>
                    </div>
                    <div className="basis-1/3 font-bold text-xs">
                        <h1 className="text-sm">Contáctanos</h1>
                        <br/>
                        <p>KFC Ecuador,</p>
                        <br/>
                        <p className="mb-2">Edificio Belmonte, piso 1</p>
                        <p className="mb-2">Llámanos: 023920070</p>
                        <p className="mb-2">Quito, P, Ecuador</p>
                        <p className="mb-2">kfcadomicilio@kfc.com.ec</p>
                        <p className="mb-2">Corea 126 y Amazonas</p>
                    </div>
                    <div className="basis-1/3 font-bold text-sm">
                        <h1 className="text-sm">Síguenos</h1>
                        <br/>
                        <div className="flex flex-row gap-5">
                            <div className="basis-1/10">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 19.28 19.175"
                                     width="24px" className="spree-icon d-inline-block">
                                    <path
                                        d="m369.18 160.127a1.051 1.051 0 0 1 -1.048 1.048h-4.925v-7.439h2.515l.367-2.882h-2.882v-1.834c0-.838.21-1.415 1.415-1.415h1.519v-2.62a17.157 17.157 0 0 0 -2.253-.1 3.5 3.5 0 0 0 -3.72 3.825v2.148h-2.515v2.882h2.515v7.439h-9.221a1.051 1.051 0 0 1 -1.048-1.048v-17.083a1.051 1.051 0 0 1 1.049-1.048h17.132a1.051 1.051 0 0 1 1.048 1.048v17.079z"
                                        fill="#000" transform="translate(-349.9 -142)"></path>
                                </svg>
                            </div>
                            <div className="basis-1/10">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 19.646 16.451"
                                     width="24px" className="spree-icon d-inline-block">
                                    <path
                                        d="m883.165 145.014a7.288 7.288 0 0 1 -2.567 1 4.039 4.039 0 0 0 -2.934-1.31 4.093 4.093 0 0 0 -4.034 4.139 5.768 5.768 0 0 0 .1.943 11.344 11.344 0 0 1 -8.278-4.3 4.021 4.021 0 0 0 -.524 2.1 4.364 4.364 0 0 0 1.781 3.458 3.724 3.724 0 0 1 -1.834-.524v.052a4.06 4.06 0 0 0 3.248 4.034 3.377 3.377 0 0 1 -1.048.157 3.223 3.223 0 0 1 -.734-.052 4.11 4.11 0 0 0 3.772 2.881 7.908 7.908 0 0 1 -4.977 1.781 5.694 5.694 0 0 1 -.943-.052 11.283 11.283 0 0 0 6.182 1.834c7.387 0 11.474-6.287 11.474-11.736v-.524a7.793 7.793 0 0 0 1.991-2.148 7.191 7.191 0 0 1 -2.305.629 5.156 5.156 0 0 0 1.63-2.362z"
                                        fill="#000" transform="translate(-864.2 -144.7)"></path>
                                </svg>
                            </div>
                            <div className="basis-1/10">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 19.227 19.175"
                                     width="24px" className="spree-icon d-inline-block">
                                    <path
                                        d="m1009.722 142.1h-14.617a2.281 2.281 0 0 0 -2.305 2.253v14.669a2.281 2.281 0 0 0 2.305 2.253h14.617a2.281 2.281 0 0 0 2.305-2.253v-14.669a2.352 2.352 0 0 0 -2.305-2.253zm-3.143 3.039a.581.581 0 0 1 .576-.576h1.781a.581.581 0 0 1 .576.576v1.781a.581.581 0 0 1 -.576.576h-1.781a.581.581 0 0 1 -.576-.576zm-4.191 2.934a3.668 3.668 0 1 1 0 7.335 3.667 3.667 0 1 1 0-7.335zm7.806 10.845a.581.581 0 0 1 -.576.576h-14.408a.582.582 0 0 1 -.576-.576v-9.011h2.41a3.765 3.765 0 0 0 -.419 1.834 5.868 5.868 0 0 0 11.736 0 2.929 2.929 0 0 0 -.472-1.834h2.41v9.011z"
                                        fill="#000" transform="translate(-992.8 -142.1)"></path>
                                </svg>
                            </div>
                        </div>
                        <br/>
                        <p style={estiloA}>Términos y Condiciones: Garantía de 30 días o Gratis</p>
                        <br/>
                        <p style={estiloA}>Política de privacidad de Datos</p>
                    </div>
                </div>
                <br/>
            </footer>

        </main>
    )
}