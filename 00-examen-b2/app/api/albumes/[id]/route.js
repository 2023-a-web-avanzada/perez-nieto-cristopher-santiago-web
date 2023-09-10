import connectMongoDB from "@/libs/mongodb";
import Album from "@/models/album";
import {NextResponse} from "next/server";

export async function PUT(request, {params}) {
    const {id} = params;
    const {
        nuevoTitulo: titulo,
        nuevoAutor: autor
    } = await request.json();
    await connectMongoDB();
    await Album.findByIdAndUpdate(id, {titulo, autor});
    return NextResponse.json({message: 'Album actualizado'}, {status: 200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const album = await Album.findOne({_id: id});
    return NextResponse.json({album}, {status: 200});
}