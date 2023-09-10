import Link from "next/link";
export default function Navbar(){
    return (
        <nav className="flex justify-between items-center
        bg-slate-800 px-8 py-3">
            <h1 className="text-white font-bold">
                Spotify Chafa
            </h1>
            <Link className="bg-white p-2" href={'/agregarAlbum'}>
                Agregar Album
            </Link>
        </nav>
    );
}