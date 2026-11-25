import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { tecnologia } from "../data/dataClinica"
import { ClinicaCard } from "../components/ClinicaCard"

export function Tecnologia() {
    return (
        <>
            <Header/>
            <section id="tecnologia" class="relative h-screen w-full snap-start overflow-hidden bg-[#80ED99] pt-20 pb-16 px-6 md:px-12 flex items-center justify-center border-t-4 border-black">

                {/* <!-- Decoración Memphis --> */}
                <svg class="absolute bottom-16 right-8 w-20 h-20 pointer-events-none hidden md:block" viewBox="0 0 80 80" fill="none">
                    <rect x="15" y="15" width="50" height="50" fill="#FFD600" stroke="#000" stroke-width="4" transform="rotate(12 40 40)" />
                </svg>

                <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">

                    {/* <!-- Foto grande de instalaciones --> */}
                    <div class="lg:col-span-6">
                        <div class="bg-[#FFFDF5] border-4 border-black p-4 shadow-[8px_8px_0px_0px_#000]">
                            <div class="relative border-2 border-black overflow-hidden aspect-[4/3]">
                                <img
                                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80"
                                    alt="Tecnología médica moderna"
                                    class="w-full h-full object-cover"
                                />
                                <span class="absolute top-3 left-3 px-3 py-1 bg-[#FF4D6D] text-white border-2 border-black font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000]">
                                    Equipamiento 2026
                                </span>
                            </div>
                            <div class="mt-3 flex items-center justify-between">
                                <span class="font-black text-sm uppercase">Salas Digitales</span>
                                <span class="font-bold text-xs bg-[#FFD600] border-2 border-black px-2.5 py-0.5">Certificación ISO</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Bloques de tecnología --> */}
                    <div class="lg:col-span-6 flex flex-col gap-4">
                        <div class="flex items-center gap-3">
                            <span class="px-3 py-1 bg-black text-[#80ED99] font-black text-sm uppercase">05</span>
                            <h2 class="text-3xl sm:text-4xl font-black uppercase tracking-tight">Clínica Inteligente</h2>
                        </div>
                        <p class="font-bold text-xs sm:text-sm">Infraestructura diseñada para darte diagnósticos precisos en minutos.</p>

                        <div class="grid grid-cols-2 gap-3">
                            {
                                tecnologia.map((item) =>(
                                    <ClinicaCard data={item}/>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}