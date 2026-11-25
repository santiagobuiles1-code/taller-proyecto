import { Link } from "react-router-dom"

export function Header() {
    return (
        <header class="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF5] border-b-4 border-black px-4 md:px-10 h-16 flex items-center justify-between">
            <Link to="#inicio" class="flex items-center gap-2.5 group">
                <div class="w-10 h-10 bg-[#FF4D6D] border-2 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_#000] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
                    <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" stroke="#000" stroke-width="2" />
                    </svg>
                </div>
                <span class="font-black text-xl tracking-tight uppercase">VITA<span class="text-[#FF4D6D]">+</span></span>
            </Link>

            <nav class="hidden lg:flex items-center gap-2">
                <Link to="/" class="px-2.5 py-1 bg-[#FFD600] border-2 border-black font-bold text-[11px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                    01 Inicio
                </Link>
                <Link to="/especialidades" class="px-2.5 py-1 bg-[#72EFDD] border-2 border-black font-bold text-[11px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                    02 Áreas
                </Link>
                <Link to="/equipo" class="px-2.5 py-1 bg-[#C8B6FF] border-2 border-black font-bold text-[11px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                    03 Equipo
                </Link>
                <Link to="/planes" class="px-2.5 py-1 bg-white border-2 border-black font-bold text-[11px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                    04 Planes
                </Link>
                <Link to="/tecnologia" class="px-2.5 py-1 bg-[#80ED99] border-2 border-black font-bold text-[11px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                    05 Clínica
                </Link>
                <Link to="/cita" class="px-2.5 py-1 bg-[#FF4D6D] text-white border-2 border-black font-bold text-[11px] uppercase tracking-wider shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                    06 Cita
                </Link>
            </nav>

            <a href="#cita" class="flex items-center gap-2 px-4 py-1.5 bg-[#FF4D6D] text-white border-2 border-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                <span class="w-2.5 h-2.5 bg-[#FFD600] border border-black rounded-full"></span>
                Urgencias 24H
            </a>
        </header>
    )
}