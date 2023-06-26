// e_custom_hool/hooks/useSelectMoneda.tsx
'use client'
import {Moneda} from "@/app/e_custom_hool/interfaces/moneda";
import {useState} from "react";

export default function useSelectMoneda(
    label: String,
    opciones: Moneda[]
){
    const [moneda, setMoneda] = useState('');
    const generarSelect = () => {
        return opciones.map(
            (moneda) => {
                return (
                    <option key={moneda.id} value{moneda.id} id={moneda.id}>
                        {moneda.nombre}
                    </option>
                )
            }
        )
    }
    const UseSelectMonedas = (
        <>
            <label className="form-label" htmlFor={label}>{label}</label>
            <select className="form-select"
                    name={label}
                    id={label}
                    value={moneda}
                    onChange={ e => {
                        e.preventDefault();
                        setMoneda(e.target.value);
                    }}
            >
                <option value="">Seleccionar opcion</option>
                {generarSelect()}
            </select>
        </>
    )
    return [moneda, UseSelectMonedas];
}

