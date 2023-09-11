import connectMongoDB from "@/libs/mongodb";
import Album from "@/models/Album";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {titulo, autor, duracion, fecha, esExplicita} = await request.json();
    await connectMongoDB();
    await Album.create({titulo, autor, duracion, fecha, esExplicita});
    return NextResponse.json({message: "Album Creado"}, {status: 200});
}

export async function GET() {
    await connectMongoDB();
    const albumes = await Album.find();
    return NextResponse.json({albumes});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Album.findByIdAndDelete(id);
    return NextResponse.json({message: "Album eliminado"}, {status: 200});

}