'use client'
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function AgregarAlbum() {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!titulo || !autor) {
            alert('Título y autor son REQUERIDOS');
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/albumes', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({titulo, autor}),
            });
            if (res.ok) {
                router.push('/');
                router.refresh();
            } else {
                throw new Error("Error al crear un Album");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-spotify-grey border-b-8 rounded-2xl p-4 text-spotify-dark1 text-opacity-50">
            <input
                onChange={(e) => setTitulo(e.target.value)}
                value={titulo}
                className="border px-8 py-2 rounded-3xl text-spotify-blue"
                type="text"
                placeholder="Título del Album"
            />

            <input
                onChange={(e) => setAutor(e.target.value)}
                value={autor}
                className="border px-8 py-2 rounded-3xl text-spotify-blue"
                type="text"
                placeholder="Autor del Album"
            />

            <button type="submit" className="font-bold py-3 px-6 w-fit bg-spotify-blue text-spotify-white
            p-2 rounded-3xl border-b-2">
                Agregar Album
            </button>
        </form>
    );
}