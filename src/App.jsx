import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "@/Components/Home"
import NotFound from "@/Components/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
