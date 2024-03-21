import Header from "./components/Header";
import {Phrase} from "./components/Phrase"
import {Footer} from "./components/Footer"

function App() {
  return(
    <div className="h-screen w-screen flex flex-col box-border">
      <Header />
      <div className="flex flex-col align-items-center justify-center h-full">
        <Phrase />
      </div>
      <Footer />
    </div>
    
  )
}

export default App
