import { ButtonNext } from "@/components/button-next";

export default function FlexboxPage() {
	return (
		<div>
			<header className="flex items-center justify-between p-5 fixed w-full top-0 backdrop-blur-md bg-black/50">
				<div className="flex-1"></div>
				<h1 className="text-center text-3xl font-bold">Flexbox</h1>
				<div className="flex-1 flex justify-end">
					<ButtonNext href="/gap" title="gap" direction="right" />
				</div>
			</header>

			<main className="m-10 font-[family-name:var(--font-geist-sans)] p-8 pt-12">
				<section className="space-y-4 mb-12">
					<h2 className="text-2xl  underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] bold mb-2">
						Porque flex-box
					</h2>
					<p>
						Antes de la aparicion de flex-box, solo se usaban dos modos de flujo
						de contenidos:
					</p>
					<p>
						Uno era el flujo de bloques (block) y el otro era el flujo de
						columnas( inline).
					</p>
					<div className="p-6 space-y-4">
						<p>
							Flujo de bloques (block): Los elementos con display: block se
							colocan uno debajo del otro.
						</p>
						<div className="p-6 rounded-lg  max-w-md border-2 border-dashed border-gray-400 bg-orange-500/20">
							<div className="space-y-4 [&>div]:block [&>div]:p-6 [&>div]:bg-orange-500 [&>div]:text-center [&>div]:font-semibold [&>div]:rounded-lg  m-10 bg-black font-monocode">
								<div>Elemento 1</div>
								<div>Elemento 2</div>
								<div>Elemento 3</div>
							</div>
						</div>
					</div>
					<div className="p-6 space-y-4">
						<p>
							Flujo en línea (inline): Los elementos con display: inline o
							display: inline-block se colocan uno al lado del otro en una misma
							línea.
						</p>
						<div className="p-6 rounded-lg  max-w-lg border-2 border-dashed border-gray-400 bg-orange-500/20">
							<div className="space-x-4 [&>div]:inline-block [&>div]:p-6 [&>div]:bg-orange-500 [&>div]:text-center [&>div]:font-semibold [&>div]:rounded-lg  bg-black w-full font-monocode">
								<div>Elemento 1</div>
								<div>Elemento 2</div>
								<div>Elemento 3</div>
							</div>
						</div>
					</div>
				</section>
				<section className="space-y-4 mb-12">
					<h2 className="text-2xl  underline   decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] bold mb-2">
						Caracteristicas de flex-box
					</h2>

					<p>
						Flexbox es un sistema de diseño que permite alinear elementos en
						filas o columnas, definiendo un eje de alineación principal y otro
						secundario.
						<br />
					</p>
					<p>
						Esto permite que los elementos se alineen de manera flexible y
						dinámica, lo cual es útil para crear interfaces de usuario (UI)
						adaptables a diferentes tamaños y resoluciones de pantalla.
					</p>
				</section>
				<section className="space-y-4 mb-12">
					<h2 className="text-2xl  underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] bold mb-2">
						Ejemplos de uso
					</h2>
					<div className="grid grid-cols-2 gap-4 items-center place-items-center">
						<div>
							<h3 className="w-full p-2 text-center">
								usando display block-inline
							</h3>
							<div className="p-6 rounded-lg  max-w-lg border-2 border-dashed border-gray-400 bg-orange-500/20">
								<div className="space-x-4 [&>div]:inline-block [&>div]:p-6 [&>div]:bg-orange-500 [&>div]:text-center [&>div]:font-semibold [&>div]:rounded-lg bg-black font-monocode">
									<div>Elemento 1</div>
									<div>Elemento 2</div>
									<div>Elemento 3</div>
									<div>Elemento 4</div>
									<div>Elemento 5</div>
									<div>Elemento 6</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className="w-full p-2 text-center">usando display flex</h3>
							<div className="p-6 rounded-lg  max-w-lg border-2 border-dashed border-gray-400 bg-orange-500/20">
								<div className="flex  flex-wrap  [&>div]:p-6 [&>div]:bg-orange-500 [&>div]:text-center [&>div]:font-semibold [&>div]:rounded-lg bg-black font-monocode">
									<div>Elemento 1</div>
									<div>Elemento 2</div>
									<div>Elemento 3</div>
									<div>Elemento 4</div>
									<div>Elemento 5</div>
									<div>Elemento 6</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
