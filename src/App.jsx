import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { NoEncontrado } from "./Pages/NoEncontrado"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NoEncontrado />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
