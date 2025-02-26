export default function FlexboxPage() {
  return (
    <div>
      <header className="flex items-center justify-center">
        <h1 className="text-center text-3xl font-bold">Flexbox</h1>
      </header>

      <main className="m-10 font-[family-name:var(--font-geist-sans)] ">
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl  underline decoration-wavy decoration-orange-500 underline-offset-[3px] bold mb-2">
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

          <p>
            los elementos con display block se colocan uno debajo del otro
          </p>
          <div className="p-6 rounded-lg shadow-lg max-w-md border-2 border-dashed border-gray-400 bg-orange-500/20">
            <div className="space-y-4 [&>div]:block [&>div]:p-6 [&>div]:bg-orange-500 [&>div]:text-center [&>div]:font-semibold [&>div]:rounded-lg  m-10 bg-black">
              <div>Elemento 1</div>
              <div>Elemento 2</div>
              <div>Elemento 3</div>
            </div>
          </div>
          <p>
            al usar display block-inline, los elementos se colocan uno a la derecha del otro
            
          </p>
          <div className="p-6 rounded-lg shadow-lg max-w-lg border-2 border-dashed border-gray-400 bg-orange-500/20">
            <div className="space-x-4 [&>div]:inline-block [&>div]:p-6 [&>div]:bg-orange-500 [&>div]:text-center [&>div]:font-semibold [&>div]:rounded-lg  bg-black w-full">
              <div>Elemento 1</div>
              <div>Elemento 2</div>
              <div>Elemento 3</div>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl  underline decoration-wavy decoration-orange-500 underline-offset-[3px] bold mb-2">
            Caracteristicas de flex-box
          </h2>

          <p>
            Flex-box es un sistema de diseño de contenidos que permite a los
            elementos alinearse en filas o columnas definiendo un eje de alineación principal y otro secundario.
          </p>
          <p>
            Esto permite a los elementos de contenidos de ser alineados de
            manera flexible y dinámica, lo que resulta útil para crear diseños
            de interfaz de usuario (UI) que se adapten a diferentes tamaños de
            pantalla y resoluciones de pantalla.
          </p>

          <div className="grid grid-cols-2 gap-4 items-center place-items-center">
            <div>
              <h3 className="w-full p-2 text-center">
                usando display block-inline
              </h3>
              <div className="p-6 rounded-lg shadow-lg max-w-lg border-2 border-dashed border-gray-400 bg-orange-500/20">
                <div className="space-x-4 [&>div]:inline-block [&>div]:p-6 [&>div]:bg-orange-500 [&>div]:text-center [&>div]:font-semibold [&>div]:rounded-lg bg-black ">
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
              <div className="p-6 rounded-lg shadow-lg max-w-lg border-2 border-dashed border-gray-400 bg-orange-500/20">
                <div className="flex  flex-wrap gap-4 justify-between  [&>div]:p-6 [&>div]:bg-orange-500 [&>div]:text-center [&>div]:font-semibold [&>div]:rounded-lg bg-black">
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
