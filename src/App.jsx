import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { LanguageProvider } from "./lib/language-context"
function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
