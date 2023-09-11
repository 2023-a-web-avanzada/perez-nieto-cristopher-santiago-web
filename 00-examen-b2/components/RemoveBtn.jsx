'use client'
import {HiOutlineTrash} from 'react-icons/hi'
import {useRouter} from "next/navigation";

export default function RemoveBtn({id}) {
    const router = useRouter();
    const eliminarAlbum = async () => {
        const confirmado = confirm('¿Estás seguro que quieres eliminar este album?');
        if (confirmado) {
            const res = await fetch(`http://localhost:3000/api/albumes?id=${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                router.refresh();
            }
        }
    }

    return (
        <button onClick={eliminarAlbum} className="text-spotify-red">
            <HiOutlineTrash size={24}/>
        </button>
    )
}