import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { equipo } from "../data/equipoData"
import { EquipoCard } from "../components/EquipoCard"

export function Equipo() {
    return (
        <>
            <Header />
            <section id="equipo" class="relative h-screen w-full snap-start overflow-hidden bg-[#C8B6FF] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black">

                {/* <!-- Decoración Memphis --> */}
                <svg class="absolute top-20 left-8 w-20 h-10 pointer-events-none hidden md:block" viewBox="0 0 120 40" fill="none">
                    <path d="M5 30 L20 10 L35 30 L50 10 L65 30 L80 10 L95 30 L110 10" stroke="#000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg class="absolute bottom-16 right-10 w-16 h-16 pointer-events-none hidden md:block" viewBox="0 0 80 80" fill="none">
                    <polygon points="40,8 72,68 8,68" fill="#FFD600" stroke="#000" stroke-width="4" />
                </svg>

                <div class="max-w-6xl w-full relative z-10 flex flex-col gap-5">
                    <div class="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <div class="flex items-center gap-3">
                                <span class="px-3 py-1 bg-black text-[#FFD600] font-black text-sm uppercase">03</span>
                                <h2 class="text-3xl sm:text-4xl font-black uppercase tracking-tight">Equipo Médico</h2>
                            </div>
                            <p class="font-bold text-xs sm:text-sm mt-1">Especialistas certificados con trato cercano y tecnología de punta.</p>
                        </div>
                        <span class="hidden sm:inline-block px-4 py-1.5 bg-[#FFD600] border-2 border-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] rotate-2">
                            +20 Doctores
                        </span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {equipo.map((item) => (
                            <EquipoCard data={item}/>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}