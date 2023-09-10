import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from 'react-icons/hi';

const getAlbumes = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/albumes', {
            //cache: 'no-store',
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
                <div className="p-4 border border-slate-300 my-3 flex
             justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-2xl">{a.titulo}</h2>
                        <div>{a.autor}</div>
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn></RemoveBtn>
                        <Link href={`/editarAlbum/${a._id}`}>
                            <HiPencilAlt size={24}/>
                        </Link>
                    </div>
                </div>
            ))}
        </>

    )
}