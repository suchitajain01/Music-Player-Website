import { BrowserRouter, Routes, Route } from "react-router-dom"
import Charts from "./pages/charts"
import FrontPage from "./pages/FrontPage"
import Home from "./pages/home"
import TopPlaylists from "./pages/playlists"


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* First page */}
        <Route path="/" element={<FrontPage />} />

        {/* Home page */}
        <Route path="/home" element={<Home />} />

        <Route path = "/playlists" element = {<TopPlaylists/>}
        />
        <Route path = "/charts" element = {<Charts/>}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App