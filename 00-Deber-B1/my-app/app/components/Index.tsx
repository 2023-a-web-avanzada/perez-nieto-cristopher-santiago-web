'use client'
import {useEffect, useState} from "react";

export type PropiedadesComponente = {
    colorIteraciones: string;
}
export default function Index(props: PropiedadesComponente) {
    const {
        colorIteraciones = "bg-white text-black",
        mode = "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    } = props;

    // useState
    const [colorIteracionesLocal, setColorIteracionesLocal] = useState(
        colorIteraciones
    )
    const [modeLocal, setModeLocal] = useState(
        mode
    )

    // estilos
    const estilosFooter = {
        backgroundColor: "#262329",
        color: "#fff",
    }
    const imagenBlanca = {
        display: 'none',
    }

    return (
        <main className="flex max-h-0.025 flex-col justify-between bg-white border-none">
            <div className={colorIteracionesLocal}>
                <br/>
                <header>
                    <div className="flex flex-row">
                        <div className="basis">
                            <a href="../">
                                <img className="ml-7" src="/images/kfclogo.png" alt="Logo de KFC" width="120"/>
                            </a>
                        </div>
                        <div className="basis-4/6 my-auto ml-10">
                            <div className="flex flex-row gap-7 font-bold text-sm/[20px]">
                                <div>
                                    <button className="rounded-none">
                                        <a href="/menu">
                                            MENÚ
                                        </a>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="rounded-none">PROMOCIONES
                                    </button>
                                </div>
                                <div>
                                    <button className="rounded-none">SANDUCHES Y
                                        SNACKS
                                    </button>
                                </div>
                                <div>
                                    <button className="rounded-none">NUESTRAS
                                        TIENDAS
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/6 my-auto">
                            <div className="flex flex-row-reverse gap-3">
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
                                <div className="basis-1/10">
                                    <a href="/carrito">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5"
                                             stroke="currentColor" className="w-6 h-6 basis-1/3">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                        </svg>
                                    </a>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"/>
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                </header>
                <section className={colorIteracionesLocal}>
                    <div
                        className="container mx-auto flex flex-row items-center gap-0">
                        <div className="basis-1/10 text-right font-bold">
                            MENÚ
                        </div>
                        <div className="ml-3 basis-10/12 border-solid border-b-2 border-black"></div>
                        <div className="basis-2/12 border-solid border-b-2 border-black"></div>
                    </div>
                </section>
                <br/><br/>
                <section>
                    <div className="grid grid-cols-6 gap-4 container mx-auto pl-8 pr-8 text-sm/[20px]">
                        <div className="shadow-md shadow-gray-300">
                            <div className="container p-10">
                                <img src="/images/hambreDePromos.webp" alt="Hambre de Promos"/>
                            </div>
                            <p className="text-center font-bold p-3">
                                HAMBRE DE PROMOS
                            </p>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="container p-10">
                                <img src="/images/bbq.webp" alt="Hambre de Promos"/>
                            </div>
                            <p className="text-center font-bold p-3">
                                KENTUCKY CRISPY BBQ
                            </p>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="container p-10">
                                <img src="/images/festines.webp" alt="Hambre de Promos"/>
                            </div>
                            <p className="text-center font-bold p-3">
                                FESTINES
                            </p>

                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="container p-10">
                                <img src="/images/presassolas.webp" alt="Hambre de Promos"/>
                            </div>
                            <p className="text-center font-bold p-3">
                                PRESAS SOLAS
                            </p>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="container p-10">
                                <img src="/images/paracompartir.webp" alt="Hambre de Promos"/>
                            </div>
                            <p className="text-center font-bold p-3">
                                PARA COMPARTIR 2 Y 3 PERSONAS
                            </p>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="container p-10">
                                <img src="/images/boxes.webp" alt="Hambre de Promos"/>
                            </div>
                            <p className="text-center font-bold p-3">
                                BOXES
                            </p>
                        </div>

                        <div className="shadow-md shadow-gray-300">
                            <div className="container p-10">
                                <img src="/images/combos.webp" alt="Hambre de Promos"/>
                            </div>
                            <p className="text-center font-bold p-3">
                                COMBOS
                            </p>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="container p-10">
                                <img src="/images/chicky.webp" alt="Hambre de Promos"/>
                            </div>
                            <p className="text-center font-bold p-3">
                                CHICKY LUNCH
                            </p>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="container p-10">
                                <img src="/images/popcorn.webp" alt="Hambre de Promos"/>
                            </div>
                            <p className="text-center font-bold p-3">
                                POP CORN Y STRIPS
                            </p>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="container p-10">
                                <img src="/images/postres.webp" alt="Hambre de Promos"/>
                            </div>
                            <p className="text-center font-bold p-3">
                                POSTRES Y HELADOS
                            </p>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="container p-10">
                                <img src="/images/complementos.webp" alt="Hambre de Promos"/>
                            </div>
                            <p className="text-center font-bold p-3">
                                COMPLEMENTOS Y BEBIDAS
                            </p>
                        </div>
                    </div>
                </section>
                <br/>
                <footer style={estilosFooter}>
                    <br/>
                    <div className="flex flex-row gap-7 container mx-auto">
                        <img src="/images/coronel.png" alt="Logo de KFC"/>
                    </div>
                    <div className="flex flex-row gap-8 container mx-auto">
                        <div className="basis-2/5">
                            <br/>
                            <p className="font-bold">KFC ECUADOR - Compra tu combo en línea</p>
                            <br/>
                            <p className="text-xs">
                                Conoce donde se encuentran las ubicaciones de las tiendas de
                                KFC en Ecuador, utiliza nuestro mapa para localizar el local de KFC más
                                cercano a ti.
                            </p>
                        </div>
                        <div className="basis-1/5">
                            <br/>
                            <p className="font-bold">Contáctanos</p>
                            <br/>
                            <div className="text-xs">
                                <p>
                                    Edificio Belmonte, piso 1
                                </p>
                                <p>
                                    Llámanos: 023920070
                                </p>
                                <p>
                                    Quito, P, Ecuador
                                </p>
                                <p>
                                    kfcadomicilio@kfc.com.ec
                                </p>
                                <p>
                                    Corea 126 y Amazonas
                                </p>
                            </div>
                        </div>
                        <div className="basis-1/5 ">
                            <br/>
                            <p className="font-bold">Políticas</p>
                            <br/>
                            <p className="text-xs">
                                Términos y Condiciones: Garantía de 30 minutos ó Gratis
                                Política de Privacidad de Datos
                            </p>
                        </div>
                        <div className="basis-1/5">
                            <br/>
                            <p>Descarga nuestra APP</p>
                            <br/>
                            <div className="flex flex-row gap-4">
                                <div className="basis-1/3">
                                    <img src="/images/appStore.png" alt="Imagen de la App Store"/>
                                </div>
                                <div className="basis-1/3">
                                    <img src="/images/googlePlay.png" alt="Imagen de la App Store"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="bg-white h-1 text-[#262329]">
                        A
                    </div>
                    <div>
                        <br className="h-2"/>
                        <div className="flex flex-row justify-center gap-3">
                            <div className="basis-1/10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 25" fill="none">
                                    <path d="M22.6753 0.166687H1.32467C0.593 0.166687 0 0.759687 0 1.49135V22.8424C0 23.5737 0.593 24.1667 1.32467 24.1667H12.819V14.8727H9.69133V11.2507H12.819V8.57935C12.819 5.47935 14.7123 3.79169 17.4777 3.79169C18.8023 3.79169 19.9407 3.89002 20.2727 3.93435V7.17402L18.3547 7.17502C16.8507 7.17502 16.5597 7.88969 16.5597 8.93835V11.251H20.1463L19.6793 14.873H16.5597V24.1667H22.6757C23.407 24.1667 24 23.5737 24 22.842V1.49135C24 0.759687 23.407 0.166687 22.6753 0.166687Z" fill="white"></path>
                                </svg>
                            </div>
                            <div className="basis-1/10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 20" fill="none">
                                    <path d="M24 2.72381C23.117 3.11528 22.1683 3.37989 21.1722 3.49864C22.1885 2.88931 22.9696 1.92436 23.3368 0.775215C22.3855 1.33935 21.3314 1.74951 20.2103 1.96956C19.3124 1.01334 18.0326 0.414917 16.6164 0.414917C13.8973 0.414917 11.6925 2.61909 11.6925 5.33878C11.6925 5.72432 11.7362 6.10051 11.8203 6.46112C7.72801 6.25573 4.1001 4.29529 1.67152 1.31597C1.24764 2.04343 1.00484 2.88963 1.00484 3.79162C1.00484 5.49991 1.87411 7.00656 3.1953 7.88985C2.38837 7.86398 1.62913 7.64238 0.965261 7.27398C0.964638 7.29455 0.964638 7.3148 0.964638 7.336C0.964638 9.72094 2.66171 11.711 4.91389 12.1639C4.50092 12.2758 4.06613 12.3362 3.617 12.3362C3.2994 12.3362 2.99116 12.3057 2.69039 12.248C3.31686 14.2038 5.13518 15.6278 7.28979 15.6677C5.60456 16.988 3.48173 17.7756 1.17471 17.7756C0.77732 17.7756 0.385543 17.7525 0 17.7067C2.17893 19.1036 4.76709 19.9184 7.54755 19.9184C16.6042 19.9184 21.5568 12.416 21.5568 5.91008C21.5568 5.69689 21.5518 5.48402 21.5424 5.27239C22.5052 4.5786 23.3402 3.7112 24 2.72381Z" fill="white"></path>
                                </svg>
                            </div>
                            <div className="basis-1/10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 25" fill="none">
                                    <path d="M17.987 10.596C17.987 13.9023 15.3067 16.5827 12.0003 16.5827C8.694 16.5827 6.01367 13.9023 6.01367 10.596C6.01367 9.66433 6.23267 8.786 6.612 8H0V22C0 23.2833 1.05 24.3333 2.33333 24.3333H21.6667C22.95 24.3333 24 23.2833 24 22V8H17.3883C17.768 8.786 17.987 9.66433 17.987 10.596Z" fill="white"></path>
                                    <path d="M21.6667 0H2.33333C1.05 0 0 1.05 0 2.33333V7H7.22167C8.31433 5.55033 10.045 4.60933 12 4.60933C13.955 4.60933 15.6857 5.55033 16.7783 7H24V2.33333C24 1.05 22.95 0 21.6667 0ZM1.91867 5.90533H1.05V2.54033C1.05 1.95167 1.40867 1.44733 1.919 1.233V5.90533H1.91867ZM3.342 5.90533H2.519V1.12267H3.342V5.90533ZM4.765 5.90533H3.942V1.12267H4.765V5.90533ZM6.187 2.54033V4.48767V5.90533H5.365V1.12267H6.187V2.54033ZM22.7837 4.48767C22.7837 5.271 22.149 5.90533 21.3667 5.90533H19.0637C18.281 5.90533 17.6463 5.271 17.6463 4.48767V2.54033C17.6463 1.757 18.281 1.12267 19.0637 1.12267H21.3667C22.1493 1.12267 22.7837 1.757 22.7837 2.54033V4.48767Z" fill="white"></path>
                                    <path d="M12.0004 15.8826C14.9124 15.8826 17.2731 13.521 17.2731 10.6096C17.2731 7.69797 14.9127 5.3363 12.0004 5.3363C9.08772 5.3363 6.72705 7.69797 6.72705 10.6096C6.72705 13.5206 9.08772 15.8826 12.0004 15.8826ZM12.0001 6.4083C14.3201 6.4083 16.2014 8.2893 16.2014 10.6096C16.2014 12.9296 14.3204 14.811 12.0001 14.811C9.67972 14.811 7.79872 12.93 7.79872 10.6096C7.79905 8.28897 9.68005 6.4083 12.0001 6.4083Z" fill="white"></path>
                                </svg>
                            </div>
                        </div>
                        <br className="h-2"/>
                    </div>
                </footer>
            </div>
        </main>
    )
}