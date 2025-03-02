import { ButtonNext } from "@/components/button-next";
import Image from "next/image";
export default function FlexboxPage() {
    return (
        <div className="relative min-h-screen w-full bg-black">
            <Image src="/construccion.jpg" alt="Ejercicios Practicos" width={1376} height={768} className="absolute inset-0  object-cover w-full h-full object-bottom" />
            <header className="flex items-center justify-between p-5 fixed w-full top-0 backdrop-blur-md bg-black/50 z-50">
                <div className="flex-1">
                    <ButtonNext href="/align-content" title="Align Content" direction="left" />
                </div>
                <h1 className="text-center text-3xl font-bold">
                    Flexbox - Ejercicios
                </h1>
                <div className="flex-1 flex justify-end">
                    <ButtonNext href="/" title="Inicio" direction="right" />
                </div>
            </header>

        </div>
    );
}

/*
*/