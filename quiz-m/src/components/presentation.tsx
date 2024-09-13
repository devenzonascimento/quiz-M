import { useEffect, useState } from "react"

interface PresentationProps {
  onSubmit: () => void
}

export function Presentation({ onSubmit }: PresentationProps) {


  const [isOpen, setIsOpen] = useState([
    false,
    false,
    false,
    false,
    false,
  ])

  useEffect(() => {
    let count = -1

    function animation() {
      setIsOpen(isOpen => isOpen.map((_, i) =>
        count >= i
      ))

      count = count + 1
    }

    const intervalId = setInterval(animation, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 8000);
  }, [])

  return (
    <div className="w-full h-min p-4 flex flex-col items-center bg-white rounded-lg transition-all duration-300">
      <h1 className="text-xl font-medium">Bem-vindo</h1>
      <span className="text-xs text-zinc-600 mb-3">Pesquisa Eleitoral</span>

      <ul className="w-full flex flex-col gap-2">
        {isOpen[0] && (
          <li className="animate-1 w-full py-3 px-6 flex items-center gap-2 border border-zinc-200 rounded-lg font-medium text-base text-zinc-700">
            <img src="./M.png" alt="" className="size-5" />
            <span>Verificando elegibilidade</span>
          </li>
        )}
        {isOpen[1] && (
          <li className="animate-2 w-full py-3 px-6 flex items-center gap-2 border border-zinc-200 rounded-lg font-medium text-base text-zinc-700">
            <img src="./M.png" alt="" className="size-5" />
            <span>Verificando promoção</span>
          </li>
        )}
        {isOpen[2] && (
          <li className="animate-3 w-full py-3 px-6 flex items-center gap-2 border border-zinc-200 rounded-lg font-medium text-base text-zinc-700">
            <img src="./M.png" alt="" className="size-5" />
            <span>Tudo certo!</span>
          </li>
        )}
        {isOpen[3] && (
          <li className="animate-4 w-full py-3 px-6 flex items-center gap-2 border border-zinc-200 rounded-lg font-medium text-base text-zinc-700">
            <img src="./M.png" alt="" className="size-5" />
            <span>Clique em prosseguir</span>
          </li>
        )}
      </ul>

      {isOpen[4] && (
        <button className="animate-5 w-full mt-4 py-3 px-6 flex items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white" onClick={onSubmit}>
          Prosseguir
        </button>
      )}
    </div>
  )
}
