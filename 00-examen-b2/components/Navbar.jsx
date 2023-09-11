import Link from "next/link";
export default function Navbar(){
    return (
        <nav className="flex justify-between items-center
        bg-spotify-green px-8 py-3 rounded-2xl border-b-8 text-spotify-blue text-opacity-80">
            <h1 className="text-spotify-black font-bold text-2xl">
                <Link href={'/'}>
                    Spotify
                </Link>
            </h1>
            <Link className="py-3 px-6 w-fit bg-spotify-blue text-spotify-white p-2 rounded-3xl border-b-2"
                  href={'/agregarAlbum'}>
                Agregar Album
            </Link>
        </nav>
    );
}