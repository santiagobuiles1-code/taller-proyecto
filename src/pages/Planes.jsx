import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export function Planes() {
    return (
        <>
            <Header/>
            <section id="planes" class="relative h-screen w-full snap-start overflow-hidden bg-[#FFFDF5] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black">

                {/* <!-- Decoración Memphis --> */}
                <svg class="absolute top-20 right-10 w-20 h-20 pointer-events-none hidden md:block" viewBox="0 0 100 100" fill="none">
                    <circle cx="20" cy="20" r="5" fill="#FF4D6D" />
                    <circle cx="50" cy="20" r="5" fill="#FF4D6D" />
                    <circle cx="80" cy="20" r="5" fill="#FF4D6D" />
                    <circle cx="20" cy="50" r="5" fill="#FF4D6D" />
                    <circle cx="50" cy="50" r="5" fill="#FF4D6D" />
                    <circle cx="80" cy="50" r="5" fill="#FF4D6D" />
                </svg>

                <div class="max-w-6xl w-full relative z-10 flex flex-col gap-5">
                    <div class="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <div class="flex items-center gap-3">
                                <span class="px-3 py-1 bg-[#FF4D6D] text-white border-2 border-black font-black text-sm uppercase">04</span>
                                <h2 class="text-3xl sm:text-4xl font-black uppercase tracking-tight">Planes VITA+</h2>
                            </div>
                            <p class="font-bold text-xs sm:text-sm mt-1">Membresías mensuales sin letras pequeñas ni tiempos de espera.</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
                        {/* <!-- Plan 1 --> */}
                        <div class="bg-[#72EFDD] border-4 border-black p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-4">
                            <div>
                                <span class="px-2.5 py-0.5 bg-white border-2 border-black font-black text-xs uppercase">Esencial</span>
                                <div class="mt-3 flex items-baseline gap-1">
                                    <span class="text-4xl font-black">$29</span>
                                    <span class="font-bold text-xs uppercase">/ mes</span>
                                </div>
                                <ul class="mt-4 flex flex-col gap-2 text-xs font-bold">
                                    <li class="flex items-center gap-2"><span class="w-3 h-3 bg-black inline-block"></span> Consultas generales ilimitadas</li>
                                    <li class="flex items-center gap-2"><span class="w-3 h-3 bg-black inline-block"></span> Telemedicina 24/7</li>
                                    <li class="flex items-center gap-2"><span class="w-3 h-3 bg-black inline-block"></span> 20% dto. en laboratorio</li>
                                </ul>
                            </div>
                            <Link to="/cita" class="w-full py-2.5 bg-white border-2 border-black font-black text-xs uppercase text-center shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                                Elegir Esencial
                            </Link>
                        </div>

                        {/* <!-- Plan 2 (Destacado) --> */}
                        <div class="bg-[#FFD600] border-4 border-black p-5 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between gap-4 md:-translate-y-2">
                            <div>
                                <div class="flex items-center justify-between">
                                    <span class="px-2.5 py-0.5 bg-[#FF4D6D] text-white border-2 border-black font-black text-xs uppercase">Familiar</span>
                                    <span class="px-2 py-0.5 bg-black text-[#FFD600] font-black text-[10px] uppercase">Popular</span>
                                </div>
                                <div class="mt-3 flex items-baseline gap-1">
                                    <span class="text-4xl font-black">$59</span>
                                    <span class="font-bold text-xs uppercase">/ mes</span>
                                </div>
                                <ul class="mt-4 flex flex-col gap-2 text-xs font-bold">
                                    <li class="flex items-center gap-2"><span class="w-3 h-3 bg-black inline-block"></span> Hasta 4 integrantes</li>
                                    <li class="flex items-center gap-2"><span class="w-3 h-3 bg-black inline-block"></span> Pediatría y Odontología incluidas</li>
                                    <li class="flex items-center gap-2"><span class="w-3 h-3 bg-black inline-block"></span> Urgencias 24H sin copago</li>
                                </ul>
                            </div>
                            <Link to="/cita" class="w-full py-2.5 bg-black text-white border-2 border-black font-black text-xs uppercase text-center shadow-[4px_4px_0px_0px_#FF4D6D] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                                Elegir Familiar
                            </Link>
                        </div>

                        {/* <!-- Plan 3 --> */}
                        <div class="bg-[#C8B6FF] border-4 border-black p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-4">
                            <div>
                                <span class="px-2.5 py-0.5 bg-white border-2 border-black font-black text-xs uppercase">Preventivo+</span>
                                <div class="mt-3 flex items-baseline gap-1">
                                    <span class="text-4xl font-black">$45</span>
                                    <span class="font-bold text-xs uppercase">/ mes</span>
                                </div>
                                <ul class="mt-4 flex flex-col gap-2 text-xs font-bold">
                                    <li class="flex items-center gap-2"><span class="w-3 h-3 bg-black inline-block"></span> Chequeo anual completo</li>
                                    <li class="flex items-center gap-2"><span class="w-3 h-3 bg-black inline-block"></span> Cardiología y Oftalmología</li>
                                    <li class="flex items-center gap-2"><span class="w-3 h-3 bg-black inline-block"></span> Análisis clínicos incluidos</li>
                                </ul>
                            </div>
                            <Link to="/cita" class="w-full py-2.5 bg-white border-2 border-black font-black text-xs uppercase text-center shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                                Elegir Preventivo+
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}