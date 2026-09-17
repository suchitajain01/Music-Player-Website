import { BrowserRouter, Routes, Route } from "react-router-dom"

import FrontPage from "./pages/FrontPage"
import Home from "./pages/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* First page */}
        <Route path="/" element={<FrontPage />} />

        {/* Home page */}
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App