import { Link } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function Inicio() {
    return (
        <>
            <Header />
            <section id="inicio" class="relative h-screen w-full snap-start overflow-hidden bg-[#FFFDF5] pt-20 pb-16 px-6 md:px-12 flex items-center justify-center">

                {/* <!-- Elementos Memphis de fondo --> */}
                <svg class="absolute top-20 left-6 w-20 h-20 pointer-events-none hidden md:block" viewBox="0 0 100 100" fill="none">
                    <circle cx="15" cy="15" r="4" fill="#000" />
                    <circle cx="35" cy="15" r="4" fill="#000" />
                    <circle cx="55" cy="15" r="4" fill="#000" />
                    <circle cx="15" cy="35" r="4" fill="#000" />
                    <circle cx="35" cy="35" r="4" fill="#000" />
                    <circle cx="55" cy="35" r="4" fill="#000" />
                    <circle cx="15" cy="55" r="4" fill="#000" />
                    <circle cx="35" cy="55" r="4" fill="#000" />
                    <circle cx="55" cy="55" r="4" fill="#000" />
                </svg>

                <svg class="absolute bottom-16 left-12 w-28 h-10 pointer-events-none hidden sm:block" viewBox="0 0 120 40" fill="none">
                    <path d="M5 30 L20 10 L35 30 L50 10 L65 30 L80 10 L95 30 L110 10" stroke="#FF4D6D" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <svg class="absolute top-24 right-10 w-16 h-16 pointer-events-none hidden md:block" viewBox="0 0 80 80" fill="none">
                    <polygon points="40,8 72,68 8,68" fill="#FFD600" stroke="#000" stroke-width="4" />
                </svg>

                <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                    {/* <!-- Columna Izquierda: Contenido y Badges --> */}
                    <div class="lg:col-span-6 flex flex-col items-start gap-4 md:gap-5">
                        <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-[#72EFDD] border-2 border-black shadow-[4px_4px_0px_0px_#000] -rotate-2">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                            </svg>
                            <span class="font-black text-xs uppercase tracking-widest">Centro Médico Integral</span>
                        </div>

                        <h1 class="text-5xl sm:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight uppercase">
                            SALUD
                            <span class="inline-block bg-[#FFD600] border-4 border-black px-3 py-1 shadow-[6px_6px_0px_0px_#000] rotate-1 mt-1">
                                SIN PAUSA
                            </span>
                        </h1>

                        <p class="text-sm sm:text-base font-bold text-neutral-800 max-w-md bg-white border-2 border-black px-4 py-3 shadow-[4px_4px_0px_0px_#000]">
                            Atención médica inmediata, diagnóstico digital y más de 20 especialistas certificados en un solo lugar.
                        </p>

                        {/* <!-- Indicadores Visuales --> */}
                        <div class="flex flex-wrap gap-3">
                            <div class="flex items-center gap-2 bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000]">
                                <span class="w-3 h-3 bg-[#38B000] border border-black rounded-full"></span>
                                <span class="font-black text-base">24/7</span>
                            </div>
                            <div class="flex items-center gap-2 bg-[#C8B6FF] border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000]">
                                <span class="font-black text-base">+15</span>
                                <span class="font-bold text-xs uppercase">Áreas</span>
                            </div>
                            <div class="flex items-center gap-2 bg-[#FF4D6D] text-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_#000]">
                                <span class="font-black text-base">15 min</span>
                                <span class="font-bold text-xs uppercase">Espera máx.</span>
                            </div>
                        </div>

                        <Link to="/especialidades" class="mt-1 inline-flex items-center gap-3 px-7 py-3 bg-black text-white font-black text-sm uppercase tracking-wider border-2 border-black shadow-[6px_6px_0px_0px_#FFD600] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            Explorar Áreas
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                        </Link>
                    </div>

                    {/* <!-- Columna Derecha: Imagen Real con Marco Memphis --> */}
                    <div class="lg:col-span-6 flex justify-center">
                        <div class="relative w-full max-w-md bg-[#72EFDD] border-4 border-black shadow-[10px_10px_0px_0px_#000] p-4">

                            {/* <!-- Esquina decorativa cruz médica --> */}
                            <div class="absolute -top-5 -left-5 z-20 w-14 h-14 bg-[#FFD600] border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000]">
                                <svg class="w-7 h-7 text-[#FF4D6D]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" stroke="#000" stroke-width="1.5" />
                                </svg>
                            </div>

                            {/* <!-- Imagen Real --> */}
                            <div class="relative border-4 border-black overflow-hidden bg-white aspect-[4/3]">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                                    alt="Consulta médica en VITA+ Centro Médico"
                                    class="w-full h-full object-cover"
                                />
                            </div>

                            {/* <!-- Pie de foto Memphis --> */}
                            <div class="mt-3 flex items-center justify-between bg-white border-2 border-black px-3 py-2">
                                <span class="font-black text-xs uppercase tracking-wide">Diagnóstico Digital</span>
                                <span class="px-2 py-0.5 bg-[#80ED99] border border-black font-black text-[11px] uppercase">En vivo</span>
                            </div>

                            {/* <!-- Tarjeta flotante pulso --> */}
                            <div class="absolute -bottom-5 -right-4 z-20 bg-white border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000] rotate-3 flex items-center gap-3">
                                <svg class="w-9 h-5 text-[#FF4D6D]" viewBox="0 0 60 30" fill="none">
                                    <path d="M2 15 H14 L20 4 L28 26 L35 10 L40 15 H58" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="font-black text-sm">72 BPM</span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}