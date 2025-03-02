import { ButtonNext } from "@/components/button-next";
import { FlexWidget } from "@/components/flex-widget";
import { cssProps } from "@/constants/flex-boxes";

export default function FlexAlignItemsPage() {
	return (
		<div>
			<header className="flex items-center justify-between p-5 fixed w-full top-0 backdrop-blur-md bg-black/50">
				<div className="flex-1">
					<ButtonNext href="/flex-items" title="flex items" direction="left" />
				</div>
				<h1 className="text-center text-3xl font-bold">
					Flexbox - align-items
				</h1>
				<div className="flex-1 flex justify-end">
					<ButtonNext href="/align-items" title="todo" direction="right" />
				</div>
			</header>

			<main className="m-10 font-[family-name:var(--font-geist-sans)] p-8 pt-12">
				<section className="space-y-4 mb-12">
					<h2 className="text-2xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Alineación de elementos flexibles
					</h2>
					<p>
						La propiedad <code className="csscode">align-items</code> controla
						cómo los elementos flexibles se alinean en el eje transversal dentro
						de un contenedor flex. Sus valores posibles incluyen:
					</p>
					<ul className="list-disc pl-5">
						<li>
							<code className="csscode">flex-start</code>: Los elementos se
							alinean al inicio del eje transversal.
						</li>
						<li>
							<code className="csscode">flex-end</code>: Los elementos se
							alinean al final del eje transversal.
						</li>
						<li>
							<code className="csscode">center</code>: Los elementos se alinean
							en el centro.
						</li>
						<li>
							<code className="csscode">baseline</code>: Los elementos se
							alinean según su línea base de texto.
						</li>
						<li>
							<code className="csscode">stretch</code>: Los elementos se estiran
							para ocupar todo el alto del contenedor.
						</li>
					</ul>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Alineación individual con align-self
					</h2>
					<p>
						La propiedad <code className="csscode">align-self</code> permite
						sobrescribir la alineación definida por{" "}
						<code className="csscode">align-items</code> en elementos
						individuales dentro del contenedor flex.
					</p>
					<p>
						Funciona con los mismos valores que{" "}
						<code className="csscode">align-items</code>, pero aplicándose a un
						solo elemento en lugar de a todos.
					</p>
				</section>

				<section>
					<div className="p-6 space-y-4">
						<FlexWidget
							defaultSize={{
								width: "500px",
								height: "600px",
							}}
							flexCount={6}
							codetitle="Alineación de elementos flexibles"
							codeSize={"w-[23rem]"}
							css={cssProps["align-items"]}
							flexItems={true}
							showAlignSelf={true}
						/>
					</div>
				</section>
			</main>
		</div>
	);
}
