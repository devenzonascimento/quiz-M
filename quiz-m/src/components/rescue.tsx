import { content } from "../data/content";

export function Rescue() {
  return (
    <main className="w-full h-min p-4 flex flex-col gap-2 items-center bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-blue-600 uppercase">Parabéns!</h1>
      <img src="./step-5.webp" alt="resgatar recompensa" className="size-36 rounded-xl mb-4" />
      <div className="content">
        <p className="text-start text-sm font-normaç text-[#212529]">
          {content.rescueContent.texts[0]}
          <br />
          <br />
          {content.rescueContent.texts[1]}
          <br />
          <br />
          {content.rescueContent.texts[2]}
          <br />
          {content.rescueContent.texts[3]}
        </p>
      </div>
      <a
        href={content.rescueContent.redirectUrl}
        type="button"
        className="animate-pulse uppercase w-full mt-4 py-3 px-6 flex items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white"
      >
        {content.rescueContent.buttonText}
      </a>
    </main>
  )
}
