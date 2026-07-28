import Home from "./pages/Home"
import { LanguageProvider } from "./lib/language-context"
function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  )
}

export default App
