'use client'
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function EditarAlbumForm({id, titulo, autor}) {
    const [nuevoTitulo, setNuevoTitulo] = useState(titulo);
    const [nuevoAutor, setNuevoAutor] = useState(autor);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/albumes/${id}`,
                {
                    method: "PUT",
                    header: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({nuevoTitulo, nuevoAutor}),
                });
            if(!res.ok){
                throw new Error("Error al actualizar el Album");
            }
            router.push('/');
            router.refresh();
        }catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-spotify-grey border-b-8 rounded-2xl p-4 text-spotify-dark1 text-opacity-50">
            <input
                onChange={(e) => setNuevoTitulo(e.target.value)}
                value={nuevoTitulo}
                className="border px-8 py-2 rounded-3xl text-spotify-blue"
                type="text"
                placeholder="Título del Album"
            />

            <input
                onChange={(e) => setNuevoAutor(e.target.value)}
                value={nuevoAutor}
                className="border px-8 py-2 rounded-3xl text-spotify-blue"
                type="text"
                placeholder="Autor del Album"
            />

            <button className="font-bold py-3 px-6 w-fit bg-spotify-blue text-spotify-white p-2 rounded-3xl border-b-2">
                Editar Album
            </button>
        </form>
    );
}