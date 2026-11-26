export function ButtonCita({data}) {
  return (
    <button type="button" class={`py-2 ${data.colorFondo} border-2 border-black font-black text-sm shadow-[3px_3px_0px_0px_#000] hover:bg-[#3A86FF] hover:text-white transition-colors`}>{data.hora}</button>
  )
}