import { ButtonNext } from "@/components/button-next";
import { FlexWidget } from "@/components/flex-widget";

export default function GapPage() {
	return (
		<div>
			<header className="flex items-center justify-between p-5 fixed w-full top-0 backdrop-blur-md bg-black/50">
				<div className="flex-1">
					<ButtonNext href="/flexbox" title="Flex-box	" direction="left" />
				</div>
				<h1 className="text-center text-3xl font-bold">Flexbox - gap</h1>
				<div className="flex-1 flex justify-end">
					<ButtonNext href="/flex-wrap" title="Flex-wrap" direction="right" />
				</div>
			</header>

			<main className="m-10 font-[family-name:var(--font-geist-sans)] p-8 pt-12">
				<section className="space-y-4 mb-12">
					<h2 className="text-2xl  underline decoration-wavy decoration-1 decoration-orange-500 underline-offset-[3px] bold mb-2 ">
						Propiedad <em>gap</em>
					</h2>
					<p>
						La propiedad <code className="csscode">gap</code> establece la
						separacion minima entre elementos su sintaxis es{" "}
						<code className="csscode">gap:[valor][unidad]</code>. el valor sera
						un numero y la unidad puede ser <code className="csscode">px</code>,{" "}
						<code className="csscode">rem</code>,{" "}
						<code className="csscode">em</code>,{" "}
						<code className="csscode">%</code>...
					</p>
				</section>
				<section>
					<div className="p-6 space-y-4">
						<FlexWidget
							codetitle="propiedad gap"
							codeSize={"w-[15rem]"}
							code={`
								/* Click en las propiedades
								coloreadas para editarlas */
							.container {
    							display:flex; 
    							gap: <-property:gap"value:210px->;
							}`}
						></FlexWidget>
					</div>
				</section>
			</main>
			<footer className="relative w-full my-16 flex justify-center "></footer>
		</div>
	);
}
