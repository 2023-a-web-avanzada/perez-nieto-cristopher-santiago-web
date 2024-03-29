import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from 'react-icons/hi';

const getAlbumes = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/albumes', {
            cache: 'no-store'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error al cargar los Albumes', error);
    }
}

export default async function AlbumList() {
    const {albumes} = await getAlbumes();
    return (
        <>
            {albumes.map(a => (
                <div className="p-4 border-b-8 my-3 flex
             justify-between gap-5 items-start rounded-2xl bg-spotify-dark1 text-spotify-white
             text-opacity-20">
                    <div>
                        <h2 className="font-bold text-2xl text-spotify-white">{a.titulo}</h2>
                        <div className="text-spotify-grey">{a.autor}</div>
                        <div className="flex flex-row gap-5">
                            <div className="">≈ {a.duracion}:00 min.</div>
                            <div className="">|</div>
                            <div className="">{a.fecha}</div>
                            <div className="">|</div>
                            <div className="font-bold text-spotify-white text-opacity-70 bg-spotify-green px-5
                            bg-opacity-50 rounded">
                                {a.esExplicita}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn id={a._id}/>
                        <Link href={`/editarAlbum/${a._id}`} className="text-spotify-yellow">
                            <HiPencilAlt size={24}/>
                        </Link>
                    </div>
                </div>
            ))}
        </>

    )
}