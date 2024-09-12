

function App() {
// FONTE MONTSERRAT
  return (
    <>
      <header>
        <img src="./logo.avif" alt="" />
      </header>
      <main>
        <div className="card">

        </div>
      </main>

      <div className="modal">
        <img src="./logo.avif" alt="" />
        <h2>Pesquisa oficial Marçal💙</h2>
        <p>Responda à pesquisa Eleitoral do Pablo Marçal e ao final ganhe um KIT COMPLETO FAZ O M TOTALMENTE DE GRAÇA!!!</p>
        <span>Pronto(a) para começar?</span>
        <button>Quero participar</button>
        <span>Este site é 100% seguro.</span>
      </div>


      <div className="rescue">
        <h1>PARABÉNS!</h1>
        
        <img src="" alt="" />
        
        <p>Agradecemos o seu tempo, obrigado por responder nossa pesquisa eleitoral, como agradecimento, receba um KIT COMPLETO FAZ O M TOTALMENTE DE GRAÇA. Clique no botão Resgatar abaixo!
        </p>

        <p>
          Não perca, esta é a sua chance de apoiar São Paulo!
        </p>

        <p>
          Com apreço,
          <br />
          Equipe Pablo Marçal
        </p>
      </div>

      <button>RESGATAR</button>
      <footer>
        <img src="./site-seguro.webp" alt="" />
      </footer>
    </>
  )
}

export default App

const content = [
  {
    question: "Qual sua opinião da suspensão das redes sociais de Pablo Marçal?",
    options: [
      "Concordo!",
      "Discordo!",
      "Não tenho uma opinião"
    ],
  },
  {
    question: "Você irá votar em Pablo Marçal?",
    options: [
      "Sim!",
      "Não...",
    ],
  },
  {
    question: "Você acredita que terá segundo turno?",
    options: [
      "Sim",
      "Não",
      "Talvez",
    ],
  },
  {
    question: "Quais suas expectativas para as eleições 2024?",
    options: [
      "Marçal prefeito de São Paulo!",
      "Marçal fora das eleições!",
    ],
  },
]

