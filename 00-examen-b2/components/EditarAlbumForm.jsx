'use client'
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function EditarAlbumForm({id, titulo, autor, duracion, fecha, esExplicita}) {
    const [nuevoTitulo, setNuevoTitulo] = useState(titulo);
    const [nuevoAutor, setNuevoAutor] = useState(autor);
    const [nuevaDuracion, setNuevaDuracion] = useState(duracion);
    const [nuevaFecha, setNuevaFecha] = useState(fecha);
    const [nuevoEsExplicita, setNuevoEsExplicita] = useState(esExplicita);

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
                    body: JSON.stringify({nuevoTitulo, nuevoAutor, nuevaDuracion, nuevaFecha, nuevoEsExplicita}),
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

            <input
                onChange={(e) => setNuevaDuracion(e.target.value)}
                value={nuevaDuracion}
                className="border px-8 py-2 rounded-3xl text-spotify-blue"
                type="number"
                placeholder="Duración (en minutos)"
            />

            <input
                onChange={(e) => setNuevaFecha(e.target.value)}
                value={nuevaFecha}
                className="border px-8 py-2 rounded-3xl text-spotify-blue"
                type="date"
                placeholder="Fecha de Lanzamiento"
            />

            <div className="border px-8 py-2 rounded-full text-spotify-blue bg-spotify-white">
                <label htmlFor="esExplicita">
                    ¿El álbum tiene contenido explícito?
                </label>
                <br/>
                <div className="flex flex-row gap-4">
                    <input
                        onChange={(e) => setNuevoEsExplicita(e.target.value)}
                        value="E"
                        className="border px-8 py-2 rounded-3xl text-spotify-blue"
                        type="radio"
                        name="esExplicita"
                    />
                    Sí
                    <input
                        onChange={(e) => setNuevoEsExplicita(e.target.value)}
                        value="NE"
                        className="border px-8 py-2 rounded-3xl text-spotify-blue"
                        type="radio"
                        name="esExplicita"
                    />
                    No
                </div>
            </div>


            <button className="font-bold py-3 px-6 w-fit bg-spotify-blue text-spotify-white p-2 rounded-3xl border-b-2">
                Editar Album
            </button>
        </form>
    );
}