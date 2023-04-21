import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/Card'
import cardData from "./data"

function App() {
  let cards = cardData.map(card => {
    return <Card
              key = {card.id}
              {...card}
           />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
