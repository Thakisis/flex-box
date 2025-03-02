import { ButtonNext } from "@/components/button-next";
import { FlexWidget } from "@/components/flex-widget";
import { cssProps } from "@/constants/flex-boxes";

export default function FlexAlignContentPage() {
    return (
        <div>
            <header className="flex items-center justify-between p-5 fixed w-full top-0 backdrop-blur-md bg-black/50 z-50">
                <div className="flex-1">
                    <ButtonNext href="/flex-items" title="flex items" direction="left" />
                </div>
                <h1 className="text-center text-3xl font-bold">
                    Flexbox - align-content
                </h1>
                <div className="flex-1 flex justify-end">
                    <ButtonNext href="/ejercicios" title="Ejercicios Practicos" direction="right" />
                </div>
            </header>

            <main className="m-10 font-[family-name:var(--font-geist-sans)] p-8 pt-12">
                <section className="space-y-4 mb-12">
                    <h2 className="text-2xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
                        Distribución de líneas flexibles
                    </h2>
                    <p>
                        La propiedad <code className="csscode">align-content</code> controla
                        cómo se distribuyen las líneas de elementos flexibles a lo largo del eje transversal
                        cuando hay espacio extra disponible y cuando <code className="csscode">flex-wrap</code> está
                        configurado como <code className="csscode">wrap</code>.
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            <code className="csscode">flex-start</code>: Las líneas se
                            agrupan al inicio del eje transversal.
                        </li>
                        <li>
                            <code className="csscode">flex-end</code>: Las líneas se
                            agrupan al final del eje transversal.
                        </li>
                        <li>
                            <code className="csscode">center</code>: Las líneas se agrupan
                            en el centro del eje transversal.
                        </li>
                        <li>
                            <code className="csscode">space-between</code>: Las líneas se distribuyen
                            uniformemente con la primera línea al inicio y la última al final.
                        </li>
                        <li>
                            <code className="csscode">space-around</code>: Las líneas se distribuyen
                            con espacios iguales alrededor de cada línea.
                        </li>
                        <li>
                            <code className="csscode">space-evenly</code>: Las líneas se distribuyen
                            con espacios iguales entre ellas.
                        </li>
                        <li>
                            <code className="csscode">stretch</code>: Las líneas se estiran
                            para ocupar todo el espacio disponible (valor por defecto).
                        </li>
                    </ul>

                    <h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
                        Diferencia entre align-items y align-content
                    </h2>
                    <p>
                        Es importante entender la diferencia entre <code className="csscode">align-items</code> y <code className="csscode">align-content</code>:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>
                            <code className="csscode">align-items</code> alinea los elementos individuales dentro de cada línea.
                            Afecta a todos los elementos de la misma manera.
                        </li>
                        <li>
                            <code className="csscode">align-content</code> distribuye el espacio entre las líneas a lo largo del eje transversal,
                            similar a cómo <code className="csscode">justify-content</code> distribuye elementos en el eje principal.
                        </li>
                        <li>
                            Cuando se usa <code className="csscode">align-content</code>, la alineación definida por <code className="csscode">align-items</code>
                            queda deshabilitada para dar prioridad a la distribución de las líneas.
                        </li>
                        <li>
                            <code className="csscode">align-content</code> sólo tiene efecto cuando hay múltiples líneas
                            (<code className="csscode">flex-wrap: wrap</code>) y hay espacio extra en el eje transversal.
                        </li>
                    </ul>
                </section>

                <section>
                    <div className="p-6 space-y-4">
                        <FlexWidget
                            defaultSize={{
                                width: "500px",
                                height: "700px",
                            }}
                            flexCount={6}
                            codetitle="Distribución de líneas flexibles"
                            codeSize={"w-[23rem]"}
                            css={cssProps["align-content"]}
                            flexItems={true}
                            flexWrap={true}
                            showAlignContent={true}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}