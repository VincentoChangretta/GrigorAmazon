import './App.css'
import { Header } from './Components/Global/Header'
import { Footer } from './Components/Global/Footer'
import { Navigation } from './Components/Global/Navigation'

function App() {


  return (
    <>
      <div className="wrapper flex flex-col min-h-[100svh]">
        <div className="container grow flex flex-col">
          <Header />
          <main className='grow'>
            <Navigation />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
