// /a_hola_mundo/page.tx
/*
const a_componente = function(){
    return(
        <></>
    )
}
 */

/*
export default a_componente
const b_componente = () => {
    return <></>
}
*/

import DEstilosEjemplo from "@/app/componentes/DEstilosEjemplo";

export default function page(){
    return (
        <>
            <h1>Hola desde a_hola_mundo</h1>
            <DEstilosEjemplo/>
        </>
    )
}