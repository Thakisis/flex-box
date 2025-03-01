import { ButtonNext } from "@/components/button-next";
import { FlexWidget } from "@/components/flex-widget";
import { CssProperty } from "@/components/css-property";

export default function FlexboxPage() {
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
				<section>
					<div className="p-6 space-y-4">
						<FlexWidget codetitle="propiedad flex-wrap" codeSize={"w-[20rem]"}>
							<div className="font-mono text-sm">
								<div className="leading-6 h-4"></div>
								<div className="leading-6">
									<span className="text-blue-300">.container</span>
									<span className="text-gray-300"> {"{"}</span>
								</div>
								<div className="leading-6 pl-4 grayscale opacity-50">
									<span className="text-violet-300">display</span>
									<span className="text-gray-300">: </span>
									<span className="text-emerald-300">flex</span>
									<span className="text-gray-300">;</span>
								</div>
								<div className="leading-6 pl-4">
									<span className="text-violet-300">flex-wrap</span>
									<span className="text-gray-300">: </span>
									<span className="text-emerald-300">
										<CssProperty property="flex-wrap" />
									</span>
									<span className="text-gray-300">;</span>
								</div>
								<div className="leading-6">
									<span className="text-gray-300">{"}"}</span>
								</div>
								<div className="leading-6 h-4"></div>
							</div>
						</FlexWidget>
					</div>
				</section>
			</main>
		</div>
	);
}
