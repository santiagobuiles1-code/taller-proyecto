import React from 'react'

function PlanesCard() {
    return (
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
            <a href="#cita" class="w-full py-2.5 bg-white border-2 border-black font-black text-xs uppercase text-center shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                Elegir Esencial
            </a>
        </div>
    )
}

export default PlanesCard