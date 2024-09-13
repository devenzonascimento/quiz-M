import { useState } from "react"

export function PopUp() {

  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <dialog className="p-7 flex flex-col items-center gap-4 mx-3 rounded-lg bg-[#F7F7F7]" open>
            <img src="./logo.avif" alt="" className="w-[125px]" />
            <h2 className="text-lg font-bold text-[#212529]">Pesquisa oficial Marçal💙</h2>
            <p className="text-center text-sm font-medium text-[#212529] leading-4">Responda à pesquisa Eleitoral do Pablo Marçal e ao final ganhe um KIT COMPLETO FAZ O M TOTALMENTE DE GRAÇA!!!</p>
            <span className="text-center text-sm font-bold text-[#212529] leading-4">Pronto(a) para começar?</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="animate-5 w-full mt-4 py-3 px-6 flex items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold text-white"
            >Quero participar</button>
            <span className="text-center text-sm font-medium text-[#212529] leading-4">Este site é 100% seguro.</span>          
          </dialog>
        </div>
      )}
    </>
  )
}