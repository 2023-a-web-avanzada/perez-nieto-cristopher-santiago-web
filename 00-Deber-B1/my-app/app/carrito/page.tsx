'use client'
import Carrito from "@/app/components/Carrito";

export default function page(){
    return(
        <main className="flex flex-col justify-between max-h-0.5 bg-white text-black">
            <Carrito colorIteraciones="bg-white"></Carrito>
        </main>
    )
}