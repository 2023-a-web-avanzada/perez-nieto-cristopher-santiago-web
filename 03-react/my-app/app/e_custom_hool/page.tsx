'use client'
import useSelectMoneda from "@/app/e_custom_hool/hooks/useSelectMoneda";
import {MonedasConst} from "@/app/e_custom_hool/const/monedas.const";
import {useEffect} from "react";

export default function page(){
    const [moneda, UseSelectMonedas] = useSelectMoneda('Moneda Globlal', MonedasConst)
    useEffect(
        ()=>{
            console.log(moneda);
        },
        [moneda]
    )
    return (
        <>
            {useSelectMoneda}
        </>
    )
}