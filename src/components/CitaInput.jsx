export function CitaInput({data}) {
  return (
    <input type={data.type} placeholder={data.placeholder} class="w-full px-4 py-2 bg-white border-2 border-black font-bold text-sm focus:outline-none focus:bg-[#72EFDD]" />
  )
}