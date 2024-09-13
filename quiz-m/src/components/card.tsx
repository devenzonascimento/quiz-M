import { useState } from "react";

interface CardProps {
  content: {
    question: string;
    image: {
      url: string;
      alt: string;
    };
    options: string[];
  }
  starsType: number;
  onSubmit: () => void
}

export function Card({ content, onSubmit }: CardProps) {

  const {
    image,
    question,
    options,
  } = content

  const [active, setActive] = useState(-1)

  return (
    <main className="w-full h-min p-4 flex flex-col gap-2 items-center bg-white rounded-xl">
      <img src={image.url} alt={image.alt} className="rounded-xl" />
      <p className="mt-3 text-center text-base font-medium text-[#212529] leading-4">{question}</p>
      <span className=" my-1 text-xs text-zinc-600">Selecione uma opção</span>
      <ul className="w-full flex flex-col gap-2">
        {options.map((option, index) => (
          <li className={`w-full py-3 px-6 flex items-center justify-center gap-2 border border-zinc-200 rounded-lg font-medium text-sm text-zinc-700 transition-all duration-500 ease-in-out ${active === index && "border-zinc-500 text-blue-500"}`}
          onClick={() => {
            setActive(index)            
          }}>
            <span>{option}</span>
          </li>
        ))}
      </ul>
      <button disabled={active === -1} className={`w-full mt-4 py-3 px-6 flex items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold text-white transition-all duration-500 ease-in-out ${active === -1 && "bg-zinc-300 text-zinc-400"}`} onClick={() => {
        if (active !== -1)  {
          setActive(-1)
          onSubmit()
        }
      }}>
        Prosseguir
      </button>
    </main>
  )
}
