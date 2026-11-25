export function AreaCard({data}) {
    return (
        <div className={`${data.colorFondo} ${data.colorTexto} border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-transform flex flex-col items-center text-center gap-2`}>
            <div className={`${data.iconoFondo} ${data.iconoForma} ${data.iconoRotacion} w-12 h-12 border-2 border-black rounded-full flex items-center justify-center`}>
                <svg className={`w-7 h-7 ${data.iconoColor}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d={data.iconoPath} stroke="#000" stroke-width="1.5" />
                </svg>
            </div>
            <h3 className="font-black text-sm md:text-base uppercase tracking-wide">{data.titulo}</h3>
            <p className="text-xs font-bold leading-snug hidden sm:block">{data.descripcion}</p>
        </div>
    )
}