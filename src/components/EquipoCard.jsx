export function EquipoCard({data}) {
    return (
        <div class="bg-[#FFFDF5] border-4 border-black p-4 shadow-[6px_6px_0px_0px_#000] flex flex-col gap-3">
            <div class="relative border-2 border-black overflow-hidden h-44 bg-[#72EFDD]">
                <img src={data.imagen} alt="Dra. Laura Méndez" class="w-full h-full object-cover" />
                <span class={`absolute bottom-2 left-2 px-2.5 py-0.5 ${data.expFondo} border-2 border-black font-black text-[11px] uppercase`}>{data.experiencia}</span>
            </div>
            <div>
                <h3 class="font-black text-lg uppercase">{data.nombre}</h3>
                <p class={`font-bold text-xs ${data.especialidadColor} uppercase`}>{data.especialidad}</p>
                <p class="text-xs font-medium text-neutral-700 mt-1">{data.descripcion}</p>
            </div>
        </div>
    )
}