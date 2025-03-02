import { ButtonNext } from "@/components/button-next";
import { FlexWidget } from "@/components/flex-widget";
import { cssProps } from "@/constants/flex-boxes";
export default function FlexDirectionPage() {
	return (
		<div>
			<header className="flex items-center justify-between p-5 fixed w-full top-0 backdrop-blur-md bg-black/50">
				<div className="flex-1">
					<ButtonNext href="/flex-wrap" title="Flex-wrap" direction="left" />
				</div>
				<h1 className="text-center text-3xl font-bold">
					Flexbox - flex-direction
				</h1>
				<div className="flex-1 flex justify-end">
					<ButtonNext
						href="/justify-content"
						title="Justify-content"
						direction="right"
					/>
				</div>
			</header>

			<main className="m-10 font-[family-name:var(--font-geist-sans)] p-8 pt-12">
				<section className="space-y-4 mb-12">
					<h2 className="text-2xl  underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] bold mb-2 ">
						Propiedad <em>flex-direction</em>
					</h2>
					<p>
						La propiedad <code className="csscode">flex-direction</code> nos va
						a permitir definir tanto la direccion en la que van a fluir los
						elementos hijos, como su sentido de flujo y se usa de la siguiente
						forma: <code className="csscode">flex-direction:[value]</code>.
						donde puede tomar cuatros valores distintos:{" "}
						<code className="csscode">row</code>,{" "}
						<code className="csscode">column</code>,{" "}
						<code className=" csscode inline-block">row-reverse</code> y{" "}
						<code className="csscode break-keep inline-block">
							column-reverse
						</code>
						.
					</p>
					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Row
					</h2>
					<p>
						El valor predeterminado de la propiedad{" "}
						<code className="csscode">flex-direction</code> es{" "}
						<em className="font-bold csscode">row</em>, lo que significa que los
						elementos hijos se alinearán en una fila, comenzando desde la
						izquierda y terminando en la derecha.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Column
					</h2>
					<p>
						Al establecer <code className="csscode">flex-direction</code> en{" "}
						<em className="font-bold csscode">column</em>, los elementos hijos
						se alinearán en una columna, comenzando desde la parte superior y
						terminando en la parte inferior.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Row-Reverse
					</h2>
					<p>
						Con <code className="csscode">flex-direction</code> en{" "}
						<em className="font-bold csscode">row-reverse</em>, los elementos
						hijos se alinearán en una fila, pero en orden inverso, comenzando
						desde la derecha y terminando en la izquierda.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Column-Reverse
					</h2>
					<p>
						Si se utiliza <code className="csscode">flex-direction</code> con el
						valor <em className="font-bold csscode">column-reverse</em>, los
						elementos hijos se alinearán en una columna en orden inverso,
						comenzando desde la parte inferior y terminando en la parte
						superior.
					</p>
				</section>
				<section>
					<div className="p-6 space-y-4">
						<FlexWidget
							defaultSize={{
								width: "800px",
							}}
							codetitle="propiedad gap"
							codeSize={"w-[23rem]"}
							flexCount={3}
							css={cssProps["flex-direction"]}
						></FlexWidget>
					</div>
				</section>
			</main>
		</div>
	);
}
