import { ButtonNext } from "@/components/button-next";
import { FlexWidget } from "@/components/flex-widget";
import { cssProps } from "@/constants/flex-boxes";
export default function FlexJustifyContentPage() {
	return (
		<div>
			<header className="flex items-center justify-between p-5 fixed w-full top-0 backdrop-blur-md bg-black/50">
				<div className="flex-1">
					<ButtonNext
						href="/flex-direction"
						title="Flex-direction"
						direction="left"
					/>
				</div>
				<h1 className="text-center text-3xl font-bold">
					Flexbox - justify-content
				</h1>
				<div className="flex-1 flex justify-end">
					<ButtonNext href="/flex-items" title="Flex Items" direction="right" />
				</div>
			</header>

			<main className="m-10 font-[family-name:var(--font-geist-sans)] p-8 pt-12">
				<section className="space-y-4 mb-12">
					<h2 className="text-2xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] bold mb-2">
						Propiedad <em>justify-content</em>
					</h2>
					<p>
						La propiedad <code className="csscode">justify-content</code> nos
						permite alinear los elementos hijos dentro del contenedor a lo largo
						del eje principal. Esto se puede lograr con los siguientes valores:{" "}
						<code className="csscode">flex-start</code>,{" "}
						<code className="csscode">flex-end</code>,{" "}
						<code className="csscode">center</code>,{" "}
						<code className="csscode">space-between</code>,{" "}
						<code className="csscode">space-around</code> y{" "}
						<code className="csscode">space-evenly</code>.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Flex-start
					</h2>
					<p>
						El valor predeterminado de la propiedad{" "}
						<code className="csscode">justify-content</code> es{" "}
						<em className="font-bold csscode">flex-start</em>, lo que significa
						que los elementos se alinearán al principio del contenedor (en el
						inicio del eje principal).
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Flex-end
					</h2>
					<p>
						Cuando se establece <code className="csscode">justify-content</code>{" "}
						en <em className="font-bold csscode">flex-end</em>, los elementos se
						alinearán al final del contenedor (al final del eje principal).
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Center
					</h2>
					<p>
						Si se utiliza <code className="csscode">justify-content</code> con
						el valor <em className="font-bold csscode">center</em>, los
						elementos se alinearán en el centro del contenedor a lo largo del
						eje principal.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Space-between
					</h2>
					<p>
						Usando <code className="csscode">justify-content</code> con el valor{" "}
						<em className="font-bold csscode">space-between</em>, los elementos
						se distribuyen de manera que haya un espacio igual entre ellos, pero
						sin espacio al principio ni al final del contenedor.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Space-around
					</h2>
					<p>
						Con <code className="csscode">justify-content</code> en{" "}
						<em className="font-bold csscode">space-around</em>, los elementos
						se distribuyen con un espacio igual alrededor de ellos, incluyendo
						los márgenes antes del primer elemento y después del último.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Space-evenly
					</h2>
					<p>
						Al utilizar <code className="csscode">justify-content</code> con{" "}
						<em className="font-bold csscode">space-evenly</em>, los elementos
						se distribuyen de manera que haya un espacio igual entre ellos y en
						los márgenes del contenedor.
					</p>
				</section>

				<section>
					<div className="p-6 space-y-4">
						<FlexWidget
							defaultSize={{
								width: "70vw",
							}}
							flexCount={4}
							codetitle="Propiedad justify-content"
							codeSize={"w-[23rem]"}
							css={cssProps["justify-content"]}
						></FlexWidget>
					</div>
				</section>
			</main>
		</div>
	);
}
