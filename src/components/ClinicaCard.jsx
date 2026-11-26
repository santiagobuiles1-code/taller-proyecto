export function ClinicaCard({data}) {
    return (
        <div class="bg-[#FFFDF5] border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
            <span class={`${data.etiquetaFondo} inline-block px-2 py-0.5 border border-black font-black text-[10px] uppercase mb-2`}>{data.etiqueta}</span>
            <h3 class="font-black text-sm uppercase">{data.titulo}</h3>
            <p class="text-xs font-medium text-neutral-700 mt-1">{data.descripcion}</p>
        </div>
    )
}