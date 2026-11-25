import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function Especialidades() {
    return (
        <>
            <Header/>
            <section id="especialidades" class="relative h-screen w-full snap-start overflow-hidden bg-[#72EFDD] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black">

                {/* <!-- Decoración Memphis --> */}
                <svg class="absolute top-20 right-12 w-20 h-20 pointer-events-none hidden md:block" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="35" fill="#FFD600" stroke="#000" stroke-width="4" />
                    <circle cx="50" cy="50" r="15" fill="#72EFDD" stroke="#000" stroke-width="4" />
                </svg>

                <svg class="absolute bottom-16 left-8 w-16 h-16 pointer-events-none hidden md:block" viewBox="0 0 80 80" fill="none">
                    <rect x="15" y="15" width="50" height="50" fill="#FF4D6D" stroke="#000" stroke-width="4" transform="rotate(15 40 40)" />
                </svg>

                <div class="max-w-6xl w-full relative z-10 flex flex-col gap-4 md:gap-5">

                    {/* <!-- Encabezado + Tarjeta de Equipo Real --> */}
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div>
                            <div class="flex items-center gap-3">
                                <span class="px-3 py-1 bg-black text-[#FFD600] font-black text-sm uppercase">02</span>
                                <h2 class="text-3xl sm:text-4xl font-black uppercase tracking-tight">Áreas Médicas</h2>
                            </div>
                            <p class="font-bold text-xs sm:text-sm mt-1">Tecnología clínica y atención personalizada en cada consulta.</p>
                        </div>

                        <div class="hidden sm:flex items-center gap-3 bg-white border-2 border-black px-3 py-1.5 shadow-[4px_4px_0px_0px_#000]">
                            <img
                                src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?auto=format&fit=crop&w=200&q=80"
                                alt="Dra. Laura Méndez"
                                class="w-9 h-9 rounded-full object-cover border-2 border-black"
                            />
                            <div class="leading-tight">
                                <p class="font-black text-xs uppercase">Dra. Laura Méndez</p>
                                <p class="font-bold text-[11px] text-neutral-600">Dirección Médica · +20 Especialistas</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Grid de 6 Especialidades con texto breve --> */}
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">

                        {/* <!-- Card 1: Cardiología --> */}
                        <div class="bg-[#FF4D6D] text-white border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-transform flex flex-col items-center text-center gap-2">
                            <div class="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center">
                                <svg class="w-7 h-7 text-[#FF4D6D]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#000" stroke-width="1.5" />
                                </svg>
                            </div>
                            <h3 class="font-black text-sm md:text-base uppercase tracking-wide">Cardiología</h3>
                            <p class="text-xs font-bold leading-snug hidden sm:block">Electrocardiogramas, ecocardio y chequeo preventivo.</p>
                        </div>

                        {/* <!-- Card 2: Pediatría --> */}
                        <div class="bg-[#FFD600] text-black border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-transform flex flex-col items-center text-center gap-2">
                            <div class="w-12 h-12 bg-white border-2 border-black rounded-2xl flex items-center justify-center rotate-3">
                                <svg class="w-7 h-7 text-[#3A86FF]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#000" stroke-width="1.5" />
                                </svg>
                            </div>
                            <h3 class="font-black text-sm md:text-base uppercase tracking-wide">Pediatría</h3>
                            <p class="text-xs font-bold leading-snug hidden sm:block">Control de crecimiento, vacunas y cuidado infantil.</p>
                        </div>

                        {/* <!-- Card 3: Odontología --> */}
                        <div class="bg-[#FFFDF5] text-black border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-transform flex flex-col items-center text-center gap-2">
                            <div class="w-12 h-12 bg-[#72EFDD] border-2 border-black rounded-full flex items-center justify-center">
                                <svg class="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <path d="M7 4c-2.5 0-4 2-4 5 0 3 1.5 5 2 8 .5 2.5 1.5 4 2.5 4s1.5-2 2.5-4c.5-1 1.5-1 2 0 1 2 1.5 4 2.5 4s2-1.5 2.5-4c.5-3 2-5 2-8 0-3-1.5-5-4-5-1.5 0-2.5.8-3 1.5C11.5 4.8 10.5 4 7 4z" fill="#FFF" />
                                </svg>
                            </div>
                            <h3 class="font-black text-sm md:text-base uppercase tracking-wide">Odontología</h3>
                            <p class="text-xs font-bold leading-snug hidden sm:block">Limpieza dental, ortodoncia y estética sin dolor.</p>
                        </div>

                        {/* <!-- Card 4: Laboratorio --> */}
                        <div class="bg-[#C8B6FF] text-black border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-transform flex flex-col items-center text-center gap-2">
                            <div class="w-12 h-12 bg-[#FFD600] border-2 border-black flex items-center justify-center -rotate-3">
                                <svg class="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                                    <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
                                </svg>
                            </div>
                            <h3 class="font-black text-sm md:text-base uppercase tracking-wide">Laboratorio</h3>
                            <p class="text-xs font-bold leading-snug hidden sm:block">Análisis clínicos con resultados digitales el mismo día.</p>
                        </div>

                        {/* <!-- Card 5: Urgencias --> */}
                        <div class="bg-[#3A86FF] text-white border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-transform flex flex-col items-center text-center gap-2">
                            <div class="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center">
                                <svg class="w-7 h-7 text-[#FF4D6D]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" stroke="#000" stroke-width="1.5" />
                                </svg>
                            </div>
                            <h3 class="font-black text-sm md:text-base uppercase tracking-wide">Urgencias</h3>
                            <p class="text-xs font-bold leading-snug hidden sm:block">Atención rápida las 24 horas todos los días del año.</p>
                        </div>

                        {/* <!-- Card 6: Oftalmología --> */}
                        <div class="bg-[#80ED99] text-black border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-transform flex flex-col items-center text-center gap-2">
                            <div class="w-12 h-12 bg-white border-2 border-black rounded-2xl flex items-center justify-center">
                                <svg class="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" fill="#FFD600" />
                                    <circle cx="12" cy="12" r="3" fill="#000" />
                                </svg>
                            </div>
                            <h3 class="font-black text-sm md:text-base uppercase tracking-wide">Oftalmología</h3>
                            <p class="text-xs font-bold leading-snug hidden sm:block">Examen visual completo y salud ocular avanzada.</p>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}