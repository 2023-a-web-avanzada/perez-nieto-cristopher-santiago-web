import {useEffect, useState} from "react";

export type PropiedadesComponente = {
    colorIteraciones: string;
}

export default function Menu(props: PropiedadesComponente) {
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
    }
    const estiloA = {
        color: "#E4002B",
    }

    return (
        <main className="flex flex-col justify-between max-h-0.025">
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
            <div className={colorIteracionesLocal}>
                <section className="flex flex-row">
                    <div className="basis-1/4 border-b-2">
                        <div className="container pt-5">
                            <img className="mx-auto rounded-full"
                                 src="/images/hambreDePromos.webp"
                                 alt="Hambre de Promos" width="50"/>
                        </div>
                        <p className="text-center font-bold text-sm/[17px] px-3 pt-1 pb-5">
                            <span>HAMBRE DE PROMOS</span>
                        </p>
                    </div>
                    <div className="basis-1/4 border-b-2">
                        <div className="container pt-5">
                            <img className="mx-auto rounded-full"
                                 src="/images/bbq.webp"
                                 alt="Kentucky Crispy BBQ" width="50"/>
                        </div>
                        <p className="text-center font-bold text-sm/[17px] px-3 pt-1 pb-5">
                            <span>KENTUCKY CRISPY BBQ</span>
                        </p>
                    </div>
                    <div className="basis-1/4 border-b-2">
                        <div className="container pt-5">
                            <img className="mx-auto rounded-full"
                                 src="/images/festines.webp"
                                 alt="Festines" width="50"/>
                        </div>
                        <p className="text-center font-bold text-sm/[17px] px-3 pt-1 pb-5">
                            <span>FESTINES</span>
                        </p>
                    </div>
                    <div className="basis-1/4 border-b-2">
                        <div className="container pt-5">
                            <img className="mx-auto rounded-full"
                                 src="/images/presassolas.webp"
                                 alt="Presas Solas" width="50"/>
                        </div>
                        <p className="text-center font-bold text-sm/[17px] px-3 pt-1 pb-5">
                            <span>PRESAS SOLAS</span>
                        </p>
                    </div>
                </section>
                <section>
                    <br/>
                    <div className="container mx-auto">
                        <h1 className="font-bold text-2xl/[50px]">HAMBRE DE PROMOS</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-5 container mx-auto">
                        <div className="shadow-lg shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/hambre1.webp"
                                         alt="Hambre de Promos"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    SNACK BOX POPCORN COLA
                                </p>
                                <p className="text-center">
                                    $2.99
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/hambre2.webp"
                                         alt="Hambre de Promos"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    COMBO ECONÓMICO
                                </p>
                                <p className="text-center">
                                    $3.75
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg shadow-gray-300">
                            <div className="mx-5 b-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/hambre3.webp"
                                         alt="Hambre de Promos"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    MEGA WOW BOX POPCORN
                                </p>
                                <p className="text-center">
                                    $5.50
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/hambre4.webp"
                                         alt="Hambre de Promos"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    BIG BOX ULTRA
                                </p>
                                <p className="text-center">
                                    $6.50
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container mx-auto">
                        <h1 className="font-bold text-2xl/[50px]">KENTUCKY CRISPY BBQ</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-5 container mx-auto">
                        <div className="shadow-md shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/bbq1.webp"
                                         alt="Hambre de Promos"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    KENTUCKY CRISPY BBQ
                                </p>
                                <p className="text-center">
                                    $4.50
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/bbq2.webp"
                                         alt="Hambre de Promos"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    COMBO KENTUCKY CRISPY BBQ
                                </p>
                                <p className="text-center">
                                    $6.99
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/bb3.webp"
                                         alt="Hambre de Promos"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    BIG BOX KENTUCKY
                                </p>
                                <p className="text-center">
                                    $7.99
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/bbq4.webp"
                                         alt="Hambre de Promos"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    PARTE Y COMPARTE KENTUCKY
                                </p>
                                <p className="text-center">
                                    $14.99
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container mx-auto">
                        <h1 className="font-bold text-2xl/[50px]">FESTINES</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-5 container mx-auto">
                        <div className="shadow-md shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/festines1.webp"
                                         alt="Festines sin igual"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    FESTINES SIN IGUAL
                                </p>
                                <p className="text-center">
                                    $17.99
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/festines2.webp"
                                         alt="Festin alitas"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    FESTIN ALITAS
                                </p>
                                <p className="text-center">
                                    $18.99
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/festines3.webp"
                                         alt="Festin familiar 1"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    FESTIN FAMILIAR 1
                                </p>
                                <p className="text-center">
                                    $18.99
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/festines4.webp"
                                         alt="Mega festin 8 presas"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    MEGA FESTÍN 8 PRESAS
                                </p>
                                <p className="text-center">
                                    $18.99
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container mx-auto">
                        <h1 className="font-bold text-2xl/[50px]">PRESAS SOLAS</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-5 container mx-auto">
                        <div className="shadow-md shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/presassolas1.webp"
                                         alt="14 presas"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    14 PRESAS
                                </p>
                                <p className="text-center">
                                    $21.99
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/presassolas2.webp"
                                         alt="10 presas KFC"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    10 PRESAS KFC
                                </p>
                                <p className="text-center">
                                    $15.99
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md shadow-gray-300">
                            <div className="mx-5 mb-5">
                                <div className="py-1">
                                    <img className="mx-auto"
                                         src="/images/presassolas3.webp"
                                         alt="7 presas"
                                         width="180"/>
                                </div>
                                <p className="text-center mt-2">
                                    7 PRESAS
                                </p>
                                <p className="text-center">
                                    $12.99
                                </p>
                                <div className="mx-auto text-center mt-10 py-1.5" style={estiloBarra} onClick={
                                    (event) => {
                                        setNumOrdenesLocal(numOrdenesLocal + 1);
                                    }
                                }>
                                    <button>Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br/>
                <br/>
                <br/>
            </div>
            <footer className={`border-t border-b px-36 ${colorIteracionesLocal}`}>
                <br/>
                <div className="container flex flex-row gap-20 mx-auto">
                    <div className="basis-1/3">
                        <a href="../">
                            <img src="/images/kfclogo.png" alt="Logo de KFC" width="65"/>
                        </a>
                        <br/>
                        <p className="font-bold text-xs">Conoce donde se encuentran las ubicaciones de las tiendas de KFC en Ecuador, utiliza nuestro
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

