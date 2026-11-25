export function EquipoCard() {
    return (
        <div class="bg-[#FFFDF5] border-4 border-black p-4 shadow-[6px_6px_0px_0px_#000] flex flex-col gap-3">
            <div class="relative border-2 border-black overflow-hidden h-44 bg-[#72EFDD]">
                <img src="https://images.unsplash.com/photo-1673865641073-4479f93a7776?auto=format&fit=crop&w=700&q=80" alt="Dra. Laura Méndez" class="w-full h-full object-cover" />
                <span class="absolute bottom-2 left-2 px-2.5 py-0.5 bg-[#FFD600] border-2 border-black font-black text-[11px] uppercase">12 años exp.</span>
            </div>
            <div>
                <h3 class="font-black text-lg uppercase">Dra. Laura Méndez</h3>
                <p class="font-bold text-xs text-[#FF4D6D] uppercase">Cardiología Clínica</p>
                <p class="text-xs font-medium text-neutral-700 mt-1">Especialista en diagnóstico cardiovascular no invasivo y prevención.</p>
            </div>
        </div>
    )
}