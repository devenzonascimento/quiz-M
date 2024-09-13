import { Quiz } from "./components/quiz"

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <header className="h-14 w-full flex justify-center items-center bg-[#F7F7F7]">
        <img src="./logo.avif" alt="" className="w-28" />
      </header>

      <main className="w-full flex-1 flex flex-col items-center p-5 bg-[#F7F7F7]">
        <Quiz />
      </main>

      <footer className="w-full flex flex-col items-center p-2">
        <span className="text-center text-sm font-semibold text-black">© 2024 - Marçal</span>
        <img src="./site-seguro.webp" alt="" className="w-44 invert" />
      </footer>
    </div>
  )
}

export default App
