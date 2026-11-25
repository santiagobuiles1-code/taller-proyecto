import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function Cita() {
    return (
        <>
            <Header/>
            <section id="cita" class="relative h-screen w-full snap-start overflow-hidden bg-[#FFD600] pt-20 pb-16 px-6 md:px-12 flex items-center justify-center border-t-4 border-black">

                {/* <!-- Patrón Memphis --> */}
                <svg class="absolute top-20 left-8 w-20 h-20 pointer-events-none hidden md:block" viewBox="0 0 100 100" fill="none">
                    <path d="M10 20 L30 40 L10 60 M40 20 L60 40 L40 60" stroke="#000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center relative z-10">

                    {/* <!-- Panel Izquierdo: Reserva Rápida --> */}
                    <div class="bg-[#FFFDF5] border-4 border-black p-5 md:p-7 shadow-[8px_8px_0px_0px_#000] flex flex-col gap-4">
                        <div class="flex items-center justify-between">
                            <div>
                                <h2 class="text-3xl font-black uppercase">Tu Cita</h2>
                                <p class="text-xs font-bold text-neutral-700 mt-0.5">Elige un horario y confirmamos tu turno al instante.</p>
                            </div>
                            <span class="px-3 py-1 bg-[#FF4D6D] text-white border-2 border-black font-black text-xs uppercase -rotate-3">Hoy</span>
                        </div>

                        {/* <!-- Horarios Visuales --> */}
                        <div class="grid grid-cols-3 gap-2">
                            <button type="button" class="py-2 bg-[#72EFDD] border-2 border-black font-black text-sm shadow-[3px_3px_0px_0px_#000] hover:bg-[#3A86FF] hover:text-white transition-colors">09:00</button>
                            <button type="button" class="py-2 bg-white border-2 border-black font-black text-sm shadow-[3px_3px_0px_0px_#000] hover:bg-[#3A86FF] hover:text-white transition-colors">11:30</button>
                            <button type="button" class="py-2 bg-[#C8B6FF] border-2 border-black font-black text-sm shadow-[3px_3px_0px_0px_#000] hover:bg-[#3A86FF] hover:text-white transition-colors">16:00</button>
                        </div>

                        {/* <!-- Inputs --> */}
                        <div class="flex flex-col gap-2.5">
                            <input type="text" placeholder="Nombre completo" class="w-full px-4 py-2 bg-white border-2 border-black font-bold text-sm focus:outline-none focus:bg-[#72EFDD]" />
                            <input type="tel" placeholder="Teléfono / WhatsApp" class="w-full px-4 py-2 bg-white border-2 border-black font-bold text-sm focus:outline-none focus:bg-[#72EFDD]" />
                            <select class="w-full px-4 py-2 bg-white border-2 border-black font-bold text-sm focus:outline-none focus:bg-[#72EFDD]">
                                <option>Medicina General</option>
                                <option>Cardiología</option>
                                <option>Pediatría</option>
                                <option>Odontología</option>
                                <option>Laboratorio</option>
                                <option>Oftalmología</option>
                            </select>
                        </div>

                        <button type="button" class="w-full py-3 bg-[#FF4D6D] text-white border-2 border-black font-black text-sm uppercase tracking-wider shadow-[5px_5px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2">
                            Reservar Ahora
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* <!-- Panel Derecho: Imagen Real de Clínica + Datos --> */}
                    <div class="bg-[#C8B6FF] border-4 border-black p-5 shadow-[8px_8px_0px_0px_#000] flex flex-col gap-4">
                        <div class="relative border-4 border-black overflow-hidden bg-white h-48 md:h-52">
                            <img
                                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80"
                                alt="Instalaciones de VITA+ Centro Médico"
                                class="w-full h-full object-cover"
                            />
                            <div class="absolute top-3 left-3 bg-[#FFD600] border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000]">
                                Sede Central
                            </div>
                        </div>

                        <div class="bg-white border-2 border-black p-3 flex flex-col gap-1">
                            <h3 class="font-black text-sm uppercase">Visítanos sin cita previa en Urgencias</h3>
                            <p class="text-xs font-bold text-neutral-700">Estacionamiento gratuito y acceso directo para ambulancias.</p>
                        </div>

                        {/* <!-- Badges de Ubicación y Teléfono --> */}
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center gap-2 bg-white border-2 border-black px-3 py-1.5 shadow-[3px_3px_0px_0px_#000]">
                                <svg class="w-4 h-4 text-[#FF4D6D]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                </svg>
                                <span class="font-black text-xs uppercase">Av. Central 420</span>
                            </div>
                            <div class="flex items-center gap-2 bg-[#FFD600] border-2 border-black px-3 py-1.5 shadow-[3px_3px_0px_0px_#000]">
                                <svg class="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span class="font-black text-xs">800-8482</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}