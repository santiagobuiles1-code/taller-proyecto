import { Link } from "react-router-dom"

export function Footer() {
    return (
        <footer class="fixed bottom-0 left-0 right-0 z-50 bg-black text-white border-t-4 border-black px-4 md:px-10 h-12 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="w-3 h-3 bg-[#FFD600] inline-block"></span>
                <span class="font-black text-xs uppercase tracking-widest">VITA+ CENTRO MÉDICO</span>
            </div>

            <div class="hidden sm:flex items-center gap-4 text-xs font-bold uppercase">
                <span class="text-[#72EFDD]">● Urgencias 24H</span>
                <span class="text-[#FFD600]">● Av. Central 420</span>
            </div>

            <div class="flex items-center gap-2">
                <Link to="/" class="px-2.5 py-0.5 bg-[#FF4D6D] text-white border border-white font-black text-[11px] uppercase hover:bg-[#FFD600] hover:text-black transition-colors">
                    ↑ Subir
                </Link>
            </div>
        </footer>
    )
}