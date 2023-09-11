import EditarAlbumForm from "@/components/EditarAlbumForm";

const getAlbumById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/albumes/${id}`,
            {cache: 'no-store'});
        if (!res.ok) {
            throw new Error("Error al cargar el Album");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export default async function editarAlbum({params}) {
    const {id} = params;
    const album = await getAlbumById(id);
    const {titulo, autor} = album;
    return (
        <EditarAlbumForm id={id} titulo={titulo} autor={autor}/>
    );
}