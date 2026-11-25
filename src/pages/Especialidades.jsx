import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { especialidad } from "../data/data"
import { AreaCard } from "../components/AreaCard"

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
                        {
                            especialidad.map((item) =>(
                                <AreaCard data={item}/>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}