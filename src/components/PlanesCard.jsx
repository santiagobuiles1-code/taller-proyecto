import { Link } from "react-router-dom"

export function PlanesCard({ data }) {
    return (
        <div className={`${data.colorFondo} ${data.popular ? "md:-translate-y-3" : ""} border-4 border-black p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-4`}>
            <div>
                <div className="flex items-center justify-between">
                    <span className={`${data.nombreFondo} ${data.nombreTexto} px-2.5 py-0.5 border-2 border-black font-black text-xs uppercase`}>{data.nombre}</span>
                    {data.popular && (
                        <span className="px-2 py-0.5 bg-black text-[#FFD600] font-black text-xs uppercase">Popular</span>
                    )}
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-black">{data.precio}</span>
                    <span className="font-bold text-xs uppercase">/ mes</span>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-xs font-bold">
                    {data.caracteristicas.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <span className="w-3 h-3 bg-black shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <Link to="/cita" className={`${data.botonEstilo} w-full py-2.5 border-2 border-black font-black text-xs uppercase text-center hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all`}>
                {data.botonTexto}
            </Link>
        </div>
    )
}