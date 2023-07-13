import {useEffect, useState} from "react";

export type PropiedadesComponente = {
    colorIteraciones: string;
}

export default function Menu(props: PropiedadesComponente) {
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
                <br/>
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
                    <h1>HAMBRE DE PROMOS</h1>
                    <div className="grid grid-cols-4 gap-5 container mx-auto">
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                    </div>
                    <br/>
                    <h1>KENTUCKY CRISPY BBQ</h1>
                    <div className="grid grid-cols-4 gap-5 container mx-auto">
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                    </div>
                    <br/>
                    <h1>FESTINES</h1>
                    <div className="grid grid-cols-4 gap-5 container mx-auto">
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                    </div>
                    <br/>
                    <h1>PRESAS SOLAS</h1>
                    <div className="grid grid-cols-4 gap-5 container mx-auto">
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                        <div className="shadow-md shadow-gray-300">
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
                    </div>
                </section>
                <br/>
                <br/>
                <br/>
            </div>
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

