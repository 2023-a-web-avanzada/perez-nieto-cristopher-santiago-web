import {useState} from "react";

export type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar?: boolean;
    colorIteraciones: string;
}
export default function CComponente(props: PropiedadesComponente){
    const { url, iteraciones, mostrar, colorIteraciones= "bg-yellow-500" } = props;
    const arreglo = [0, 1];
    //const numeroUno = arreglo[0];
    //const numeroDos = arreglo[1];
    const [numeroUno, numeroDos] = arreglo;
    const contenidoAdicional = () => {
        if (mostrar) {
            return <p>Mostrar</p>
        }
        return <p>Ocultar</p>
    }
    const objeto = {};

    // useState
    const [ iteracionLocal,  setIteracionLocal] = useState(
        iteraciones // valor de la variable
    ) // clic al botón, cambiar el classname de bg-yellow-500
    // a bg-red-500 y cuando vuelva a dar click de nuevo, cambiar a bg-yellow-500
    // y así sucesivamente
    const [ colorIteracionesLocal, setColorIteracionesLocal] = useState(
        colorIteraciones
    )
    return(
        <>
            <div className="border border-solid border-black p-3 m-2">
                <a target="_blank" href={url}>
                    IR A URL
                </a>
                <p className={colorIteracionesLocal}>Iteración: {iteraciones} {iteracionLocal}</p>
                <p>Mostrar: {mostrar}</p>
                {contenidoAdicional()}
                { mostrar && <p>Mostrar Rapido</p>}
                <button className="border border-solild border-black bg-blue-500" onClick={
                    (event) => {
                        setIteracionLocal(iteracionLocal + 1);
                        if (colorIteracionesLocal == "bg-yellow-500"){
                            setColorIteracionesLocal( 'bg-red-500');
                        } else {
                            setColorIteracionesLocal('bg-yellow-500');
                        }
                        console.log(event);
                    }
                }> Aumentar </button>
            </div>
        </>
    )
}

