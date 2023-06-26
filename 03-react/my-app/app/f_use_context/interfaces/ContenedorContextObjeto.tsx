import {Dispatch, SetStateAction} from "react";
// f_use_context/interfaces/ContenedorContextObject.tsx
export interface ContenedorContextObjeto{
    nombreUsuario: string,
    setNombreUsuario: Dispatch<SetStateAction<string>>
}
