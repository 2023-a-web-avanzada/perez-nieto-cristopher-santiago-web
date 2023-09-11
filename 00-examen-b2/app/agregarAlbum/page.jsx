'use client'
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function AgregarAlbum() {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [duracion, setDuracion] = useState("");
    const [fecha, setFecha] = useState("");
    const [esExplicita, setEsExplicita] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!titulo || !autor || !duracion || !fecha) {
            alert('Rellene todos los campos');
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/albumes', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({titulo, autor, duracion, fecha, esExplicita}),
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-spotify-grey border-b-8 rounded-2xl p-4
        text-spotify-dark1 text-opacity-50">
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

            <input
                onChange={(e) => setDuracion(e.target.value)}
                value={duracion}
                className="border px-8 py-2 rounded-3xl text-spotify-blue"
                type="number"
                placeholder="Duración (en minutos)"
            />

            <input
                onChange={(e) => setFecha(e.target.value)}
                value={fecha}
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
                        onChange={(e) => setEsExplicita(e.target.value)}
                        value="E"
                        className="border px-8 py-2 rounded-3xl text-spotify-blue"
                        type="radio"
                        name="esExplicita"
                    />
                    Sí
                    <input
                        onChange={(e) => setEsExplicita(e.target.value)}
                        value="NE"
                        className="border px-8 py-2 rounded-3xl text-spotify-blue"
                        type="radio"
                        name="esExplicita"
                    />
                    No
                </div>
            </div>


            <button type="submit" className="font-bold py-3 px-6 w-fit bg-spotify-blue text-spotify-white
            p-2 rounded-3xl border-b-2">
                Agregar Album
            </button>
        </form>
    );
}