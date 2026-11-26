import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { planes } from "../data/planesData"
import { PlanesCard } from "../components/PlanesCard"

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
                        {planes.map((item) => (
                            <PlanesCard data={item}/>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}