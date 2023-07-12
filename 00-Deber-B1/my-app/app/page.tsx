'use client'
import Index from "@/app/components/Index";

export default function Home() {
    return (
        <main className="flex flex-col justify-between max-h-0.5 border-solid border-2 border-red-500">
            <Index colorIteraciones="bg-white"></Index>
        </main>
    )
}
