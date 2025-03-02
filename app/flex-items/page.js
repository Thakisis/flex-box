import { ButtonNext } from "@/components/button-next";
import { FlexWidget } from "@/components/flex-widget";
import { cssProps } from "@/constants/flex-boxes";
export default function FlexItemsPage() {
	return (
		<div>
			<header className="flex items-center justify-between p-5 fixed w-full top-0 backdrop-blur-md bg-black/50 z-50">
				<div className="flex-1">
					<ButtonNext
						href="/justify-content"
						title="Justify-content"
						direction="left"
					/>
				</div>
				<h1 className="text-center text-3xl font-bold">
					Flexbox - Propiedades de elementos hijos
				</h1>
				<div className="flex-1 flex justify-end">
					<ButtonNext
						href="/align-items"
						title="Align Items"
						direction="right"
					/>
				</div>
			</header>

			<main className="m-10 font-[family-name:var(--font-geist-sans)] p-8 pt-12">
				<section className="space-y-4 mb-12">
					<h2 className="text-2xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] bold mb-2">
						Propiedades de elementos flexibles
					</h2>
					<p>
						Las propiedades <code className="csscode">flex-grow</code>,{" "}
						<code className="csscode">flex-shrink</code> y{" "}
						<code className="csscode">flex-basis</code> se aplican a los
						elementos hijos dentro de un contenedor flex y determinan cómo estos
						elementos crecen, se encogen o establecen su tamaño base.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Flex-grow
					</h2>
					<p>
						La propiedad <code className="csscode">flex-grow</code> define la
						capacidad de un elemento para crecer si es necesario. Acepta un
						valor numérico sin unidades que sirve como proporción. Determina qué
						cantidad de espacio disponible dentro del contenedor flex debe
						ocupar el elemento.
					</p>
					<p>
						Si todos los elementos tienen{" "}
						<code className="csscode">flex-grow: 1</code>, el espacio disponible
						se distribuirá equitativamente entre todos ellos. Si un elemento
						tiene <code className="csscode">flex-grow: 2</code> y los demás{" "}
						<code className="csscode">flex-grow: 1</code>, el primero ocupará el
						doble de espacio que los demás.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Flex-shrink
					</h2>
					<p>
						La propiedad <code className="csscode">flex-shrink</code> define la
						capacidad de un elemento para encogerse si es necesario. Al igual
						que <code className="csscode">flex-grow</code>, acepta un valor
						numérico sin unidades.
					</p>
					<p>
						Si todos los elementos tienen{" "}
						<code className="csscode">flex-shrink: 1</code>, se encogerán
						uniformemente cuando no haya suficiente espacio. Un valor de{" "}
						<code className="csscode">flex-shrink: 0</code> significa que el
						elemento no se encogerá. Un valor mayor como{" "}
						<code className="csscode">flex-shrink: 2</code> significa que el
						elemento se encogerá el doble que los elementos con{" "}
						<code className="csscode">flex-shrink: 1</code>.
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Flex-basis
					</h2>
					<p>
						La propiedad <code className="csscode">flex-basis</code> define el
						tamaño inicial de un elemento antes de que el espacio disponible sea
						distribuido según las propiedades{" "}
						<code className="csscode">flex-grow</code> y{" "}
						<code className="csscode">flex-shrink</code>.
					</p>
					<p>
						Puede ser una longitud (por ejemplo,{" "}
						<code className="csscode">20%</code>,{" "}
						<code className="csscode">5rem</code>, etc.) o la palabra clave{" "}
						<code className="csscode">auto</code>. Si se establece en{" "}
						<code className="csscode">auto</code>, mira la propiedad width o
						height del elemento (dependiendo del eje principal).
					</p>

					<h2 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Shorthand: flex
					</h2>
					<p>
						La propiedad <code className="csscode">flex</code> es una
						abreviatura (shorthand) para{" "}
						<code className="csscode">flex-grow</code>,{" "}
						<code className="csscode">flex-shrink</code> y{" "}
						<code className="csscode">flex-basis</code> combinadas. Los valores
						por defecto son <code className="csscode">0 1 auto</code>,
						respectivamente.
					</p>
					<p>
						Por ejemplo, <code className="csscode">flex: 1 0 auto</code>{" "}
						significa que el elemento puede crecer (
						<code className="csscode">flex-grow: 1</code>), no se encoge (
						<code className="csscode">flex-shrink: 0</code>) y su tamaño base es
						automático (<code className="csscode">flex-basis: auto</code>).
					</p>
				</section>
				<section className="space-y-4">
					<h3 className="text-xl underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] font-bold mb-2">
						Instrucciones de uso del elemento hijo de flex
					</h3>
					<p>
						Hacer click sobre el elemento hijo de flex abrira un cuadro para
						cambiar algunas de sus propiedades.
					</p>
					<p>
						En el Hijo ademas de su numero se muestra a la izquierda 3
						triangulos
					</p>
					<p>
						para comprobar el efecto de flex-shrink es recomendable poner
						flex-wrap: nowrap ya que si no se pone, el contenido fluira de
						manera vertical.
						<br />
						En el caso de flex-grow es recomendable usar flex-wrap: wrap o que
						el contenedor se mas grande para ver como reparte el espacio
						disponible.
					</p>
				</section>
				<section>
					<div className="p-6 space-y-4">
						<FlexWidget
							flexClass={"w-3/4 max-w-none"}
							flexCount={4}
							codetitle="Propiedades de elementos flexibles"
							codeSize={"w-[23rem]"}
							css={cssProps["justify-content"]}
							flexItems={true}
							showAlignSelf={false}
						></FlexWidget>
					</div>
				</section>
			</main>
		</div>
	);
}
