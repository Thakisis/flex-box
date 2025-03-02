import { ButtonNext } from "@/components/button-next";
import { FlexWidget } from "@/components/flex-widget";
import { cssProps } from "@/constants/flex-boxes";
export default function FlexWrapPage() {
	return (
		<div>
			<header className="flex items-center justify-between p-5 fixed w-full top-0 backdrop-blur-md bg-black/50">
				<div className="flex-1">
					<ButtonNext href="/gap" title="gap" direction="left" />
				</div>
				<h1 className="text-center text-3xl font-bold">Flexbox - flex-wrap</h1>
				<div className="flex-1 flex justify-end">
					<ButtonNext
						href="/flex-direction"
						title="Flex-direction"
						direction="right"
					/>
				</div>
			</header>

			<main className="m-10 font-[family-name:var(--font-geist-sans)] p-8 pt-12">
				<section className="space-y-4 mb-12">
					<h2 className="text-2xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] bold mb-2">
						Propiedad <em>flex-wrap</em>
					</h2>
					<p>
						La propiedad <code className="csscode">flex-wrap</code> nos permite
						controlar si los elementos hijos de un contenedor flex deben
						envolver a la siguiente línea o mantenerse en una sola línea. Se usa
						de la siguiente forma:{" "}
						<code className="csscode">flex-wrap: [valor]</code>, donde puede
						tomar tres valores distintos:
						<code className="csscode">nowrap</code>,{" "}
						<code className="csscode">wrap</code> y{" "}
						<code className="csscode">wrap-reverse</code>.
					</p>
				</section>
				<section className="space-y-4 mb-12">
					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Wrap
					</h2>
					<p>
						Cuando la propiedad <code className="csscode">flex-wrap</code> se
						establece en
						<em className="font-bold csscode">wrap</em>, los elementos hijos se
						ajustarán a la siguiente línea si no hay suficiente espacio en la
						fila, en lugar de reducir su tamaño para encajar en una sola línea.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						No Wrap
					</h2>
					<p>
						El valor predeterminado de{" "}
						<code className="csscode">flex-wrap</code> es
						<em className="font-bold csscode">nowrap</em>, lo que significa que
						todos los elementos hijos permanecerán en una sola línea sin
						importar su tamaño, lo que podría provocar su desbordamiento fuera
						del contenedor.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Wrap-Reverse
					</h2>
					<p>
						Con <code className="csscode">flex-wrap</code> en
						<em className="font-bold csscode">wrap-reverse</em>, los elementos
						hijos se ajustarán a la siguiente línea de manera inversa, es decir,
						las nuevas líneas se agregarán por encima en lugar de por debajo.
					</p>
				</section>
				<section>
					<div className="p-6 space-y-4">
						<FlexWidget
							defaultSize={{
								width: "500px",
							}}
							codetitle="propiedad flex-wrap"
							codeSize={"w-[20rem]"}
							css={cssProps["flex-wrap"]}
							flexCount={7}
						></FlexWidget>
					</div>
				</section>
			</main>
		</div>
	);
}
